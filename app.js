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

function makeCode() {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no easily-confused chars
  const buf = new Uint8Array(6);
  crypto.getRandomValues(buf);
  return Array.from(buf, (b) => alphabet[b % alphabet.length]).join("");
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
        `<strong>${req.code}</strong><br><span class="muted">In this same-device demo, open ` +
        `the teaching view here. This code does not work on another device.</span></div>`;
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

function decide(req, verdict) {
  if (req.status !== "pending") return;
  req.status = verdict;
  req.instructorNote = $("instructor-note").value.trim();
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
  const id = location.hash.replace(/^#/, "");
  if (!id) {
    renderTracks();
    return;
  }
  const alias = { career: "work", clientwork: "work" };
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
}

window.addEventListener("hashchange", applyRoute);

// ---------- boot ----------

applyRoute();
setRole("learner");

