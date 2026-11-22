// sanggup prototype. Everything lives in localStorage; there is no server.
// In this prototype the learner and instructor share one device. A real
// version would sync sign-off requests between the learner's and the
// instructor's devices.

const STORE_KEY = "sanggup-demo-v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.done && typeof parsed.done === "object" &&
          Array.isArray(parsed.archive) && Array.isArray(parsed.requests)) return parsed;
    }
  } catch (e) { /* corrupted state falls through to fresh */ }
  return { done: {}, archive: [], requests: [] };
}

function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no easily-confused chars

function makeCode() {
  const buf = new Uint8Array(6);
  crypto.getRandomValues(buf);
  return Array.from(buf, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
}

// Cross-device sign-off: the request travels inside the share link as readable
// text, and the reviewer's decision comes back as a short code derived from a
// hash of the request code and the verdict. This is a conversation structure,
// not security: anyone can recompute a response code, so it is not proof of
// who reviewed. The honesty notes in the app say the same.

function base64urlEncode(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function signoffLink(req) {
  const payload = base64urlEncode(JSON.stringify({
    v: 1,
    code: req.code,
    track: req.trackTitle,
    stage: req.stageTitle,
    task: req.task,
    requestedAt: req.requestedAt,
  }));
  const base = location.origin + location.pathname.replace(/[^/]*$/, "");
  return base + "signoff/#" + payload;
}

async function responseCode(code, verdict) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`sanggup-signoff-v1|${code}|${verdict}`)
  );
  const bytes = new Uint8Array(digest);
  let out = "";
  for (let i = 0; i < 6; i++) out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  return out;
}

