// Skill content for the sanggup prototype.
// All 20 tracks have starter paths. Each path states its own limits.
window.SANGGUP_TRACKS = [
  {
    id: "cooking", short: "Cooking", icon: '<path d="M4 11h16v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z M2 11h20 M9 7c0-2 2-1 2-3 M14 7c0-2 2-1 2-3"/>',
    title: "Cooking",
    tagline: "From your first dish to a full meal",
    status: "prototype",
    stages: [
      {
        id: "c1",
        kind: "practice",
        title: "Set up before you cook",
        lesson:
          "Mise en place: read the whole recipe first, then put every ingredient and tool on the counter before any heat goes on. For this demo, choose a familiar recipe and get hands-on help if the tools or heat are new to you.",
        practice:
          "Cook one simple dish end to end: a fried egg, tumis kangkung, or aglio e olio. Clean up as you go.",
      },
      {
        id: "c2",
        kind: "practice",
        title: "Knife and heat basics",
        lesson:
          "Ask an experienced cook to demonstrate safe knife handling and stove use in person before trying them. Follow your recipe and equipment instructions; a short lesson is not a substitute for supervision.",
        practice:
          "Cut an onion and two vegetables into even pieces, then cook them and notice the difference even sizing makes.",
      },
      {
        id: "c3",
        kind: "milestone",
        title: "Milestone: rice and a stir-fry",
        lesson:
          "Rice is timing and ratios, not talent. A stir-fry is heat, order, and not crowding the pan. Together they are the smallest real meal.",
        milestone:
          "Cook rice and one stir-fry dish and serve them together, hot, at the same time. An instructor or mentor checks the result and signs off.",
      },
      {
        id: "c4",
        kind: "practice",
        title: "Seasoning and a protein",
        lesson:
          "Try a tofu or tempeh recipe with an experienced cook. Follow its cooking instructions, check ingredient labels and dietary needs, and taste only food that is safe to eat.",
        practice:
          "With help if needed, cook tofu or tempeh using a familiar recipe and seasoning you mixed yourself.",
      },
      {
        id: "c5",
        kind: "milestone",
        title: "Milestone: cook a full meal",
        lesson:
          "A full meal is a timing puzzle: start the rice, prep everything, cook the dish that keeps warm first, finish the one that doesn't last.",
        milestone:
          "Cook a full meal, rice plus a vegetable dish plus a protein, for at least one other person. Instructor or mentor sign-off required.",
      },
    ],
  },
  {
    id: "tidying", short: "Tidying", icon: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
    title: "Cleaning & tidying",
    tagline: "Clean safely, then decide what stays",
    status: "prototype",
    note:
      "Independent practice exercises written for sanggup. This is not an official KonMari course and is not endorsed by Marie Kondo or KonMari Media. Cleaning removes dirt; tidying means deciding what to keep. They are different jobs and this path treats them separately.",
    sources: [
      { label: "CDC: Cleaning and disinfecting", url: "https://www.cdc.gov/hygiene/cleaning-disinfecting/" },
      { label: "CDC: Cleaning and disinfecting with bleach", url: "https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html" },
      { label: "MedlinePlus: Cleaning, disinfecting and sanitizing", url: "https://medlineplus.gov/cleaningdisinfectingandsanitizing.html" },
      { label: "KonMari: Rule 4, tidy by category", url: "https://konmari.com/marie-kondo-rules-of-tidying-category-not-location/" },
      { label: "KonMari: Rule 5, follow the right order", url: "https://konmari.com/marie-kondo-rules-of-tidying-follow-order/" },
      { label: "KonMari: Rule 6, sparks joy", url: "https://konmari.com/marie-kondo-rules-of-tidying-sparks-joy/" },
      { label: "Swedish death cleaning (döstädning), overview", url: "https://en.wikipedia.org/wiki/Swedish_death_cleaning" },
    ],
    stages: [
      {
        id: "t1",
        kind: "practice",
        title: "Three different jobs",
        lesson:
          "Cleaning removes dirt and germs, usually with soap, water and scrubbing. Tidying, or decluttering, is deciding what you keep. Organizing is giving what you kept a home. Mixing the jobs is why a cleaning session turns into an hour of shuffling piles.",
        practice:
          "Pick one small surface, like a desk. Tidy it first (keep or remove each item), then give each kept item a spot, then clean the empty surface. Say out loud which job you are doing at each step.",
      },
      {
        id: "t2",
        kind: "practice",
        title: "Clean safely",
        lesson:
          "The CDC says cleaning with soap and water removes most germs on surfaces in most situations. Disinfecting is mainly needed when someone at home is sick. Never mix bleach or any disinfectant with other cleaners, because the vapors can be dangerous to breathe. Ventilate, follow the product label, and wear gloves or eye protection if the label says so.",
        practice:
          "Read the label of one cleaning product you own and write down its two most important safety instructions. Then clean one surface with plain soap and water.",
      },
      {
        id: "t3",
        kind: "practice",
        title: "Approach: the KonMari method",
        lesson:
          "Marie Kondo's method tidies by category, not by room: gather every item of one kind in one place. Her order is clothes, books, papers, komono (miscellaneous items), then sentimental items, easiest first so your decision skills grow. You pick up each item and ask whether it sparks joy. Joy is personal, so your feelings are the standard.",
        practice:
          "Do clothes only. Gather every piece you own into one pile, pick each one up, and keep what sparks joy. Decide where the rest goes (donate, pass on, recycle) and give the kept clothes a place.",
      },
      {
        id: "t4",
        kind: "practice",
        title: "Approach: Swedish death cleaning",
        lesson:
          "Döstädning was popularised by Margareta Magnusson's 2017 book. The idea is to sort your belongings while you are well, so loved ones are not left with all of it. Some find it practical and others find it morbid. It asks a different question from KonMari: not what delights you, but what someone else would have to deal with.",
        practice:
          "Take one drawer or box. For each item ask whether anyone else would want or need it. Keep what matters, and write a one-line note for any item worth passing on. If the topic feels heavy, skip this step; it is optional.",
      },
      {
        id: "t5",
        kind: "practice",
        title: "Approach: rule-of-thumb methods",
        lesson:
          "KonMari's own site contrasts its method with rule-based advice such as discarding anything unused for two years, or getting rid of something old whenever you buy something new. Rules are quick and need less self-knowledge. Feelings-based methods fit you better but take more attention. Neither is the one right way.",
        practice:
          "Pick one shelf. Apply a rule (nothing used in the last year goes into a donate box), then look at what is left and ask the joy question about the rest. Note which approach felt easier and which felt more like you.",
      },
      {
        id: "t6",
        kind: "milestone",
        title: "Milestone: reset one room",
        lesson:
          "Put the three jobs together: tidy with the approach you liked best, give things homes, then clean surfaces safely.",
        milestone:
          "Tidy, organize and clean one room or one corner using the approach you prefer, following the product labels. Someone you live with or a mentor looks at the result and signs off.",
      },
    ],
  },
  {
    id: "prioritize", short: "Priorities", icon: '<path d="M9 6h11 M9 12h11 M9 18h11 M4 6h.01 M4 12h.01 M4 18h.01"/>',
    title: "Prioritizing",
    tagline: "Decide what comes first and what waits",
    status: "prototype",
    note:
      "General skill practice with your own everyday tasks. It does not rank your tasks for you and is not advice on work, health, money or legal matters.",
    sources: [
      { label: "MindTools: Eisenhower's urgent/important principle", url: "https://www.mindtools.com/al1e0k5/eisenhowers-urgentimportant-principle/" },
      { label: "James Clear: The Eisenhower Box", url: "https://jamesclear.com/eisenhower-box" },
    ],
    stages: [
      {
        id: "p1",
        kind: "practice",
        title: "Empty your head",
        lesson:
          "You cannot rank what you have not listed. A brain dump gets every open task, worry and errand out of your head and onto one list, with no sorting yet.",
        practice:
          "Set a ten-minute timer and write down everything you think you should do. Do not order or judge the list.",
      },
      {
        id: "p2",
        kind: "practice",
        title: "Urgent versus important",
        lesson:
          "In 1954 Dwight Eisenhower said he had two kinds of problems, the urgent and the important. The Eisenhower box sorts tasks into four groups: urgent and important (do now), important but not urgent (schedule), urgent but not important (delegate or shorten), and neither (drop). Urgent things shout; important things are the ones that matter to your goals.",
        practice:
          "Sort your brain dump into the four groups. Notice how many items felt urgent but did not matter much.",
      },
      {
        id: "p3",
        kind: "practice",
        title: "Choose one to three",
        lesson:
          "A priority list with fifteen priorities is just a list. Choose the one to three things that would make today a good day, and say what you are choosing not to do.",
        practice:
          "Pick at most three tasks for tomorrow and write one thing that is explicitly not happening. Do them tomorrow in order.",
      },
      {
        id: "p4",
        kind: "practice",
        title: "Review and adjust",
        lesson:
          "Priorities change as things happen. A short review shows what you finished, what slipped and why, so your next choice is better informed.",
        practice:
          "At the end of tomorrow, write which of your three got done, what got in the way, and what you would change in how you ranked them.",
      },
    ],
  },
  {
    id: "deciding", short: "Deciding", icon: '<path d="M12 21v-8 M12 13L6 6 M12 13l6-7 M6 6v4 M6 6h4 M18 6v4 M18 6h-4"/>',
    title: "Deciding",
    tagline: "Make everyday choices on purpose",
    status: "prototype",
    note:
      "General skill practice using low-stakes everyday choices. sanggup does not make decisions for you and does not give personal advice. For health, money, legal or safety decisions, talk to a qualified person.",
    sources: [
      { label: "Amazon 2015 shareholder letter (one-way and two-way doors)", url: "https://s2.q4cdn.com/299287126/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF" },
      { label: "Farnam Street: Reversible and irreversible decisions", url: "https://fs.blog/reversible-irreversible-decisions/" },
    ],
    stages: [
      {
        id: "d1",
        kind: "practice",
        title: "One-way or two-way door?",
        lesson:
          "Jeff Bezos wrote in a 2015 letter that some decisions are close to irreversible, like a one-way door, and deserve slow, careful thought. Most decisions can be changed, like a two-way door, and can be made quickly. Treating every choice as a one-way door makes you slow and stops you from trying things.",
        practice:
          "List three choices you are putting off. Label each one-way or two-way. Make the easiest two-way one today.",
      },
      {
        id: "d2",
        kind: "practice",
        title: "State the decision",
        lesson:
          "Many stuck decisions are unclear questions. Write the decision as a question, set a deadline, and list at least three options, including doing nothing and a middle option. Add what information would change your mind.",
        practice:
          "Pick one real, low-stakes choice, such as where to eat on the weekend or which book to read next. Write the question, deadline and three options.",
      },
      {
        id: "d3",
        kind: "practice",
        title: "Compare on what matters",
        lesson:
          "Choose two or three criteria that matter to you, such as cost, effort or enjoyment, and score each option. The numbers help you think, but they do not decide for you. If the result surprises you, that tells you something about what you actually want.",
        practice:
          "Score your options against your criteria. Then check your gut: does the top score feel right? If not, write down why.",
      },
      {
        id: "d4",
        kind: "practice",
        title: "Decide, then look back",
        lesson:
          "A good decision is not the same as a good outcome, because luck is involved. Writing down what you expected lets you learn from the result later without rewriting your memory.",
        practice:
          "Make your choice. Write what you expect to happen and why. Set a reminder to compare with what really happened.",
      },
    ],
  },
  {
    id: "habits", short: "Habits", icon: '<path d="M4 12a8 8 0 0 1 14-5 M18 3v4h-4 M20 12a8 8 0 0 1-14 5 M6 21v-4h4"/>',
    title: "Habits",
    tagline: "Build small habits that last",
    status: "prototype",
    note:
      "Independent exercises inspired by ideas in James Clear's book Atomic Habits. This is not an official course and is not endorsed by the author or publisher. Summaries are written in our own words from his public summary page.",
    sources: [
      { label: "James Clear: Atomic Habits summary", url: "https://jamesclear.com/atomic-habits-summary" },
      { label: "James Clear: How to start new habits that stick", url: "https://jamesclear.com/three-steps-habit-change" },
    ],
    stages: [
      {
        id: "h1",
        kind: "practice",
        title: "The habit loop",
        lesson:
          "Clear splits a habit into four parts: a cue that predicts a reward, a craving that motivates you, the response you actually do, and the reward at the end. If you can name those four parts, you can change one of them.",
        practice:
          "Pick one habit you already have, good or bad, and write its cue, craving, response and reward.",
      },
      {
        id: "h2",
        kind: "practice",
        title: "Make it obvious and easy",
        lesson:
          "The book turns the loop into four laws: make the cue obvious, make the habit attractive, make the response easy, make the reward satisfying. Start with the easy law: shrink the habit until it takes about two minutes, and attach it to something you already do.",
        practice:
          "Choose one new habit and shrink it to a two-minute version. Write it as: after I do X, I will do Y.",
      },
      {
        id: "h3",
        kind: "practice",
        title: "Make it satisfying",
        lesson:
          "A habit survives when finishing it feels good. Immediate rewards and a visible record, like a tick on a calendar, help. A missed day is not failure; the useful rule is to get back on track the next day.",
        practice:
          "Do your two-minute habit for the next three days and mark each day. If you miss one, just do it the next day and note why you missed.",
      },
      {
        id: "h4",
        kind: "practice",
        title: "Adjust the system",
        lesson:
          "If the habit is not sticking, change the cue, the size or the place before blaming yourself. Clear's point is that the system matters more than a one-time goal.",
        practice:
          "Look at your three days. Change one thing about the cue, the size or the reward, and keep going for another three days.",
      },
    ],
  },
  {
    id: "focus", short: "Focus", icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12h.01"/>',
    title: "Focus",
    tagline: "Work in short, protected blocks",
    status: "prototype",
    note:
      "Independent practice based on the publicly described Pomodoro Technique by Francesco Cirillo. Not an official course; Pomodoro is a registered mark of its owner. General time-management practice, not advice for attention or health conditions.",
    sources: [
      { label: "Pomodoro Technique: what it is", url: "https://www.pomodorotechnique.com/what-is-the-pomodoro-technique/" },
      { label: "NIH NICHD: The Pomodoro Technique", url: "https://science.nichd.nih.gov/confluence/display/newsletter/2020/05/07/The+Pomodoro+Technique:+An+Effective+Time+Management+Tool" },
    ],
    stages: [
      {
        id: "f1",
        kind: "practice",
        title: "One task, one block",
        lesson:
          "The Pomodoro Technique, developed by Francesco Cirillo in the late 1980s, uses a kitchen timer to split work into intervals, typically 25 minutes, with short breaks. Pick one task, set the timer, and work only on that task until it rings.",
        practice:
          "Choose one task. Set a timer for 25 minutes, work only on it, then take a short break away from your screen.",
      },
      {
        id: "f2",
        kind: "practice",
        title: "Handle interruptions",
        lesson:
          "Distractions will come, from your phone and from your own mind. Write the interruption down on a scrap of paper and go back to the task, then deal with it during a break.",
        practice:
          "Do another block with your phone out of reach. Keep a paper list of every urge to switch and what it was about.",
      },
      {
        id: "f3",
        kind: "practice",
        title: "Fit the block to you",
        lesson:
          "25 minutes is a starting point, not a law. Longer or shorter blocks may suit your task or energy. Track how many blocks a task actually takes so your plans get more realistic.",
        practice:
          "Try one block with a different length. Write which length felt right and how many blocks your task took.",
      },
    ],
  },
  {
    id: "projects", short: "Projects", icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16 M15 4v16"/>',
    title: "Projects",
    tagline: "Kanban boards and sprints",
    status: "prototype",
    note:
      "Independent introduction to Kanban and Scrum sprints based on the public Kanban Guide and Scrum Guide. Not an official course and not a certification path. For team work, adapt to how your team agrees to work.",
    sources: [
      { label: "Kanban University: The Official Guide to the Kanban Method", url: "https://kanban.university/kanban-guide/" },
      { label: "Atlassian: What is Kanban", url: "https://www.atlassian.com/agile/kanban" },
      { label: "The Scrum Guide", url: "https://scrumguides.org/scrum-guide.html" },
      { label: "Scrum.org: The Scrum events", url: "https://www.scrum.org/learning-series/scrum-events/" },
    ],
    stages: [
      {
        id: "j1",
        kind: "practice",
        title: "Make work visible",
        lesson:
          "Kanban starts by showing your work on a board. Draw columns for the stages work moves through, such as To do, In progress and Done, and put each task on a card. The board should match how you really work.",
        practice:
          "Draw a three-column board on paper or in a notes app and put every task of one small project on it.",
      },
      {
        id: "j2",
        kind: "practice",
        title: "Limit work in progress",
        lesson:
          "The second idea in Kanban is limiting how much is in progress at once. Too many open tasks means nothing finishes. Pull a new card only when there is room.",
        practice:
          "Set a limit of two cards in In progress. Work for a few days and notice what you finish first.",
      },
      {
        id: "j3",
        kind: "practice",
        title: "Work in sprints",
        lesson:
          "In Scrum, a Sprint is a fixed-length period of one month or less. You plan a goal, work on it, hold a short daily check-in to adjust, then review the result and look back at how you worked. A new sprint starts right after the last one.",
        practice:
          "Plan a one-week sprint for your project: write one sprint goal and pick the cards that serve it.",
      },
      {
        id: "j4",
        kind: "practice",
        title: "Review and retrospect",
        lesson:
          "At the end of a sprint, review what you finished, then ask what to change about how you worked. The retrospective exists to improve quality and effectiveness.",
        practice:
          "At the end of the week write what got done, what blocked you, and one change for the next sprint.",
      },
    ],
  },
  {
    id: "calm", short: "Calm", icon: '<path d="M3 14c3-4 6-4 9 0s6 4 9 0 M3 9c3-4 6-4 9 0s6 4 9 0"/>',
    title: "Calm & meditation",
    tagline: "Practice staying steady under stress",
    status: "prototype",
    note:
      "General wellbeing practice, not medical or mental health treatment. If you feel unsafe, hopeless or overwhelmed, contact a doctor, a mental health professional or the emergency number (112 or 119 in Indonesia).",
    sources: [
      { label: "NCCIH: Meditation and mindfulness, effectiveness and safety", url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety" },
      { label: "NCCIH: 8 things to know about meditation and mindfulness", url: "https://www.nccih.nih.gov/health/tips/8-things-to-know-about-meditation-and-mindfulness" },
      { label: "Layanan 112, Indonesia emergency call", url: "https://layanan112.komdigi.go.id/tentang" },
    ],
    stages: [
      {
        id: "m1",
        kind: "practice",
        title: "Sit and notice",
        lesson:
          "Mindfulness means keeping your attention on the present moment without judging it. A simple form is to focus on your breathing. NCCIH says meditation is usually considered low risk, though about 8 percent of participants in one review reported a negative effect, most often anxiety or depression, so stop if it makes you feel worse.",
        practice:
          "Sit comfortably for three minutes and follow your breath. When your mind wanders, notice it and return. Stop if it feels bad.",
      },
      {
        id: "m2",
        kind: "practice",
        title: "A small reset for stress",
        lesson:
          "Calm is easier to practice before a crisis than during one. Choose one short reset you can do anywhere, like slowing your breathing for a minute or naming five things you can see, and rehearse it when you are only mildly stressed.",
        practice:
          "Use your chosen reset three times this week at small stress moments, like a long queue. Note whether it helped.",
      },
      {
        id: "m3",
        kind: "practice",
        title: "Calm when it matters",
        lesson:
          "In a real emergency, the first job is safety and calling for help, not meditating. A rehearsed reset can help you think. If the emergency is medical or dangerous, call emergency services. In Indonesia 112 is the national emergency number and 119 is for medical emergencies.",
        practice:
          "Write a three-line personal crisis card: your reset, the numbers you would call, and one person you would contact.",
      },
    ],
  },
  {
    id: "disaster", short: "Disasters", icon: '<path d="M12 3l10 18H2z M12 10v5 M12 18h.01"/>',
    title: "Disaster preparedness",
    tagline: "Get ready before an emergency, Indonesia focus",
    status: "prototype",
    note:
      "Preparedness basics from Indonesian authorities and Ready.gov. Local hazards and official instructions differ by area and event, so follow your local disaster agency (BPBD), BMKG and BNPB first. This path teaches preparedness basics and the safe-rescue principle only; it does not make you a trained rescuer or survival expert.",
    sources: [
      { label: "Kemenkes Pusat Krisis: Tas Siaga Bencana (cites BNPB)", url: "https://pusatkrisis.kemkes.go.id/mari-siapkan-tas-siaga-bencana" },
      { label: "BMKG: Petunjuk keselamatan gempabumi dan tsunami", url: "https://content.bmkg.go.id/wp-content/uploads/Large-Prints-Petunjuk-keselamatan-Gempabumi-Tsunami.pdf" },
      { label: "Ready.gov: Build a kit", url: "https://www.ready.gov/kit" },
      { label: "Ready.gov: Practice your home fire escape plan", url: "https://www.ready.gov/home-fire-escape-plan" },
      { label: "Red Cross: 7 ways to prepare for a home fire", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-preparedness.html" },
      { label: "US Forest Service: If you get lost", url: "https://www.fs.usda.gov/visit/know-before-you-go/if-you-get-lost" },
      { label: "Antara: Tersesat di gunung? Ini yang perlu Anda lakukan", url: "https://www.antaranews.com/berita/5846199/tersesat-di-gunung-ini-yang-perlu-anda-lakukan" },
      { label: "Basarnas: Darurat SAR, hubungi 115 (2022)", url: "https://basarnas.go.id/berita/kabasarnas-darurat-sar-hubungi-115" },
      { label: "Ready.gov: Floods", url: "https://www.ready.gov/floods" },
      { label: "US National Weather Service: Turn Around Don't Drown", url: "https://www.weather.gov/safety/flood-turn-around-dont-drown" },
      { label: "CDC: How to create and store an emergency water supply", url: "https://cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html" },
      { label: "Red Cross: Summer safety, drowning and reach or throw", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/summer-safety.html" },
      { label: "BNPB: Buku saku bencana", url: "https://www.bnpb.go.id/storage/app/media/uploads/24/buku-data-bencana/6-buku-saku-cetakan-4-2019.pdf" },
      { label: "PMI: Pelatihan relawan", url: "https://pmipusat.org/pelatihan-relawan/" },
      { label: "PSC 119 Kemenkes", url: "https://psc.kemkes.go.id/web/tentang-psc-119" },
    ],
    stages: [
      {
        id: "s1",
        kind: "practice",
        title: "Know your local risks",
        lesson:
          "Indonesian regional disaster agencies note that people live in disaster-prone areas, so start by learning which hazards affect your own area, such as earthquakes, floods or tsunami, and where official warnings come from: BMKG, BNPB and your local BPBD.",
        practice:
          "Find out which hazards your neighborhood faces. Save your local BPBD contact and the numbers 112 and 119 in your phone.",
      },
      {
        id: "s2",
        kind: "practice",
        title: "Pack a go-bag",
        lesson:
          "BNPB describes a Tas Siaga Bencana as a bag with basic needs for the first 3x24 hours when help may not have arrived. Contents listed by Kemenkes include copies of important documents in waterproof cover, first-aid supplies and personal medicines, a whistle, flashlight and batteries, some cash, phone charger, power bank and radio, spare clothes, long-life food and drinking water. Keep it to what you need; don't overload it. Ready.gov likewise says to prepare for several days on your own.",
        practice:
          "Assemble a go-bag with what you can. Put in your personal medicines, check expiry dates, and store it where you can grab it quickly.",
      },
      {
        id: "s3",
        kind: "practice",
        title: "Make a household plan",
        lesson:
          "BMKG's guidance includes agreeing on a temporary evacuation place and a safe route, memorizing the meeting point, deciding who will help family members who need assistance, and practicing evacuation regularly.",
        practice:
          "Agree with the people you live with on a meeting point and route. Walk the route once.",
      },
      {
        id: "s4",
        kind: "practice",
        title: "During an earthquake",
        lesson:
          "BMKG's instruction for during an earthquake is: stay calm, Drop, Cover under something sturdy such as a table, and Hold On until shaking stops. Stay away from glass and things that can fall. After the shaking stops, evacuate calmly and follow official information. If a tsunami is possible, go to the nearest evacuation place. Other disasters have different instructions, so learn those from BPBD.",
        practice:
          "Rehearse Drop, Cover, Hold On in your home. Look for what could fall near you and fix or move it.",
      },
      {
        id: "s6",
        kind: "practice",
        title: "Floods",
        lesson:
          "US weather and emergency agencies report that over half of flood-related drownings happen when a vehicle is driven into floodwater, so the rule is Turn Around, Don't Drown. Ready.gov advises following local officials' instructions, being ready both to evacuate and to shelter in place, and staying off bridges over fast-moving water. Indonesian flood guidance comes from your BPBD; learn your local evacuation routes and warning signals.",
        practice:
          "Find out whether your home or route to work floods. Write your evacuation route and a second route, and where you would move valuables and documents.",
      },
      {
        id: "s7",
        kind: "practice",
        title: "Water and staying fed",
        lesson:
          "After a disaster clean drinking water may not be available. The CDC advises preparing a 3-day supply, at least 1 gallon (about 3.8 litres) per person per day, including for sanitation and for pets or people with special needs. Store it in clean, sealed containers away from heat, and replace it on a schedule. This matches BNPB's 3x24 hour planning window.",
        practice:
          "Calculate how much water your household needs for three days. Store at least part of it now and write the date to check it.",
      },
      {
        id: "s8",
        kind: "practice",
        title: "Rescue: reach or throw, don't go",
        lesson:
          "The first rule of rescue is to avoid becoming a second victim. The Red Cross says drowning is fast and often silent, and a person may last only 20 to 60 seconds before going under. Its advice for bystanders is: call for help, then reach with something or throw something that floats, and do not go into the water yourself. The same thinking applies to collapsed buildings, fire and floods: call 112 or 119 and the authorities, and help from a safe position. Actual rescue techniques need training.",
        practice:
          "Look around your home or a nearby pool, river or beach. Note where you could reach or throw something that floats from dry ground, and where to call for help from.",
      },
      {
        id: "s9",
        kind: "practice",
        title: "Tsunami",
        lesson:
          "BNPB's pocket guide says nobody can predict exactly when a tsunami will come, and BMKG is the authority that issues warnings. Warning signs after an earthquake include strong or long shaking, the sea suddenly receding, a roar from the sea and fish stranded on the exposed seabed. Go quickly to high ground and stay away from the beach; do not stay to watch or collect fish. Not every earthquake causes a tsunami, so follow sirens and official instructions. Stay at the high place: tsunami come as several waves, later ones often larger, until authorities say it is safe.",
        practice:
          "If you live or work near the coast, find the nearest evacuation signs and high ground and write the route and walking time. If you are not near the coast, note which places you visit that are.",
      },
      {
        id: "s10",
        kind: "practice",
        title: "Volcanic eruption",
        lesson:
          "BNPB advises following PVMBG instructions, knowing the volcano's alert level and hazard zone, and the evacuation routes and shelters set by authorities. Prepare masks, protective glasses, closed clothing, a flashlight, cash and medicines. During volcanic ash: cover your nose and mouth with a mask or wet cloth, wear protective glasses and avoid contact lenses, stay out of open areas, valleys and river channels, and leave areas authorities ask to be evacuated.",
        practice:
          "Check whether you live or travel near an active volcano. If so, find its current level on PVMBG's MAGMA Indonesia and note the nearest shelter. Add a mask and glasses to your go-bag.",
      },
      {
        id: "s11",
        kind: "practice",
        title: "Landslides",
        lesson:
          "BNPB says landslides come from a mix of heavy rain, steep slopes, loose soil, erosion and lost vegetation, and happen so quickly that time to self-evacuate is short. Be extra alert in heavy rain. If you hear a rumbling or a landslide siren, move away from the sound and the direction the slide is coming from, toward the designated evacuation zone. Stay away from the slide area afterwards, because the ground is unstable and more slides can follow if rain continues.",
        practice:
          "Check whether your home is on or below a steep slope. If it is, learn your local warning arrangement from BPBD and write where you would move to in heavy rain.",
      },
      {
        id: "s12",
        kind: "practice",
        title: "Fire at home: prevent and get out",
        lesson:
          "Ready.gov and the Red Cross advise a written home fire escape plan: know two ways out of every room, choose a meeting place outside a safe distance from the home, and practice getting out in under 2 minutes at least twice a year. Install smoke alarms (Ready.gov: on every level and in each bedroom) and test them. In smoke, get low and move to the exit. Keep anything that can burn at least three feet (about one metre) from heaters. Once out, stay out and never go back in; call the emergency number from outside. Fighting fires and rescuing people from them is for trained firefighters.",
        practice:
          "Draw your home and mark two ways out of each room and a meeting place outside. Check that your smoke alarm works. Walk the plan once with everyone in the home.",
      },
      {
        id: "s13",
        kind: "practice",
        title: "Outdoors: plan ahead, and what to do if lost",
        lesson:
          "The US Forest Service says the best survival tool is advance planning: carry enough food, water, layers, a light, a map and compass you know how to use, check for local warnings, and tell someone exactly where you are going, your route and when you will return. Do not rely on a phone signal. If you become lost, use STOP (Stop, Think, Observe, Plan): stop, stay calm and, if it is safe, stay put, because walking farther makes you harder to find. Antara's mountain guidance gives the same advice. Basarnas, Indonesia's search and rescue agency, has said search and rescue emergencies can be reported to 115 (a 2022 statement, so check the current number before relying on it).",
        practice:
          "Before your next outing, write a plan for a trusted person: where, route, return time and who is going. Pack a small kit of water, light and layers. Save 112 and Basarnas contact in your phone.",
      },
      {
        id: "s5",
        kind: "practice",
        title: "Rescue and survival: get trained",
        lesson:
          "Rescue is risky and depends on training. In an emergency call for help first and do not put yourself in danger. PMI (Palang Merah Indonesia) runs first aid and disaster management volunteer courses with hands-on content. This app cannot teach you to rescue people or survive in the wild.",
        practice:
          "Look up your nearest PMI branch or BPBD and ask how to join a first aid or disaster preparedness training.",
      },
    ],
  },
  {
    id: "firstaid", short: "First aid", icon: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    title: "First aid awareness",
    tagline: "Theory, plus how to get real training",
    status: "prototype",
    note:
      "Awareness only. Reading this does not train or qualify you, and finishing a stage here is not a certificate. CPR and choking response must be learned hands-on from a qualified instructor. In a real emergency call 119 (medical) or 112 in Indonesia, or your local number elsewhere.",
    sources: [
      { label: "Red Cross: Adult and child choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking" },
      { label: "Red Cross: Management of foreign body airway obstruction (guidelines)", url: "https://guidelines.redcross.org/guidelines-database/foreign-body-airway-obstruction/" },
      { label: "Red Cross: CPR training formats", url: "https://www.redcross.org/take-a-class/cpr" },
      { label: "MedlinePlus: Abdominal thrusts", url: "https://medlineplus.gov/ency/article/000047.htm" },
      { label: "PMI: Pelatihan relawan (first aid, CPR and AED)", url: "https://pmipusat.org/pelatihan-relawan/" },
      { label: "Kemenkes PSC 119: how to make an emergency call", url: "https://psc.kemkes.go.id/web/cara-melakukan-panggilan-emergency-call-119" },
    ],
    stages: [
      {
        id: "a1",
        kind: "practice",
        title: "Why training matters",
        lesson:
          "The Red Cross says online-only CPR courses do not demonstrate skill proficiency, while blended and in-person courses include practice with an instructor. Reading about CPR or choking helps you understand it, but your hands need to practice on a manikin with someone checking you.",
        practice:
          "Write down in your own words why reading is not enough and what you would do first in an emergency: make sure the scene is safe and call for help.",
      },
      {
        id: "a2",
        kind: "practice",
        title: "Choking: the theory",
        lesson:
          "Choking happens when the airway is blocked by food, an object, swelling or fluid. The Red Cross lists signs such as a panicked look, hands at the throat, weak or no cough, high-pitched noises or silence, and skin turning pale or bluish. Inability to cough, speak or cry needs immediate emergency help. Its adult and child guidance combines back blows and abdominal thrusts (the maneuver often called the Heimlich maneuver) after calling for help. Babies, pregnant people and people who become unresponsive need different techniques. Learn them in a class; do not rely on this summary.",
        practice:
          "Read the Red Cross choking page and write down three signs of choking and the one thing you must do before giving care.",
      },
      {
        id: "a3",
        kind: "practice",
        title: "CPR and rescue breathing: the theory",
        lesson:
          "CPR, called RJP in Indonesia, is emergency care for a person who is unresponsive and not breathing normally. It combines chest compressions and, for trained people, rescue breaths, and is used together with an AED when available. Technique and guidelines differ for adults, children and babies and are updated over time, so only a current course and instructor can teach it properly. PMI's first aid course covers RJP and AED.",
        practice:
          "Find where an AED is in a building you often visit, and write down the emergency numbers: 112 and 119 in Indonesia.",
      },
      {
        id: "a4",
        kind: "practice",
        title: "How to ask for proper training",
        lesson:
          "Contact PMI or another recognized provider and ask: Does the course include hands-on practice on manikins? Does it cover adults, children and babies, choking and AED use? Who is the instructor and what do they hold? Is a certificate issued and how long is it valid? Is the course taught to current guidelines? Is there a refresher? Ask for a schedule and price.",
        practice:
          "Send one message or make one call to a provider with those questions, and put the course date in your calendar.",
      },
    ],
  },
  {
    id: "network", short: "Network", icon: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19a6 6 0 0 1 12 0 M15 15a5 5 0 0 1 6 4"/>',
    title: "Networking",
    tagline: "Build and keep personal and professional relationships",
    status: "prototype",
    note:
      "Relationship skills you practice yourself, with real people, at your own pace. sanggup does not contact anyone for you, does not automate outreach and does not store your contacts. Be honest about who you are and what you want.",
    sources: [
      { label: "Stanford GSB: Eight tips for building, maintaining and leveraging professional relationships", url: "https://www.gsb.stanford.edu/insights/eight-tips-building-maintaining-leveraging-your-professional-relationships" },
      { label: "80,000 Hours: How to network, weak ties and a giving mindset", url: "https://80000hours.org/2015/03/how-to-network/" },
      { label: "Kellogg Insight: How to keep your network warm", url: "https://insight.kellogg.northwestern.edu/article/how-to-keep-your-network-warm" },
      { label: "ASU Thunderbird: Networking 101", url: "https://thunderbird.asu.edu/thought-leadership/insights/networking-101" },
    ],
    stages: [
      {
        id: "n1",
        kind: "practice",
        title: "Map who you already know",
        lesson:
          "Networks are not only close friends. Stanford GSB advice is to take a broad approach and not assume who will or will not turn out to be helpful. People you know a little, called weak ties, often connect you to new worlds.",
        practice:
          "On paper, list 20 people across family, friends, school, work, neighbors and communities. Mark whom you have not spoken to in a year.",
      },
      {
        id: "n2",
        kind: "practice",
        title: "Start by giving",
        lesson:
          "80,000 Hours recommends a giving mindset: make your first instinct to help, without calculating what you get back. Small help counts: sharing an article, a recommendation, a thank-you, or an introduction you have the other person's permission to make.",
        practice:
          "Do one useful thing this week for someone on your list, with nothing asked in return.",
      },
      {
        id: "n3",
        kind: "practice",
        title: "Start a conversation",
        lesson:
          "Put yourself in different settings: events, communities, online groups. Ask questions about the other person, listen, and follow up afterwards. Quality of conversations matters more than the number of people you meet.",
        practice:
          "Have one real conversation with someone new or someone you barely know. Afterward write one thing you learned about them and one follow-up you can offer.",
      },
      {
        id: "n4",
        kind: "practice",
        title: "Keep it warm",
        lesson:
          "Relationships fade without contact. Kellogg's advice is to keep a network warm with simple, regular contact: calls, notes, and updates to your wider circle. Short and sincere beats long and rare.",
        practice:
          "Pick three people from your list and send each a short personal message or call them this week.",
      },
      {
        id: "n5",
        kind: "practice",
        title: "Ask well",
        lesson:
          "Match your ask to the relationship. A stranger should not be asked for a big favor. Make requests specific, easy to say no to, and give thanks and an update afterwards.",
        practice:
          "Write a specific, polite ask you might make of someone you know well enough. Include an easy way for them to decline.",
      },
    ],
  },
  {
    id: "money", short: "Money", icon: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18 M16 14h2"/>',
    title: "Budgeting & personal finance",
    tagline: "Budgeting, basic accounting and money habits, Indonesia focus",
    status: "prototype",
    note:
      "General education using made-up example numbers in rupiah. It is not personal financial, tax or investment advice, does not connect to any of your accounts and does not recommend products or providers. Rules and deadlines change; check the official source and a qualified adviser for your situation.",
    sources: [
      { label: "OJK Sikapi Uangmu: financial literacy for the public (Indonesia)", url: "https://sikapiuangmu.ojk.go.id/FrontEnd/CMS/Article/40786" },
      { label: "LPS FAQ: deposit guarantee (Indonesia)", url: "https://lps.go.id/faq/" },
      { label: "DJP: Panduan SPT Tahunan orang pribadi karyawan (Indonesia tax)", url: "https://pajak.go.id/sites/default/files/2026-09/Panduan%20Lengkap%20-%20SPT%20Tahunan%20Orang%20Pribadi%20Karyawan%20v24082026.pdf" },
      { label: "OpenStax: Basic accounting procedures", url: "https://openstax.org/books/introduction-business/pages/14-3-basic-accounting-procedures" },
    ],
    stages: [
      {
        id: "b1",
        kind: "practice",
        title: "See where money goes",
        lesson:
          "A budget starts with facts. Example: someone earns Rp 8,000,000 a month and spends Rp 7,200,000, but could only name Rp 5,000,000 of it. The missing Rp 2,200,000 is where the budget starts. Tracking is not judging; it is collecting data.",
        practice:
          "For one month write down every spend by category on paper or a notes app on your own device. sanggup will not ask for amounts or connect to accounts.",
      },
      {
        id: "b2",
        kind: "practice",
        title: "Make a simple budget",
        lesson:
          "A budget is a plan for next month's money, written before you spend it. Split your income between needs, wants and saving, then give saving first priority. Common rules of thumb give percentage splits, but they come from other countries and incomes; adjust to your real costs.",
        practice:
          "Using last month's tracking, write a budget for next month with three buckets: needs, wants and saving. Check it at mid-month.",
      },
      {
        id: "b3",
        kind: "practice",
        title: "Emergency fund and safe places",
        lesson:
          "An emergency fund covers surprises like a job gap or medical cost without borrowing. It is commonly described in months of essential expenses. OJK publishes guidance on keeping it in suitable instruments. For bank deposits in Indonesia, LPS says it guarantees deposits up to Rp 2 billion per customer per bank, if its conditions are met, so check lps.go.id for the current rules.",
        practice:
          "Add up one month of essential expenses (rent, food, transport, bills). Write how many months of that you have set aside and a target for the next step.",
      },
      {
        id: "b4",
        kind: "practice",
        title: "Accounting basics: your balance sheet",
        lesson:
          "Accounting rests on three elements: assets (what you own), liabilities (what you owe) and equity (what is left, your net worth). Assets equal liabilities plus equity. Double-entry bookkeeping records every transaction in two accounts, so the sides always balance. An income statement shows money in and out over a period; a balance sheet shows what you own and owe at one moment.",
        practice:
          "Write a personal balance sheet with example round numbers: list assets, list debts, subtract. Then write a one-month income statement: income minus spending.",
      },
      {
        id: "b7",
        kind: "practice",
        title: "Bookkeeping practice: record transactions",
        lesson:
          "Bookkeeping is the routine recording of transactions; accounting classifies, summarizes and analyzes them into statements: the balance sheet, income statement and statement of cash flows. To keep the equation balanced every transaction is recorded in two accounts. Example from OpenStax with made-up rupiah: you start a small business with Rp 10,000,000 cash, so assets are 10,000,000 = liabilities 0 + owner's equity 10,000,000. You then borrow Rp 10,000,000 from a bank: assets become 20,000,000 = liabilities 10,000,000 + equity 10,000,000. Both sides rose, so it still balances.",
        practice:
          "Make a simple ledger with columns date, what happened, account 1, account 2, amount. Record five made-up transactions, such as a sale, buying supplies and a loan payment, and check after each that assets equal liabilities plus equity.",
      },
      {
        id: "b5",
        kind: "practice",
        title: "Debt basics",
        lesson:
          "List every debt with its balance, interest rate and minimum payment. Two common approaches to paying down several debts: pay extra on the highest interest rate first (avalanche), or the smallest balance first (snowball). The first saves more interest; the second can feel motivating. Never skip minimum payments. Be wary of lenders who are not licensed; check OJK.",
        practice:
          "Make a list of any debts and compare avalanche with snowball on paper using made-up numbers first.",
      },
      {
        id: "b6",
        kind: "practice",
        title: "Tax paperwork basics (Indonesia)",
        lesson:
          "In Indonesia, individual taxpayers file an annual tax return, the SPT Tahunan, with the tax office (DJP). The DJP employee guide gives 31 March as the filing and payment deadline, with an option to extend by up to two months if conditions are met. Deadlines and rules can be adjusted by government, so check pajak.go.id each year. For your case, ask DJP or a qualified tax consultant.",
        practice:
          "Open the DJP guide for your income type and list the documents you would need, such as your employer's withholding slip.",
      },
    ],
  },
  {
    id: "fire", short: "FIRE", icon: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
    title: "FIRE",
    tagline: "Financial independence, retire early: ideas and risks",
    status: "prototype",
    note:
      "Education about an idea, not a plan for you. Outcomes are uncertain, past returns do not guarantee future ones, and no withdrawal rate is safe for everyone. It does not recommend investments or providers. For real decisions, talk to a licensed financial planner; check any adviser is licensed with OJK.",
    sources: [
      { label: "Financial Planning Association: Updating the Trinity study", url: "https://www.financialplanningassociation.org/article/journal/AUG15-sustainable-retirement-spending-low-interest-rates-updating-trinity-study" },
      { label: "Vanguard: FIRE investing and the 4% rule", url: "https://investor.vanguard.com/investor-resources-education/retirement/early-retirement" },
      { label: "Saxo: FIRE, key considerations and risks", url: "https://www.home.saxo/learn/guides/trading-strategies/financial-independence-retire-early-fire-a-guide" },
      { label: "Investor.gov: Early retirement seminars and scams", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/early" },
    ],
    stages: [
      {
        id: "r1",
        kind: "practice",
        title: "What FIRE means",
        lesson:
          "FIRE stands for Financial Independence, Retire Early. It combines a high savings rate, controlled spending and long-term investing, aiming to leave full-time work earlier than usual. How it turns out depends on income, markets and personal circumstances. Financial independence can also simply mean having choices.",
        practice:
          "Using example numbers, calculate a savings rate: money saved divided by income. Write what 'financial independence' would mean in your own words.",
      },
      {
        id: "r2",
        kind: "practice",
        title: "The 4% rule and its limits",
        lesson:
          "A popular rule of thumb says you need about 25 times your yearly spending. It comes from US studies of historical returns. The Trinity study found that a 4% first-year withdrawal, adjusted for inflation, survived 95% of the historical 30-year periods tested for a stock and bond mix. That is not a promise. It used US data, a 30-year horizon and past returns. Early retirees need longer horizons, bad early years can hurt most (sequence risk), and Indonesia's inflation, markets, taxes and health costs differ from the US.",
        practice:
          "With example numbers, multiply a yearly spending by 25. Then redo it assuming higher spending and lower returns and see how far the target moves.",
      },
      {
        id: "r3",
        kind: "practice",
        title: "Trade-offs and warning signs",
        lesson:
          "Vanguard notes FIRE takes discipline and sacrifice during working years, and early retirees face a long period with healthcare, inflation and market risk. Plans need flexibility, such as part-time income or cutting spending in bad years. Investor.gov warns about early-retirement seminars used to sell products or scams. Be skeptical of promised returns or pressure to act.",
        practice:
          "Write three risks to an early-retirement plan and one way you could adapt to each. Add one rule for yourself, like never sending money to anyone who guarantees returns.",
      },
    ],
  },
  {
    id: "write", short: "Writing", icon: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 21V5 M8 7h7"/>',
    title: "Writing a book",
    tagline: "From idea to finished first draft",
    status: "prototype",
    note:
      "Original exercises for your own writing. sanggup does not write your book for you. Word counts below are examples, not rules; choose a pace you can keep.",
    sources: [
      { label: "Author Revolution: How to write a first draft in six weeks", url: "https://www.authorrevolution.org/blog/how-to-write-a-first-draft-in-six-weeks" },
      { label: "Writer by Nature: How to write a book, steps and outline", url: "https://writerbynature.com/how-to-write-a-book/" },
      { label: "Literary Hub: David Yoon on creative endurance", url: "https://lithub.com/david-yoon-on-how-to-cultivate-creative-endurance/" },
      { label: "Writers Club of America: Steps for drafting your first version", url: "https://writersclubofamerica.com/2025/08/11/steps-for-drafting-your-first-version/" },
    ],
    stages: [
      {
        id: "w1",
        kind: "practice",
        title: "Define your book",
        lesson:
          "Before writing, decide who the book is for and what it promises them. For nonfiction that is the problem it solves; for fiction, the story question. Write it in one sentence.",
        practice:
          "Write your reader, and a one-sentence description of the book. Say it aloud to someone.",
      },
      {
        id: "w2",
        kind: "practice",
        title: "Outline loosely",
        lesson:
          "An outline is a roadmap, not a cage. Writers advise outlining chapters or main events, but keeping it loose so new ideas fit. David Yoon wrote a very detailed beat sheet and found he still had to adapt while drafting.",
        practice:
          "List 10 to 20 chapter or scene titles with one line each. Mark the three you most want to write.",
      },
      {
        id: "w3",
        kind: "practice",
        title: "Set a pace you can keep",
        lesson:
          "A book is many small sessions. As an example, a 60,000-word draft in six weeks is about 10,000 words a week, which is roughly 2,000 a day over five days. That is a sprint, not a norm. Many people write far less per day over a longer time. Rest days belong in the plan.",
        practice:
          "Choose a daily or weekly word target, and a fixed time. Write for three sessions and note how much you actually wrote.",
      },
      {
        id: "w4",
        kind: "practice",
        title: "Finish a rough first draft",
        lesson:
          "A first draft's job is to exist. Use your outline as a guide and write the parts that excite you first if you get stuck. Do not edit while drafting; you can only improve pages that exist.",
        practice:
          "Write one full chapter or section without going back to edit. Mark places to fix with a symbol and keep going.",
      },
      {
        id: "w5",
        kind: "practice",
        title: "Revise and ask for feedback",
        lesson:
          "Revision comes after a full draft. Read it aloud, cut what does not serve the reader, then ask a trusted reader specific questions, such as where they got bored or confused.",
        practice:
          "Pick one chapter, revise it once, and give it to one trusted reader with two specific questions.",
      },
    ],
  },
  {
    id: "swimming", short: "Swimming", icon: '<circle cx="16" cy="6" r="2"/><path d="M3 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0 M6 12l5-3 4 3"/>',
    title: "Swimming",
    tagline: "Water safety first, then lessons with a qualified instructor",
    status: "prototype",
    note:
      "No app can teach you to swim. Swimming must be learned in the water with a qualified instructor, and children always need close, constant adult supervision. These stages cover water safety and how to find and prepare for proper lessons. Finishing them is self-logged and shows nothing about your swimming ability or safety in water.",
    sources: [
      { label: "WHO: Drowning fact sheet", url: "https://www.who.int/en/news-room/fact-sheets/detail/drowning" },
      { label: "CDC: Preventing drowning", url: "https://www.cdc.gov/Drowning/Prevention/" },
      { label: "Red Cross: Summer safety, drowning and reach or throw", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/summer-safety.html" },
    ],
    stages: [
      {
        id: "w_1",
        kind: "practice",
        title: "Why water safety comes first",
        lesson:
          "The CDC says drowning happens in seconds and is often silent, and can happen to anyone with access to water. WHO notes young children are at particular risk and that risk rises when they are in water without adult supervision. Basic swimming and water safety skills are one of several protections, not a guarantee.",
        practice:
          "Write down the water places you or your family use: pool, beach, river, bathtub, well. Mark which have fences, covers or a lifeguard.",
      },
      {
        id: "w_2",
        kind: "practice",
        title: "Supervise and stay safe",
        lesson:
          "CDC advice: designate a responsible adult to watch children closely and constantly near water, without phone, reading or alcohol as distractions, and keep supervising even after a child has had swim lessons or when a lifeguard is present. Fence pools on all four sides and lock access doors. Wear a life jacket on boats. WHO also notes swimming alone and drinking alcohol before swimming raise risk.",
        practice:
          "Write three personal water rules, such as never swim alone, no alcohol before swimming, life jacket on boats, and share them with the people you swim with.",
      },
      {
        id: "w_3",
        kind: "practice",
        title: "Find proper lessons",
        lesson:
          "Formal swimming lessons can reduce drowning risk, according to the CDC. WHO says programs should have safety-tested teaching, a safe training area, and safe student-instructor ratios. Look for an instructor or club with recognized qualifications.",
        practice:
          "Contact a local pool or swim school and ask: Who are your instructors and what qualifications do they hold? What is the student-instructor ratio? Is there a lifeguard on duty? What level am I placed in? Book a first lesson.",
      },
      {
        id: "w_4",
        kind: "practice",
        title: "If someone is in trouble",
        lesson:
          "The Red Cross rule for bystanders is: reach or throw, don't go. Drowning is fast and often silent. Call for help, reach with an object or throw something that floats, and stay on dry ground. Rescue and resuscitation techniques must be learned in training.",
        practice:
          "At your usual water place, find where a rescue ring, pole or floating object is, and where the emergency numbers are posted. If there is none, note that.",
      },
    ],
  },
  {
    id: "driving", short: "Driving", icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3 12h7 M14 12h7 M12 14v7"/>',
    title: "Driving",
    tagline: "Rules and licence steps in the app, driving with a real instructor",
    status: "prototype",
    note:
      "Reading cannot make you able to drive or ride. Safe driving needs supervised practice with a qualified instructor and passing the official tests. Rules and fees change; the Korlantas page is the source of truth. Finishing a stage here is self-logged and proves nothing about your driving ability.",
    sources: [
      { label: "Korlantas Polri: Panduan SIM (Indonesia)", url: "https://korlantas.polri.go.id/panduan-sim/" },
    ],
    stages: [
      {
        id: "v_1",
        kind: "practice",
        title: "The licence path in Indonesia",
        lesson:
          "According to Korlantas Polri's SIM guide, the minimum age is 17 for SIM A (private car) and SIM C (motorbike under 250cc), 18 for SIM CI and 19 for SIM CII. A new SIM requires your KTP, a physical health certificate, a psychological test, and, under the guide's current rules, active BPJS Kesehatan membership. You apply online or at the Satpas but must go in person for identification and the exams. The guide lists the official fee as Rp 120,000 for SIM A and Rp 100,000 for SIM C, excluding health and psychology tests. Check the guide for current rules.",
        practice:
          "Open the Korlantas guide and write down which SIM you need, the documents you must prepare and the nearest Satpas.",
      },
      {
        id: "v_2",
        kind: "practice",
        title: "Theory and signs",
        lesson:
          "The theory exam is computer-based and covers road safety and traffic signs. Korlantas points to the e-book on traffic rules in its app and to online simulations. Learn what each sign means, and the rules on priority, speed and parking where you drive.",
        practice:
          "Study a set of traffic signs and take a practice simulation. Write down the three you got wrong and what they mean.",
      },
      {
        id: "v_3",
        kind: "practice",
        title: "Learn with a qualified instructor",
        lesson:
          "Vehicle control, observation and hazard judgment are learned by driving with an experienced instructor in a safe place, and never alone while you are still learning. Korlantas says the practical exam includes braking and balance, U-turn, S-track and emergency braking tests, and offers a coaching clinic at Satpas to try the S-track.",
        practice:
          "Find a licensed driving instructor or school, or a Satpas coaching clinic, and book a first supervised session.",
      },
      {
        id: "v_4",
        kind: "practice",
        title: "Safe habits",
        lesson:
          "Plan every trip so you are rested, sober and unhurried, with your phone out of use. Wear a helmet on a motorbike and a seatbelt in a car. These are basic habits that instructors teach and reinforce.",
        practice:
          "Write your personal driving rules and check that you follow them on your next five trips as a passenger or driver.",
      },
    ],
  },
  {
    id: "language", short: "Languages", icon: '<path d="M4 5h16v11H9l-5 4z"/>',
    title: "Languages",
    tagline: "Speak early, practice daily, check your level",
    status: "prototype",
    note:
      "General method for learning any language. It does not teach a particular language and a milestone here is a conversation review by a person, not an official exam or certificate.",
    sources: [
      { label: "Council of Europe: CEFR levels", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions" },
      { label: "Kim 2022: Effects of spaced practice on second language learning (meta-analysis)", url: "https://onlinelibrary.wiley.com/doi/10.1111/lang.12479" },
      { label: "Nature Reviews Psychology: Spacing and retrieval practice", url: "https://www.nature.com/articles/s44159-022-00089-1" },
    ],
    stages: [
      {
        id: "l_1",
        kind: "practice",
        title: "Set a goal and know the levels",
        lesson:
          "The Council of Europe's CEFR describes six levels, A1 to C2, grouped as Basic User, Independent User and Proficient User. It is a common way to describe what you can do in a language. Pick a goal in those terms, such as holding a simple conversation, not just 'become fluent'.",
        practice:
          "Pick a language and write a goal for three months, like introducing yourself and ordering food. Say which CEFR level that is closest to.",
      },
      {
        id: "l_2",
        kind: "practice",
        title: "Learn with spacing and recall",
        lesson:
          "Research reviews of learning find that spacing study over time and practicing retrieving words from memory work better than cramming or only re-reading. A 2022 meta-analysis of second-language studies found benefits from spaced practice.",
        practice:
          "Pick ten useful words or phrases. Test yourself without looking today, tomorrow, in three days and in a week, and note which you forget.",
      },
      {
        id: "l_3",
        kind: "practice",
        title: "Speak from the start",
        lesson:
          "Speaking is a skill you only build by speaking. Start with a few sentences you will actually use and say them aloud, even if they are wrong. Listening daily, even a few minutes, trains your ear.",
        practice:
          "Say five sentences about yourself aloud in your target language, record or write them, and listen back for mistakes. Listen to ten minutes of real speech today.",
      },
      {
        id: "l_4",
        kind: "practice",
        title: "Find a conversation partner",
        lesson:
          "Conversation with a teacher, tutor or friend gives feedback an app cannot. Be honest that you are a beginner and ask them to correct you gently.",
        practice:
          "Arrange a short conversation with a person who speaks the language. Prepare three questions to ask them.",
      },
      {
        id: "l_5",
        kind: "milestone",
        title: "Milestone: a five-minute conversation",
        lesson:
          "A real conversation shows you more than a quiz. It is a check of your own progress, not an official level.",
        milestone:
          "Have a five-minute conversation in your target language on a topic you chose. A fluent speaker or teacher who listened signs off.",
      },
    ],
  },
  {
    id: "music", short: "Music", icon: '<path d="M9 18V5l11-2v13 M9 18a3 3 0 1 1-3-3 M20 16a3 3 0 1 1-3-3"/>',
    title: "Music",
    tagline: "Play something real, a little every day",
    status: "prototype",
    note:
      "Instrument-neutral practice habits from music educators. It does not teach a specific instrument; a teacher is the best way to learn technique. Sign-off is a friend's or teacher's listen in this same-device demo, not an exam.",
    sources: [
      { label: "Berklee: Practice tips and techniques", url: "https://pulse.berklee.edu/content/practicepalooza/journal/PracticeTips.pdf" },
      { label: "UT Austin Center for Music Learning: 10 tips for effective practice", url: "https://cml.music.utexas.edu/online-resources/intelligent-music-practice/10-tips-for-effective-practice" },
      { label: "Yamaha: Practice effectively, go slow to go fast", url: "https://hub.yamaha.com/music-educators/prof-dev/teaching-tips/practice-effectively/" },
    ],
    stages: [
      {
        id: "u_1",
        kind: "practice",
        title: "Choose an instrument and a piece",
        lesson:
          "Pick one instrument, including your voice, and one short piece you love and can reach. Berklee's practice tips stress setting realistic short and long goals, so choose something small enough to finish.",
        practice:
          "Pick the instrument and a piece of 8 to 16 bars. Find a recording and a score, tab or teacher for it.",
      },
      {
        id: "u_2",
        kind: "practice",
        title: "Short sessions, every day",
        lesson:
          "Berklee advises practicing every day, because short daily sessions beat long ones once or twice a week. Start with 10 to 15 minutes at the same time each day.",
        practice:
          "Practice 10 to 15 minutes a day for five days and mark each day.",
      },
      {
        id: "u_3",
        kind: "practice",
        title: "Slow down",
        lesson:
          "Yamaha's educator advice is that you can play almost anything if you take it slow enough, often at half tempo or slower, so you understand the rhythms and pitches before speeding up.",
        practice:
          "Play your hardest four bars at half speed until they are clean three times in a row, then speed up a little.",
      },
      {
        id: "u_4",
        kind: "practice",
        title: "Make one small thing great",
        lesson:
          "UT's Center for Music Learning suggests that rather than improving many things at once, you pick one small thing and make it great, like how a single note starts.",
        practice:
          "Pick one small detail in your piece, and spend one session only on it. Record before and after and compare.",
      },
      {
        id: "u_5",
        kind: "milestone",
        title: "Milestone: play it for someone",
        lesson:
          "Playing for another person is a different skill from practicing alone. It is okay to make mistakes; keep going.",
        milestone:
          "Play your piece from start to finish for a friend or teacher, who signs off.",
      },
    ],
  },
  {
    id: "math", short: "Math", icon: '<path d="M5 7h6 M8 4v6 M14 7h6 M5 17h6 M14 14l6 6 M20 14l-6 6"/>',
    title: "Math",
    tagline: "Problems you can check yourself",
    status: "prototype",
    note:
      "A problem-solving method with small worked examples you can verify yourself. It is not a school curriculum.",
    sources: [
      { label: "Pólya's four phases, How to Solve It (overview)", url: "https://en.wikipedia.org/wiki/How_to_Solve_It" },
      { label: "University of Toronto Scarborough: Polya's problem solving", url: "https://www.utsc.utoronto.ca/learningstrategies/polyas-problem-solving" },
    ],
    stages: [
      {
        id: "a_1",
        kind: "practice",
        title: "Understand the problem",
        lesson:
          "George Pólya's classic checklist has four phases: understand the problem, make a plan, carry out the plan, look back. Start by saying what is asked, what you know and what is unknown. Example: Rina buys 3 notebooks at Rp 12,500 each and pays Rp 50,000. How much change does she get?",
        practice:
          "For the example, write what is known and what is asked, in your own words, before calculating.",
      },
      {
        id: "a_2",
        kind: "practice",
        title: "Make a plan and do it",
        lesson:
          "A plan is the steps you will take. Here: multiply price by number, then subtract from the payment. Carry it out one step at a time and write each step.",
        practice:
          "Solve the notebook example. Then check: the answer is Rp 12,500 in change (3 x 12,500 = 37,500, and 50,000 - 37,500 = 12,500).",
      },
      {
        id: "a_3",
        kind: "practice",
        title: "Look back and check",
        lesson:
          "Look back means testing whether the answer makes sense and whether you can check it another way. Example: after a 20 percent discount a shirt costs Rp 120,000. What was the original price? Plan: the price is 80 percent of the original, so divide by 0.8.",
        practice:
          "Solve it, then check by applying a 20 percent discount to your answer. The original price is Rp 150,000, because 150,000 x 0.8 = 120,000.",
      },
      {
        id: "a_4",
        kind: "practice",
        title: "Make your own problems",
        lesson:
          "Writing a problem forces you to understand its structure. If you cannot solve a problem, try an easier related one, or draw a picture, as Pólya suggests.",
        practice:
          "Write one problem from your own life (prices, distance, time) with an answer you can check, and solve it with the four phases.",
      },
    ],
  },
  {
    id: "chess", short: "Chess", icon: '<circle cx="12" cy="6" r="3"/><path d="M9 20h6 M10 9l-1 11 M14 9l1 11 M8 14h8"/>',
    title: "Chess",
    tagline: "Patterns first, then games",
    status: "prototype",
    note:
      "Beginner chess basics. This does not replace playing and reviewing real games or learning from a coach.",
    sources: [
      { label: "FIDE Laws of Chess", url: "https://handbook.fide.com/chapter/LawsOfChess" },
      { label: "FIDE Arbiters' Manual (stalemate)", url: "https://arbiters.fide.com/wp-content/uploads/Publications/Manual/Arbiters_Manual_2025.pdf" },
      { label: "Chess.com: Opening principles", url: "https://www.chess.com/article/view/learn-chess-opening-principles" },
      { label: "Silver Knights: Opening principles", url: "https://chessacademy.com/blogs/chess-lessons/beginner-1-lesson-7-opening-principles" },
    ],
    stages: [
      {
        id: "x_1",
        kind: "practice",
        title: "Board, pieces and moves",
        lesson:
          "Chess is played between two players who move alternately on a square board, and White moves first (FIDE Laws). Each piece type moves in its own way: king, queen, rook, bishop, knight and pawn. Learn them one piece at a time.",
        practice:
          "Set up a board and move each piece type around it until you can say where it can go without looking it up.",
      },
      {
        id: "x_2",
        kind: "practice",
        title: "Checkmate and stalemate",
        lesson:
          "The goal is checkmate: the opponent's king is attacked and cannot escape. If the player to move has no legal move and the king is not in check, the game is a stalemate and is drawn, per the FIDE Arbiters' Manual. A common beginner mistake is stalemating an opponent you are winning against.",
        practice:
          "Set up king and queen against a lone king and practice trapping it. Notice the positions where you would accidentally cause stalemate.",
      },
      {
        id: "x_3",
        kind: "practice",
        title: "Opening principles",
        lesson:
          "Three goals for the first 10 to 15 moves: control the center, develop your pieces from the back rank, and castle to make your king safer.",
        practice:
          "Play the first ten moves of a game aiming only at those three goals. Write down which you did.",
      },
      {
        id: "x_4",
        kind: "practice",
        title: "Check for threats",
        lesson:
          "Before every move ask: what is my opponent threatening now, and does my move leave a piece unprotected? Most beginner games are decided by pieces left hanging.",
        practice:
          "In your next game, before each move say aloud what the opponent threatens. Count how often it changed your move.",
      },
      {
        id: "x_5",
        kind: "practice",
        title: "Play and review",
        lesson:
          "Play whole games, then review the moment it went wrong. Even a quick look at where you lost a piece teaches more than another game right away.",
        practice:
          "Play three games. For each, write down the move where the game turned and what you would do differently.",
      },
    ],
  },
];