let state = loadState();
let currentTrack = null;
function escapeText(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

const $ = (id) => document.getElementById(id);
const learnerView = $("learner-view");
const teacherView = $("teacher-view");

function setRole(role) {
  learnerView.hidden = role !== "learner";
  teacherView.hidden = role !== "teacher";
  $("role-learner").classList.toggle("active", role === "learner");
  $("role-teacher").classList.toggle("active", role === "teacher");
  if (role === "teacher") renderTeacher();
  else if (currentTrack) renderPath(currentTrack);
}

$("role-learner").addEventListener("click", () => setRole("learner"));
$("role-teacher").addEventListener("click", () => setRole("teacher"));

// ---------- learner: track list ----------

function renderTracks() {
  currentTrack = null;
  const wrap = $("track-list");
  wrap.innerHTML = "";
  $("path-view").hidden = true;
  for (const track of window.SANGGUP_TRACKS) {
    if (track.parent) continue;
    const planned = track.status === "planned";
    const card = document.createElement("button");
    card.className = "track-card" + (planned ? " planned" : "");
    card.title = track.title + ": " + track.tagline;
    card.setAttribute(
      "aria-label",
      track.title + ", " + track.tagline + (planned ? ", planned, not available yet" : ", prototype path")
    );
    card.innerHTML =
      `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${track.icon}</svg>` +
      `<span class="tt">${track.short || track.title}</span>` +
      (planned ? `<em>soon</em>` : "");
    if (!planned) {
      card.addEventListener("click", () => {
        location.hash = track.id;
        if (track.children) renderGroup(track); else renderPath(track);
      });
    } else {
      card.disabled = true;
    }
    wrap.appendChild(card);
  }
}

$("back-to-tracks").addEventListener("click", () => { location.hash = ""; renderTracks(); });


// ---------- learner: parent tile chooser (retired; aliases kept) ----------

function renderGroup(track) {
  currentTrack = null;
  const wrap = $("track-list");
  wrap.innerHTML = "";
  $("path-view").hidden = true;
  const back = document.createElement("button");
  back.className = "link-btn";
  back.style.gridColumn = "1 / -1";
  back.style.justifySelf = "start";
  back.innerHTML = "&larr; all skills";
  back.addEventListener("click", () => { location.hash = ""; renderTracks(); });
  wrap.appendChild(back);
  for (const childId of track.children) {
    const child = window.SANGGUP_TRACKS.find((t) => t.id === childId);
    if (!child) continue;
    const card = document.createElement("button");
    card.className = "track-card";
    card.title = child.title + ": " + child.tagline;
    card.setAttribute("aria-label", child.title + ", " + child.tagline + ", prototype path");
    card.innerHTML =
      `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${child.icon}</svg>` +
      `<span class="tt">${child.short || child.title}</span>`;
    card.addEventListener("click", () => { location.hash = child.id; renderPath(child); });
    wrap.appendChild(card);
  }
}

// ---------- learner: one path ----------

function stageState(track, stage) {
  if (state.done[stage.id]) return "done";
  if (stage.kind === "milestone") {
    const req = state.requests.find(
      (r) => r.stageId === stage.id && r.status === "pending"
    );
    if (req) return "awaiting";
  }
  // a stage unlocks when every earlier stage is done
  const idx = track.stages.indexOf(stage);
  const unlocked = track.stages.slice(0, idx).every((s) => state.done[s.id]);
  return unlocked ? "open" : "locked";
}

function renderPath(track) {
  currentTrack = track;
  $("track-list").innerHTML = "";
  $("path-view").hidden = false;
  $("path-title").textContent = track.title;
  $("path-tagline").textContent = track.tagline;
  $("path-note").textContent = track.note || "";
  $("path-note").hidden = !track.note;
  const src = $("path-sources");
  src.innerHTML = "";
  for (const s of track.sources || []) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = s.url;
    a.textContent = s.label;
    a.rel = "noopener noreferrer";
    li.appendChild(a);
    src.appendChild(li);
  }
  $("path-sources-wrap").hidden = !(track.sources && track.sources.length);

  const list = $("stage-list");
  list.innerHTML = "";

  track.stages.forEach((stage, i) => {
    const st = stageState(track, stage);
    const card = document.createElement("article");
    card.className = "stage-card " + st;
    card.id = "stage-" + stage.id;

    const kindLabel = stage.kind === "milestone" ? "practical milestone" : "practice";
    let html =
      `<header><span class="stage-num">${i + 1}</span>` +
      `<h3>${stage.title}</h3><span class="kind">${kindLabel}</span></header>` +
      `<p>${stage.lesson}</p>`;

    if (stage.kind === "practice") {
      html += `<p class="task"><strong>Do it:</strong> ${stage.practice}</p>`;
    } else {
      html += `<p class="task"><strong>Do it:</strong> ${stage.milestone}</p>`;
    }

    if (Array.isArray(stage.tools) && stage.tools.length) {
      const items = stage.tools
        .map((t) => {
          const name = t.url
            ? `<a href="${t.url}" target="_blank" rel="noopener">${t.label}</a>`
            : t.label;
          return t.note ? `${name} <span class="muted">(${t.note})</span>` : name;
        })
        .join(" · ");
      html +=
        `<p class="tools-line"><strong>Tools to try, optional:</strong> ${items}. ` +
        `Never required: the exercise above works with pen and paper.</p>`;
    }

    if (st === "open" && stage.kind === "practice") {
      html += `<button class="primary" data-act="finish" data-id="${stage.id}">I did it</button>`;
    } else if (st === "open" && stage.kind === "milestone") {
      html += `<button class="primary" data-act="request" data-id="${stage.id}">Request sign-off</button>`;
    } else if (st === "awaiting") {
      const req = state.requests.find(
        (r) => r.stageId === stage.id && r.status === "pending"
      );
      html +=
        `<div class="code-box">Show this code to your instructor: ` +
        `<strong>${req.code}</strong><br><span class="muted">Same device: open ` +
        `the teaching view here. Another device: use the share link below.</span></div>` +
        `<details class="share-box"><summary>Share with a reviewer on another device</summary>` +
        `<p class="muted">The link carries this request as readable text: anyone ` +
        `who has the link can read it, so send it only to your reviewer. The ` +
        `response code is not proof of who reviewed; it records that a ` +
        `conversation happened.</p>` +
        `<div class="code-row">` +
        `<input id="share-link-${req.code}" readonly aria-label="Share link">` +
        `<button type="button" data-share-copy="${req.code}">Copy link</button>` +
        `</div>` +
        `<div class="qr-wrap" id="share-qr-${req.code}"></div>` +
        `<label for="resp-${req.code}">Response code from your reviewer</label>` +
        `<div class="code-row">` +
        `<input id="resp-${req.code}" inputmode="latin" maxlength="6" placeholder="e.g. Q7KM2P" autocomplete="off">` +
        `<button type="button" class="primary" data-resp-apply="${req.code}">Apply response</button>` +
        `</div>` +
        `<p class="muted" id="resp-msg-${req.code}" role="status"></p>` +
        `</details>`;
    } else if (st === "done") {
      html += `<p class="done-label">done</p>`;
    } else {
      html += `<p class="muted">Finish the earlier steps to unlock this.</p>`;
    }

    card.innerHTML = html;
    list.appendChild(card);
  });

  list.querySelectorAll("button[data-act]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const stage = track.stages.find((s) => s.id === id);
      if (btn.getAttribute("data-act") === "finish") {
        completeStage(track, stage, "self");
      } else {
        requestSignOff(track, stage);
      }
    });
  });

  list.querySelectorAll("[data-share-copy]").forEach((btn) => {
    const code = btn.getAttribute("data-share-copy");
    const req = state.requests.find(
      (r) => r.code === code && r.status === "pending"
    );
    if (!req) return;
    const link = signoffLink(req);
    const input = $("share-link-" + code);
    if (input) input.value = link;
    const qrWrap = $("share-qr-" + code);
    if (qrWrap && typeof qrcode === "function") {
      try {
        const qr = qrcode(0, "M");
        qr.addData(link);
        qr.make();
        qrWrap.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
      } catch (e) { /* QR is a convenience; the link above still works */ }
    }
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(link).then(
        () => { btn.textContent = "Copied"; },
        () => { btn.textContent = "Copy failed; long-press the link field."; }
      );
    });
  });

  list.querySelectorAll("[data-resp-apply]").forEach((btn) => {
    btn.addEventListener("click", () =>
      applyResponse(btn.getAttribute("data-resp-apply"))
    );
  });

  renderArchive();
}

function completeStage(track, stage, how, extra) {
  if (stage.kind !== "practice" || stageState(track, stage) !== "open") return;
  state.done[stage.id] = true;
  state.archive.push({
    stageId: stage.id,
    track: track.title,
    title: stage.title,
    how, // "self" practice log or "signed" by an instructor
    note: extra || "",
    when: new Date().toISOString(),
  });
  saveState(state);
  if (window.SanggupAndroid && typeof window.SanggupAndroid.stageDone === "function") window.SanggupAndroid.stageDone();
  renderPath(track);
}

function requestSignOff(track, stage) {
  if (stageState(track, stage) !== "open") return;
  const req = {
    code: makeCode(),
    trackId: track.id,
    trackTitle: track.title,
    stageId: stage.id,
    stageTitle: stage.title,
    task: stage.milestone,
    status: "pending",
    requestedAt: new Date().toISOString(),
  };
  state.requests.push(req);
  saveState(state);
  renderPath(track);
}

function renderArchive() {
  const wrap = $("archive-list");
  wrap.innerHTML = "";
  if (state.archive.length === 0) {
    wrap.innerHTML = `<p class="muted">Nothing finished yet.</p>`;
    return;
  }
  for (const item of [...state.archive].reverse()) {
    const row = document.createElement("div");
    row.className = "archive-row";
    const when = new Date(item.when).toLocaleDateString();
    const badge = item.how === "signed" ? "signed off" : "self-logged";
    row.innerHTML =
      `<span>${item.title}</span><span class="badge">${badge}</span>` +
      `<span class="muted">${when}</span>` +
      (item.note ? `<span class="muted">“${escapeText(item.note)}”</span>` : "");
    wrap.appendChild(row);
  }
}

// ---------- teacher ----------

function renderTeacher() {
  renderRequestDetail(null);
  const pending = state.requests.filter((r) => r.status === "pending");
  const signed = state.requests.filter((r) => r.status !== "pending");

  const pendingWrap = $("pending-list");
  pendingWrap.innerHTML = pending.length
    ? ""
    : `<p class="muted">No pending requests on this device.</p>`;
  for (const req of pending) {
    const btn = document.createElement("button");
    btn.className = "request-row";
    btn.innerHTML = `<span>${req.stageTitle}</span><span class="muted">${req.code}</span>`;
    btn.addEventListener("click", () => renderRequestDetail(req));
    pendingWrap.appendChild(btn);
  }

  const signedWrap = $("signed-list");
  signedWrap.innerHTML = signed.length
    ? ""
    : `<p class="muted">Nothing signed off yet.</p>`;
  for (const req of [...signed].reverse()) {
    const row = document.createElement("div");
    row.className = "archive-row";
    row.innerHTML =
      `<span>${req.stageTitle}</span>` +
      `<span class="badge">${req.status === "signed" ? "signed off" : "more practice"}</span>` +
      (req.instructorNote ? `<span class="muted">“${escapeText(req.instructorNote)}”</span>` : "");
    signedWrap.appendChild(row);
  }
}

function renderRequestDetail(req) {
  const wrap = $("request-detail");
  if (!req) {
    wrap.innerHTML = "";
    return;
  }
  wrap.innerHTML =
    `<article class="stage-card open">` +
    `<h3>${req.stageTitle}</h3>` +
    `<p class="task"><strong>The learner had to:</strong> ${req.task}</p>` +
    `<label for="instructor-note">Note for the learner (optional)</label>` +
    `<input id="instructor-note" maxlength="200" placeholder="e.g. rice was great, stir-fry a bit salty">` +
    `<div class="code-row">` +
    `<button class="primary" id="sign-btn">Sign off</button>` +
    `<button id="practice-btn">Ask for more practice</button>` +
    `</div></article>`;

  $("sign-btn").addEventListener("click", () => decide(req, "signed"));
  $("practice-btn").addEventListener("click", () => decide(req, "practice"));
}

async function applyResponse(code) {
  const req = state.requests.find(
    (r) => r.code === code && r.status === "pending"
  );
  const input = $("resp-" + code);
  const msg = $("resp-msg-" + code);
  if (!req || !input) return;
  const value = input.value.trim().toUpperCase();
  const signedCode = await responseCode(req.code, "signed");
  const practiceCode = await responseCode(req.code, "practice");
  if (value === signedCode) {
    resolveRequest(req, "signed", "");
    if (currentTrack) renderPath(currentTrack); else renderTracks();
  } else if (value === practiceCode) {
    resolveRequest(req, "practice", "");
    if (currentTrack) renderPath(currentTrack); else renderTracks();
  } else if (msg) {
    msg.textContent =
      "That code does not match this request. Check it with your reviewer.";
  }
}

function resolveRequest(req, verdict, note) {
  if (req.status !== "pending") return;
  req.status = verdict;
  req.instructorNote = note || "";
  req.decidedAt = new Date().toISOString();
  if (verdict === "signed") {
    // Paths can be merged between versions, so an older request's trackId may
    // no longer exist; fall back to locating the stage across current tracks.
    let track = window.SANGGUP_TRACKS.find((t) => t.id === req.trackId);
    if (!track) {
      track = window.SANGGUP_TRACKS.find((t) =>
        t.stages.some((s) => s.id === req.stageId)
      );
    }
    const stage = track.stages.find((s) => s.id === req.stageId);
    state.done[stage.id] = true;
    state.archive.push({
      stageId: stage.id,
      track: track.title,
      title: stage.title,
      how: "signed",
      note: req.instructorNote,
      when: req.decidedAt,
    });
  }
  saveState(state);
}

function decide(req, verdict) {
  resolveRequest(req, verdict, $("instructor-note").value.trim());
  renderTeacher();
}

$("code-lookup").addEventListener("click", () => {
  const code = $("code-input").value.trim().toUpperCase();
  const req = state.requests.find((r) => r.code === code && r.status === "pending");
  if (req) {
    renderRequestDetail(req);
  } else {
    $("request-detail").innerHTML =
      `<p class="muted">No pending request with that code on this device.</p>`;
  }
});


// ---------- hash routing: shareable direct links, e.g. #branding ----------

function applyRoute() {
  const raw = location.hash.replace(/^#/, "");
  const slash = raw.indexOf("/");
  const id = slash === -1 ? raw : raw.slice(0, slash);
  const stageId = slash === -1 ? "" : raw.slice(slash + 1);
  if (!id) {
    renderTracks();
    return;
  }
  const alias = { career: "work", clientwork: "work", firstaid: "disaster", languages: "language" };
  const track = (window.SANGGUP_TRACKS || []).find(
    (t) => t.id === (alias[id] || id) && t.status !== "planned"
  );
  if (track && track.children) {
    renderGroup(track);
  } else if (track) {
    renderPath(track);
  } else {
    renderTracks();
  }
  if (track && stageId) {
    const el = document.getElementById("stage-" + stageId);
    if (el) {
      const jump = () => {
        el.classList.add("jump-target");
        el.scrollIntoView({ block: "center" });
      };
      jump();
      // A cold load can scroll back to top after subresources finish;
      // re-assert the target once the page is fully loaded.
      if (document.readyState !== "complete") {
        window.addEventListener("load", jump, { once: true });
      }
    }
  } else if (track) {
    window.scrollTo(0, 0);
  }
}

window.addEventListener("hashchange", applyRoute);

// ---------- boot ----------

setRole("learner");
applyRoute();

