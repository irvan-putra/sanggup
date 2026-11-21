// Skill content for the sanggup prototype.
// All 25 tracks have starter paths (merges applied). Each path states its own limits.
window.SANGGUP_TRACKS = [
  {
    id: "cooking", short: "Cooking", icon: '<path d="M4 11h16v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z M2 11h20 M9 7c0-2 2-1 2-3 M14 7c0-2 2-1 2-3"/>',
    title: "Cooking",
    tagline: "From your first dish to a full meal",
    status: "prototype",
    note:
      "General home-cooking education, not professional culinary or food-safety training. It does not certify anything. Follow official food-safety guidance such as WHO's Five keys to safer food, and get hands-on help whenever tools or heat are new to you.",
    sources: [
      { label: "WHO: Five keys to safer food", url: "https://www.who.int/activities/promoting-safe-food-handling" },      { label: "USDA FSIS: Leftovers and food safety", url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety" },

    ],
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
        id: "c6",
        kind: "practice",
        title: "Treat an AI recipe as a draft",
        lesson:
          "A chatbot can invent a plausible recipe with wrong quantities, times or temperatures. Treat its output as a draft: cross-check the ratios and cooking times against a trusted recipe for the same dish, and keep the food-safety rules from earlier stages unchanged. An impressive-sounding recipe is not evidence it works.",
        practice:
          "A fictional AI recipe for fried rice says to cook 500 grams of rice in 200 milliliters of water for 5 minutes. Write what looks wrong, what you would compare it against, and the corrected quantities you would actually try first.",
      },
      {
        id: "c7",
        kind: "practice",
        title: "Food prep for a week alone",
        lesson:
          "Food preparation, or meal prep, for a week alone is a planning skill more than a recipe skill: a short list of simple meals you already know, ingredients that overlap so nothing spoils, and one bigger batch that becomes the next day or two. Cooked food has limits, so prep covers a few days at a time, not seven: the USDA's guidance is to refrigerate leftovers promptly and reheat them hot. The goal is a week without panic-buying or wasting food, not seven new recipes.",
        practice:
          "Plan a week of dinners for one, real or on paper: pick four simple meals you can already make, note which ingredients repeat, and choose one batch-cook meal to prep ahead for two days. Write how you will store and reheat that batch safely. Then write your shopping list from the plan, grouped by how soon each item spoils.",
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
    id: "tidying", short: "Home", icon: '<path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6"/>',
    title: "Home",
    tagline: "Clean, mend, repair and care for plants",
    status: "prototype",
    note:
      "Independent practice exercises written for sanggup. This is not an official KonMari course and is not endorsed by Marie Kondo or KonMari Media. Cleaning removes dirt; tidying means deciding what to keep. They are different jobs and this path treats them separately. The mending, repair and plant stages teach basic hand skills only; they do not cover electrical, plumbing, gas or structural work, which belongs to building maintenance or a licensed professional.",
    sources: [
      { label: "CDC: Cleaning and disinfecting", url: "https://www.cdc.gov/hygiene/cleaning-disinfecting/" },
      { label: "CDC: Cleaning and disinfecting with bleach", url: "https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html" },
      { label: "MedlinePlus: Cleaning, disinfecting and sanitizing", url: "https://medlineplus.gov/cleaningdisinfectingandsanitizing.html" },
      { label: "KonMari: Rule 4, tidy by category", url: "https://konmari.com/marie-kondo-rules-of-tidying-category-not-location/" },
      { label: "KonMari: Rule 5, follow the right order", url: "https://konmari.com/marie-kondo-rules-of-tidying-follow-order/" },
      { label: "KonMari: Rule 6, sparks joy", url: "https://konmari.com/marie-kondo-rules-of-tidying-sparks-joy/" },
      { label: "Swedish death cleaning (döstädning), overview", url: "https://en.wikipedia.org/wiki/Swedish_death_cleaning" },      { label: "Wikipedia: Sewing", url: "https://en.wikipedia.org/wiki/Sewing" },
      { label: "Wikipedia: Houseplant", url: "https://en.wikipedia.org/wiki/Houseplant" },
      { label: "RHS: How to grow houseplants", url: "https://www.rhs.org.uk/plants/types/houseplants/growing-guide" },

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
        id: "hm1",
        kind: "practice",
        title: "Mend clothes by hand",
        lesson:
          "Hand sewing has kept clothes alive for thousands of years and needs almost no equipment: a needle, thread and a few basic stitches fix most everyday damage. Sewing a button back, closing a split seam and hemming an edge cover most repairs, and the same stitches let you make simple accessories like pouches or scrunchies. Mending one thing teaches more than reading about ten.",
        practice:
          "Do one repair and one creation, real or on paper. Repair: take an item with a small defect, such as a loose button, a split seam or a fraying hem, and write the three hand-sewing steps to fix it. Create: plan one simple handmade accessory, such as a fabric pouch or scrunchie, listing the material, the stitches and the first seam. If you have a needle and fabric, do one of the two for real.",
      },
      {
        id: "hm2",
        kind: "practice",
        title: "Handle small apartment repairs",
        lesson:
          "Many apartment annoyances are safe beginner fixes, such as reattaching peeling wallpaper, patching a nail hole or tightening a loose hinge, but the first step is always the same: check the material you are working on and follow the product's own instructions, because the wrong adhesive or filler damages the surface. Renters also check the lease before changing anything permanent. The boundary is clear: anything electrical, plumbing inside walls, gas or structural belongs to building maintenance or a licensed professional. Knowing where DIY ends is part of the skill.",
        practice:
          "List three small issues in a home, real or imagined, such as peeling wallpaper, a wobbly hinge and a nail hole. For each, write whether it is a safe DIY fix or a call-maintenance case. For one DIY case, note the material involved, which product instructions you would read first, and the first step.",
      },
      {
        id: "hm3",
        kind: "practice",
        title: "Keep apartment plants alive",
        lesson:
          "Houseplants have different needs from outdoor plants, and each species has its own requirements for light, water and soil. Two habits prevent most trouble. The RHS watering guidance: do not water on a routine; check first, and water when the surface of the compost is dry. And use a pot with drainage holes, because roots sitting in water rot. Many popular houseplants tolerate shade and irregular watering because they evolved as understory plants or succulents. Match the plant to the room, not the other way around.",
        practice:
          "Pick one spot in a home, real or imagined, and note its light: bright window, indirect, or dim corner. Choose one plant type suited to that light, write its watering rule of thumb and its drainage setup, and add one sign that would tell you it is being overwatered.",
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
    id: "decisions", short: "Decisions", icon: '<path d="M9 6h11 M9 12h11 M9 18h11 M4 6h.01 M4 12h.01 M4 18h.01"/>',
    title: "Decisions and priorities",
    tagline: "Decide what comes first, then choose on purpose",
    status: "prototype",
    note:
      "General skill practice with your own everyday tasks and low-stakes choices. sanggup does not rank tasks or make decisions for you and is not personal advice. For health, money, legal or safety decisions, talk to a qualified person.",
    sources: [
      { label: "MindTools: Eisenhower's urgent/important principle", url: "https://www.mindtools.com/al1e0k5/eisenhowers-urgentimportant-principle/" },
      { label: "James Clear: The Eisenhower Box", url: "https://jamesclear.com/eisenhower-box" },
      { label: "Amazon 2015 shareholder letter (one-way and two-way doors)", url: "https://s2.q4cdn.com/299287126/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF" },
      { label: "Farnam Street: Reversible and irreversible decisions", url: "https://fs.blog/reversible-irreversible-decisions/" },
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
          "In 1954 Dwight Eisenhower said he had two kinds of problems, the urgent and the important. The Eisenhower box sorts tasks into four groups: urgent and important (do now), important but not urgent (schedule), urgent but not important (delegate or shorten), and neither (drop). Urgent things shout; important things are the ones that matter to your goals. A common shorthand for handling the four groups is the 4D mnemonic: Do the urgent and important now, Delegate what someone else can do, Delay (schedule) what matters but can wait, and Delete the rest. Shared skill: the same 4D sort is also practiced in <a href='#focus/f2'>Focus and habits</a>, for triaging interruptions.",
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
    id: "focus", short: "Focus", icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12h.01"/>',
    title: "Focus and habits",
    tagline: "Work in short, protected blocks",
    status: "prototype",
    note:
      "Independent practice based on the publicly described Pomodoro Technique by Francesco Cirillo. Not an official course; Pomodoro is a registered mark of its owner. General time-management practice, not advice for attention or health conditions. The habits stages are independent exercises inspired by ideas in James Clear's Atomic Habits, written in our own words; this is not an official course and is not endorsed by the author or publisher.",
    sources: [
      { label: "Pomodoro Technique: what it is", url: "https://www.pomodorotechnique.com/what-is-the-pomodoro-technique/" },
      { label: "NIH NICHD: The Pomodoro Technique", url: "https://science.nichd.nih.gov/confluence/display/newsletter/2020/05/07/The+Pomodoro+Technique:+An+Effective+Time+Management+Tool" },
      { label: "James Clear: Atomic Habits summary", url: "https://jamesclear.com/atomic-habits-summary" },
      { label: "James Clear: How to start new habits that stick", url: "https://jamesclear.com/three-steps-habit-change" },      { label: "Getting Things Done: the method", url: "https://gettingthingsdone.com/what-is-gtd/" },
      { label: "Building a Second Brain", url: "https://www.buildingasecondbrain.com/" },
      { label: "Wikipedia: Zettelkasten", url: "https://en.wikipedia.org/wiki/Zettelkasten" },
      { label: "Wikipedia: Spaced repetition", url: "https://en.wikipedia.org/wiki/Spaced_repetition" },
      { label: "Wikipedia: Method of loci", url: "https://en.wikipedia.org/wiki/Method_of_loci" },

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
          "Distractions will come, from your phone and from your own mind. Write the interruption down on a scrap of paper and go back to the task, then deal with it during a break. When a request interrupts you, triage it with the 4D sort: Do, Delegate, Delay, Delete. Shared skill: the 4D mnemonic has its home in <a href='#decisions/p2'>Decisions and priorities</a>.",
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
      {
        id: "h5",
        kind: "practice",
        title: "Capture everything, clarify next actions",
        lesson:
          "Getting Things Done is a method for clearing your head: capture every open loop into a trusted list instead of holding it in memory, then clarify each item into the very next physical action. A weekly review keeps the lists current. The method works on paper; no app is required.",
        practice:
          "Do a ten-minute capture: write down everything on your mind, real or fictional, without organizing. Then take three items and write the next concrete action for each, starting with a verb. Finish by scheduling one weekly review moment.",
        tools: [
          { label: "tindak web", url: "https://vanipy.com/tindak/", note: "tasks stay in this browser: no Android or DeltaChat sync, no alerts" },
        ],
      },
      {
        id: "h6",
        kind: "practice",
        title: "Keep a second brain of notes",
        lesson:
          "Building a Second Brain, Tiago Forte's method, treats notes as a system outside your head: capture what resonates, organize by actionability, distill to the essentials, and express by reusing notes in real output. The point is not hoarding information but having your past thinking available when you make things.",
        practice:
          "Take one article or idea you found interesting recently, real or imagined. Write a note in your own words: the core idea in two sentences, why it matters to you, and one place you could use it. Then write a two-line distilled version you could find useful a year from now.",
      },
      {
        id: "h7",
        kind: "practice",
        title: "Link small notes, Zettelkasten style",
        lesson:
          "A Zettelkasten is a card file of small notes, each holding one idea, linked to related notes by references or tags. The links are the value: new ideas connect to old ones, and clusters of linked notes become material for writing. Paper cards work fine; the method predates computers.",
        practice:
          "Write three small notes, real or fictional, each with one idea and a title. For each note, add one link to another note with a line about why they connect. Then write one sentence about the idea that only became visible because of the links.",
      },
      {
        id: "h8",
        kind: "practice",
        title: "Remember with spaced repetition",
        lesson:
          "Spaced repetition means reviewing information at increasing intervals, just before you would forget it, which beats cramming for long-term memory. Flashcards are the classic tool: a question on one side, an answer on the other, reviewed on a schedule. Paper cards and a box work as well as any app.",
        practice:
          "Make five paper flashcards for something you want to remember, real or fictional: a question or prompt on the front, a short answer on the back. Review them today, then plan reviews for tomorrow, three days, and a week, and note which cards were hardest.",
      },
      {
        id: "h9",
        kind: "practice",
        title: "Build a small mind palace",
        lesson:
          "The method of loci, the mind palace, is an ancient memory technique: place the things you want to remember at spots along a route you know well, like the rooms of your home, then walk the route in your mind to recall them. Vivid, unusual images stick better than plain ones.",
        practice:
          "Pick a familiar route, real or imagined, with six spots in a fixed order. Place six fictional shopping items along it as vivid images, then write the list from memory by walking the route. Check what you missed and make those images stranger.",
      },
      {
        id: "h10",
        kind: "practice",
        title: "Keep your manual routes working",
        lesson:
          "Every AI-assisted habit in this app has a manual route, and it is worth keeping that route in shape: a paper list still plans a day, a cookbook still feeds you, asking a person still answers a question, and doing arithmetic by hand still catches a wrong total. Tools fail, accounts lock, connections drop. Managing without AI is not rejecting it; it is knowing you can still function when it is not there.",
        practice:
          "Pick one thing you usually do with an app or AI, real or imagined, and do it fully by hand once: plan tomorrow on paper, cook from a written recipe, or work out a budget with a calculator. Write what was slower, what was actually fine, and which manual route you want to keep practiced.",
      },
      {
        id: "h11",
        kind: "practice",
        title: "Get back on track after a break",
        lesson:
          "Routines break: illness, travel, a busy month, or plain lost motivation. Getting back on track starts with taking stock without beating yourself up: what was working, what slipped, what is still true. Then restart smaller than your old peak. One easy session done today rebuilds more trust in yourself than a heroic plan abandoned by Friday. The streak is not the habit; returning is the habit.",
        practice:
          "Pick one lapsed routine, real or fictional. Write what it looked like at its best, then design a restart at half that size or less, scheduled for a specific day this week. Add one line about what you will tell yourself on the first day you slip again.",
      },
      {
        id: "h12",
        kind: "practice",
        title: "Notice when AI does your thinking",
        lesson:
          "Relying on a chatbot for every answer can quietly become a habit: asking before trying, accepting the first answer, being unable to explain it afterward. The check is simple: try first without AI, write your own judgment before asking, and make sure you can explain any answer with the chat closed. Setting boundaries, like AI-free tasks or hours, keeps the tool serving your thinking instead of replacing it. This is about habits, not a medical diagnosis: if use feels compulsive and distressing, that deserves the same care as any other stubborn habit, including professional support.",
        practice:
          "Pick one question you would normally ask a chatbot today, real or fictional. Write your own answer or judgment first, in full sentences. Only then compare with the AI answer, note where yours held up and where it did not, and practice explaining the final answer out loud without looking.",
        tools: [
          { label: "menit", url: "https://vanipy.com/menit/", note: "web version: estimates your time in AI apps from minutes you type in from Digital Wellbeing; no automatic usage access" },
        ],
      },
    ],
  },
  {
    id: "projects", short: "Projects", icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16 M15 4v16"/>',
    title: "Projects and business",
    tagline: "Kanban boards and sprints",
    status: "prototype",
    note:
      "Independent introduction to Kanban and Scrum sprints based on the public Kanban Guide and Scrum Guide. Not an official course and not a certification path. For team work, adapt to how your team agrees to work. The business stages are general-purpose organizing tools, not business, tax or legal advice; how you apply them depends on your actual situation, and for regulated decisions you should talk to a qualified professional.",
    sources: [
      { label: "Kanban University: The Official Guide to the Kanban Method", url: "https://kanban.university/kanban-guide/" },
      { label: "Atlassian: What is Kanban", url: "https://www.atlassian.com/agile/kanban" },
      { label: "The Scrum Guide", url: "https://scrumguides.org/scrum-guide.html" },
      { label: "Scrum.org: The Scrum events", url: "https://www.scrum.org/learning-series/scrum-events/" },
      { label: "Objectives and key results (OKR), overview", url: "https://en.wikipedia.org/wiki/Objectives_and_key_results" },
      { label: "Performance indicator (KPI), overview", url: "https://en.wikipedia.org/wiki/Performance_indicator" },
      { label: "Standard operating procedure (SOP), overview", url: "https://en.wikipedia.org/wiki/Standard_operating_procedure" },
      { label: "Responsibility assignment matrix (RACI), overview", url: "https://en.wikipedia.org/wiki/Responsibility_assignment_matrix" },
      { label: "Ready.gov: Business Continuity Planning", url: "https://www.ready.gov/business-continuity-plan" },
      { label: "Wikipedia: Bootstrapping (business)", url: "https://en.wikipedia.org/wiki/Bootstrapping" },
      { label: "Wikipedia: Project management", url: "https://en.wikipedia.org/wiki/Project_management" },      { label: "Wikipedia: 3D printing", url: "https://en.wikipedia.org/wiki/3D_printing" },
      { label: "Precious Plastic: open-source plastic recycling machines and community", url: "https://preciousplastic.com/" },
      { label: "NIOSH: Safe 3D printing is for everyone, everywhere", url: "https://www.cdc.gov/niosh/bulletin/2024/safe-3d-printing.html" },

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
      {
        id: "bu1",
        kind: "practice",
        title: "Set goals people can measure",
        lesson:
          "An OKR pairs an Objective, a qualitative goal worth chasing, with a few Key Results, numbers that show whether you got there. The format came out of Intel and spread through Google. Vague goals drift; measurable key results force the conversation about what done means. Shared skill: OKRs are also practiced in <a href='#network/cb8'>Network and community</a>, for member and sponsor benefits.",
        practice:
          "Write one objective for your work, business or community for the next three months, with three key results you can actually measure. Check each: could a stranger tell whether it happened?",
      },
      {
        id: "bu2",
        kind: "practice",
        title: "Watch the numbers that matter",
        lesson:
          "A KPI is a number you watch over time to judge the health of an activity. A few honest numbers beat a dashboard of decorations: every KPI needs a target, an owner and a moment you look at it, or it is trivia. Shared skill: KPIs are also practiced in <a href='#network/cb8'>Network and community</a> and the Career path. Shared skill: KPIs are also practiced in Branding and creator, for marketing.",
        practice:
          "Pick one activity and choose at most three numbers that would tell you it is healthy. For each, write the target, who looks at it and when.",
      },
      {
        id: "bu3",
        kind: "practice",
        title: "Write it once, run it many times",
        lesson:
          "A standard operating procedure is the written version of a repeated task: steps clear enough that someone else gets the same result without asking you. Start with the tasks you repeat most or hand off first; the test of an SOP is whether it works without its author in the room. Shared skill: SOPs are also practiced in <a href='#network/cb5'>Network and community</a> and Teaching and mentoring.",
        practice:
          "Write a one-page SOP for one task you repeat. Hand it to someone and watch them run it from the note alone. Fix the two places they stumbled.",
      },
      {
        id: "bu4",
        kind: "practice",
        title: "Who does what",
        lesson:
          "Unclear ownership is how shared work dies. RACI names the roles: Responsible does the work, Accountable owns the outcome (exactly one person), Consulted gives input before, Informed hears after. Writing the letters next to names surfaces gaps and double-ownership before they cost you. Shared skill: RACI is also practiced in <a href='#network/cb3'>Network and community</a> and the Career path.",
        practice:
          "Take one current project or recurring process. List its five main tasks and write R, A, C or I next to each person involved. Fix any task with no A, or two.",
      },
      {
        id: "bs1",
        kind: "practice",
        title: "Start with what you have",
        lesson:
          "Bootstrapping in business means starting without external capital: founders survive on internal cash flow and stay very cautious with expenses. Funding typically moves from personal savings, to customer revenue keeping the business afloat, to reinvesting profits for growth, which keeps control with you. Shared skill: the household budgeting that frees money to start is the <a href='#money/b2'>Money and FIRE</a> path.",
        practice:
          "List what you could start this month with only what you already have: skills, tools, contacts and a small amount of savings. Write down the smallest version that a real customer could pay for.",
      },
      {
        id: "bs2",
        kind: "practice",
        title: "Cash flow decides",
        lesson:
          "A bootstrapped venture lives or dies on cash flow: money from customers must cover day-to-day expenses before anything else. Know your monthly costs, get paid promptly, and treat every expense as a choice against survival; a project that looks profitable on paper can still sink if the money arrives late. Shared skill: winning the first customers is the marketing stages in <a href='#branding/mk1'>Branding and creator</a>; watching the numbers that matter is the KPI stage in this path.",
        practice:
          "Sketch one month of cash flow for your smallest offer: money in, when; money out, when. Mark the tightest week and write one thing you would cut or delay if it came true.",
      },
      {
        id: "pb9",
        kind: "practice",
        title: "Keep people, tasks and updates in sync",
        lesson:
          "Projects drift when people hold different pictures of the same work. Project management treats planning and control as its own discipline: one shared task list with owners and dates, a short regular update where everyone hears the same status, and one place where decisions are written down. Syncing is not more meetings; it is making sure nobody has to guess what changed, what is blocked, or what happens next. Shared skill: updating your manager is the manage up stage in <a href='#work/ca5'>the Career path</a>.",
        practice:
          "Take any project, real or imaginary, with at least two people in it. Write its one-page sync sheet: the task list with owners and dates, when the regular update happens, and where decisions get recorded. Run one mock update aloud in two minutes.",
      },
      {
        id: "j5",
        kind: "practice",
        title: "Understand 3D printing",
        lesson:
          "3D printing builds an object layer by layer from a digital model, most commonly by melting plastic filament (FDM). It shines at prototypes, replacement parts and shapes that are hard to make by hand. The practical route for a beginner is usually a makerspace, library or print service rather than buying a machine. NIOSH safety guidance: heated filaments release ultrafine particles and volatile compounds, so print in a ventilated space; the nozzle and bed cause burns, so let them cool; and check the material's own safety notes before printing anything that will touch food.",
        practice:
          "Pick one object around your home, real or imagined, that could break or go missing, such as a drawer handle or cable clip. Write whether a 3D-printed replacement makes sense, what material you would choose, and where you could get it printed without owning a printer.",
      },
      {
        id: "j6",
        kind: "practice",
        title: "Learn how plastic recycling workshops work",
        lesson:
          "Precious Plastic, a project from the One Army community, publishes open-source machines and guides so local workshops can shred and press waste plastic into new products like sheets, tiles and furniture. The machines are workshop-scale, not kitchen appliances: shredding and melting plastic involves heat, fumes and moving parts, so this is a community-workshop activity with proper equipment and ventilation, not a home experiment. The accessible first step is learning which plastics can be recycled and finding a local workshop or collection point.",
        practice:
          "Look at three plastic items you would normally throw away, real or imagined, and find the recycling code on each. Write which local option, real or fictional, could take each one: regular recycling collection, a Precious Plastic-style workshop, or neither. Then list two questions you would ask a workshop before bringing material.",
      },
      {
        id: "bu5",
        kind: "milestone",
        title: "Milestone: keep it running",
        lesson:
          "Continuity planning is the business version of preparedness: identify the functions that must keep running, plan backups for people, places and systems, mitigate what you can ahead of time, and practice the plan. Ready.gov publishes the standard outline. Shared skill: household-scale preparedness is the <a href='#disaster/s3'>Safety and emergencies</a> path.",
        milestone:
          "Draft a one-page continuity plan for a real activity you are responsible for: critical functions, one backup each, and a date to rehearse it. Someone who would have to execute it reviews the plan and signs off.",
      },
    ],
  },
  {
    id: "disaster", short: "Safety", icon: '<path d="M12 3l10 18H2z M12 10v5 M12 18h.01"/>',
    title: "Safety and emergencies",
    tagline: "Prepare, respond safely, know when to call",
    status: "prototype",
    note:
      "Preparedness and awareness basics from Indonesian authorities, Ready.gov and the Red Cross. Local hazards and official instructions differ by area and event, so follow your local disaster agency (BPBD), BMKG and BNPB first. In a real emergency in Indonesia, call 119 for medical help; 112 is the integrated emergency number in the cities and regencies that run it, so check whether yours does. Elsewhere, use your local number. This path does not make you a trained rescuer or survival expert, and reading it does not train or qualify you in first aid: CPR and choking response must be learned hands-on from a qualified instructor. A chatbot is not a responder: in an emergency, call professionals first, not AI.",
    sources: [
      { label: "Kemenkes Pusat Krisis: Tas Siaga Bencana (cites BNPB)", url: "https://pusatkrisis.kemkes.go.id/mari-siapkan-tas-siaga-bencana" },
      { label: "Red Cross: Adult and child choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking" },
      { label: "Red Cross: Management of foreign body airway obstruction (guidelines)", url: "https://guidelines.redcross.org/guidelines-database/foreign-body-airway-obstruction/" },
      { label: "Red Cross: CPR training formats", url: "https://www.redcross.org/take-a-class/cpr" },
      { label: "MedlinePlus: Abdominal thrusts", url: "https://medlineplus.gov/ency/article/000047.htm" },
      { label: "PMI: Pelatihan relawan (first aid, CPR and AED)", url: "https://pmipusat.org/pelatihan-relawan/" },
      { label: "Kemenkes PSC 119: how to make an emergency call", url: "https://psc.kemkes.go.id/web/cara-melakukan-panggilan-emergency-call-119" },
      { label: "Layanan 112, Indonesia emergency call (Kominfo)", url: "https://layanan112.komdigi.go.id/tentang" },
      { label: "BMKG: Petunjuk keselamatan gempabumi dan tsunami", url: "https://content.bmkg.go.id/wp-content/uploads/Large-Prints-Petunjuk-keselamatan-Gempabumi-Tsunami.pdf" },
      { label: "Ready.gov: Build a kit", url: "https://www.ready.gov/kit" },
      { label: "Ready.gov: Practice your home fire escape plan", url: "https://www.ready.gov/home-fire-escape-plan" },
      { label: "Red Cross: 7 ways to prepare for a home fire", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-preparedness.html" },
      { label: "US Forest Service: If you get lost", url: "https://www.fs.usda.gov/visit/know-before-you-go/if-you-get-lost" },
      { label: "Antara: Tersesat di gunung? Ini yang perlu Anda lakukan", url: "https://www.antaranews.com/berita/5846199/tersesat-di-gunung-ini-yang-perlu-anda-lakukan" },
      { label: "Basarnas: Darurat SAR, hubungi 115 (2022)", url: "https://basarnas.go.id/berita/kabasarnas-darurat-sar-hubungi-115" },
      { label: "Basarnas: official site contact (115)", url: "https://www.basarnas.go.id/hubungi-kami" },
      { label: "Ready.gov: Floods", url: "https://www.ready.gov/floods" },
      { label: "US National Weather Service: Turn Around Don't Drown", url: "https://www.weather.gov/safety/flood-turn-around-dont-drown" },
      { label: "CDC: How to create and store an emergency water supply", url: "https://cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html" },
      { label: "Red Cross: Summer safety, drowning and reach or throw", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/summer-safety.html" },
      { label: "BNPB: Buku saku bencana", url: "https://www.bnpb.go.id/storage/app/media/uploads/24/buku-data-bencana/6-buku-saku-cetakan-4-2019.pdf" },
      { label: "Ready.gov: Business Continuity Planning", url: "https://www.ready.gov/business-continuity-plan" },
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
          "Find out which hazards your neighborhood faces. Save your local BPBD contact and the medical number 119 in your phone, and check whether 112 operates in your city or regency.",
      },
      {
        id: "s2",
        kind: "practice",
        title: "Pack a go-bag",
        lesson:
          "BNPB describes a Tas Siaga Bencana as a bag with basic needs for the first 3x24 hours when help may not have arrived. Contents listed by Kemenkes include copies of important documents in waterproof cover, first-aid supplies and personal medicines, a whistle, flashlight and batteries, some cash, phone charger, power bank and radio, spare clothes, long-life food and drinking water. Keep it to what you need; don't overload it. Ready.gov likewise says to prepare for several days on your own. Documents and cards can also go missing through theft rather than disaster; the <a href='#security/sec9'>Security basics path's lost-wallet stage</a> covers what to block first and how reporting a loss differs from replacing a document.",
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
          "The first rule of rescue is to avoid becoming a second victim. The Red Cross says drowning is fast and often silent, and a person may last only 20 to 60 seconds before going under. Its advice for bystanders is: call for help, then reach with something or throw something that floats, and do not go into the water yourself. The same thinking applies to collapsed buildings, fire and floods: call 119 or your local emergency number and the authorities, and help from a safe position. Actual rescue techniques need training.",
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
          "The US Forest Service says the best survival tool is advance planning: carry enough food, water, layers, a light, a map and compass you know how to use, check for local warnings, and tell someone exactly where you are going, your route and when you will return. Do not rely on a phone signal. If you become lost, use STOP (Stop, Think, Observe, Plan): stop, stay calm and, if it is safe, stay put, because walking farther makes you harder to find. Antara's mountain guidance gives the same advice. Basarnas, Indonesia's search and rescue agency, has said search and rescue emergencies can be reported to 115 (a 2022 statement; Basarnas's own website currently lists 115 and a WhatsApp Rescue 115 chat).",
        practice:
          "Before your next outing, write a plan for a trusted person: where, route, return time and who is going. Pack a small kit of water, light and layers. Save 119 and the Basarnas contact in your phone.",
      },
      {
        id: "s14",
        kind: "practice",
        title: "Continuity beyond your household",
        lesson:
          "Preparedness scales up. Ready.gov's business continuity planning guidance for organizations: identify the functions that must keep running, plan how to keep them going when people, places or systems are unavailable, reduce what can be reduced ahead of time (mitigation), and practice the plan before you need it. Shared skill: continuity planning is also practiced in <a href='#projects/bu5'>Projects and business</a>.",
        practice:
          "Pick one activity you are responsible for, at work or in a community. Write its three most critical functions and one backup for each: another person, another place or another way.",
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
          "Find where an AED is in a building you often visit, and write down the emergency numbers: 119 for medical help in Indonesia, and 112 where your city or regency runs it.",
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
      {
        id: "a5",
        kind: "milestone",
        title: "Milestone: complete hands-on training",
        lesson:
          "The Red Cross offers blended and in-person courses where an instructor watches you practice, and PMI runs first aid, CPR and AED training in Indonesia. A course is where theory becomes a skill someone qualified has actually watched you perform.",
        milestone:
          "Attend a hands-on first aid or CPR course, for example through PMI, and practice the skills on training equipment. The course instructor confirms you took part and signs off. This records attendance and practice only; it is not a certificate or qualification.",
      },
    ],
  },
  {
    id: "security", short: "Security", icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: "Security basics",
    tagline: "Protect what matters, in layers",
    status: "prototype",
    note:
      "Defensive basics only. This path does not teach security testing or anything offensive, and finishing it does not make you a security professional. No single lock, alarm or app guarantees protection: visible protection discourages opportunists, while a determined attacker plans around a single barrier, so protection comes in layers. If something happens, contact your bank, provider or local police through their official channels, not a chatbot.",
    sources: [
      { label: "askthe.police.uk: How can I protect my home from burglary?", url: "https://www.askthe.police.uk/faq/?id=bb3d1fc7-11db-eb11-bacb-0022483f5223" },
      { label: "police.uk: Keep burglars out of your property", url: "https://www.police.uk/cp/crime-prevention/protect-home-crime/keep-burglars-out-property" },
      { label: "police.uk: Checklist for securing your home when you leave it", url: "https://www.police.uk/cp/crime-prevention/protect-home-crime/leaving-your-home-checklist/" },
      { label: "CISA: Secure Our World, four core steps", url: "https://www.cisa.gov/secure-our-world" },
      { label: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams" },
      { label: "IdentityTheft.gov: report identity theft and get a recovery plan (US)", url: "https://www.identitytheft.gov/" },
      { label: "USA.gov: How to replace lost or stolen ID cards (US examples)", url: "https://www.usa.gov/replace-vital-documents" },
      { label: "LockPickingLawyer: $329 smart lock opened in seconds (video)", url: "https://www.youtube.com/watch?v=m_MX96MVD00" },
      { label: "CISA: Recognize and report phishing", url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" },
      { label: "Krebs on Security: Legal threats make powerful phishing lures (2019 case)", url: "https://krebsonsecurity.com/2019/05/legal-threats-make-powerful-phishing-lures/" },
    ],
    stages: [
      {
        id: "sec1",
        kind: "practice",
        title: "Think about threats before tools",
        lesson:
          "Security starts with two questions: what are you protecting, and who is likely to bother it? UK police note that many domestic burglaries are committed by opportunists who look for homes with little or no obvious security. Visible protection mainly discourages that opportunist; a determined attacker plans around any single barrier. The LockPickingLawyer's videos make the same point from the other side: even an expensive consumer lock can be opened in seconds by someone skilled, so a lock buys time and discourages rather than guarantees. That is why protection works in layers, and why no one product makes you safe.",
        practice:
          "Pick one thing you care about, at home or online. Write down what could realistically go wrong and who would bother, then list the layers of protection that already exist around it.",
      },
      {
        id: "sec2",
        kind: "practice",
        title: "Layer protection at home",
        lesson:
          "Police advice starts with basics that cost little: lock doors and windows every time you leave, double-lock the door, keep valuables and keys out of sight and away from the letterbox, light the entrances, and avoid giving anyone cover, such as high front hedges to hide behind. An exit routine makes this automatic. Cameras and alarms can help, but police stress that CCTV is no substitute for secure doors and windows.",
        practice:
          "Walk around your home once as if you were a stranger: what looks easy or inviting? Fix one small thing today, such as a lock you usually skip or a valuable visible from outside.",
      },
      {
        id: "sec3",
        kind: "practice",
        title: "Use strong, unique passwords",
        lesson:
          "CISA lists four core steps for everyone, and two of them are strong passwords and a password manager. A unique password per account means one leak does not open everything, and a password manager makes unique passwords practical to live with.",
        practice:
          "List your three most important accounts, such as email and banking. Check that each has its own strong password, and change any that are reused.",
      },
      {
        id: "sec4",
        kind: "practice",
        title: "Turn on multi-factor authentication",
        lesson:
          "Multi-factor authentication asks for a second proof when you log in: something you know, something you have, or something you are, as the US FTC explains it. CISA includes it in its four core steps because a stolen password alone is then no longer enough to get in.",
        practice:
          "Turn on multi-factor authentication for your main email account today, since email resets every other password. Then add it to one money-related account.",
      },
      {
        id: "sec5",
        kind: "practice",
        title: "Spot phishing before it hooks you",
        lesson:
          "The FTC describes the pattern: an unexpected message that looks like a company you know, tells a story such as a suspicious login, a payment problem or a refund, and pushes you to click a link or share information. Real companies do not email or text you a link to update your payment details. Check by contacting the company through a number or website you already know is real, never the one in the message.",
        practice:
          "Open your inbox or messages and find one message that asks you to click or confirm something. Check it against these signs before deciding whether it is real.",
      },
      {
        id: "sec6",
        kind: "practice",
        title: "Pause when a message pressures you",
        lesson:
          "Pressure is the tell. CISA's signs of phishing start with urgent or emotionally appealing language and threats of dire consequences, and Krebs on Security documented a real campaign where fake lawsuits were the bait that made people open booby-trapped files. Fraud works the same way: a family emergency, a prize, a police or bank call that demands action now. The defense is a pause, then verification through a separate route you already trust: the number on the back of your card or the official website, never the contact details in the message. If you already clicked or paid, speed matters more than embarrassment: call your bank's official line, change the affected passwords, and report it.",
        practice:
          "Write your own pause rule, one sentence you will follow when any message demands urgent action or payment. Then save the official fraud contact for your bank, taken from its own website or your card.",
      },
      {
        id: "sec7",
        kind: "practice",
        title: "Update, and know who to call",
        lesson:
          "CISA's fourth core step is updating software, because updates close the holes attackers use. Plan the bad day before it happens as well: know your bank's official fraud contact, your local emergency number, and where to report. If you suspect a scammer has your details, act quickly through those official channels.",
        practice:
          "Turn on automatic updates on your phone, and save your bank's official contact details taken from its own website or the back of your card.",
      },
      {
        id: "sec9",
        kind: "practice",
        title: "Prepare for a lost wallet",
        lesson:
          "A lost wallet is two emergencies at different speeds. Money moves fast: a card can be misused within minutes, so use the issuer's official lost-card route promptly; availability and process vary by issuer, and cards and accounts come first. Documents move slowly: each one is replaced through its own issuing authority, and the rules vary by document and country. Three different actions are easy to confuse: reporting the loss, blocking what can be blocked, and replacing what can be reissued. Blocking exists for payment cards and accounts; do not assume an identity document can be cancelled the same way - check with the issuing authority, and expect to report the loss, request a replacement and watch for misuse. The US government's IdentityTheft.gov turns misuse into a step-by-step recovery plan, and USA.gov's replacement table shows how each document has its own route. The calm version of all of this is prepared today: a private inventory of what you carry, each item's issuer, and each issuer's official contact taken from its own website or app. Keep that list somewhere private, and never put card numbers or ID photos into sanggup.",
        practice:
          "Draft your inventory with three fictional entries, one line each: item, issuer, official contact, first action if lost. Then open one real issuer's official website, find its lost-card instructions, and note where they live. For a fictional identity card, write which authority issued it and where its replacement instructions are, without assuming the document can be blocked like a payment card.",
      },
      {
        id: "sec8",
        kind: "milestone",
        title: "Milestone: review your security with someone you trust",
        lesson:
          "A second pair of eyes catches what you have stopped noticing. Walk through your layers with someone you trust: the home entry routine, passwords, multi-factor authentication, and what you would do first if an account were breached.",
        milestone:
          "Do the review together and improve one weak layer you find. The other person signs off in the app. This records that a review happened; it is not a security audit.",
      },
    ],
  },
  {
    id: "network", short: "Network", icon: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19a6 6 0 0 1 12 0 M15 15a5 5 0 0 1 6 4"/>',
    title: "Network and community",
    tagline: "Build and keep personal and professional relationships",
    status: "prototype",
    note:
      "Relationship skills you practice yourself, with real people, at your own pace. sanggup does not contact anyone for you, does not automate outreach and does not store your contacts. Be honest about who you are and what you want. The community stages do not run your community, message members, organize events or negotiate with sponsors for you; communities are real people, and growth, conflict and burnout need judgment, not scripts.",
    sources: [
      { label: "Stanford GSB: Eight tips for building, maintaining and leveraging professional relationships", url: "https://www.gsb.stanford.edu/insights/eight-tips-building-maintaining-leveraging-your-professional-relationships" },
      { label: "80,000 Hours: How to network, weak ties and a giving mindset", url: "https://80000hours.org/2015/03/how-to-network/" },
      { label: "Kellogg Insight: How to keep your network warm", url: "https://insight.kellogg.northwestern.edu/article/how-to-keep-your-network-warm" },
      { label: "ASU Thunderbird: Networking 101", url: "https://thunderbird.asu.edu/thought-leadership/insights/networking-101" },
      { label: "Open Source Guides: Building Welcoming Communities", url: "https://opensource.guide/building-community/" },
      { label: "Open Source Guides: Leadership and Governance", url: "https://opensource.guide/leadership-and-governance/" },
      { label: "The Community Canvas", url: "https://community-canvas.org/" },
      { label: "Responsibility assignment matrix (RACI), overview", url: "https://en.wikipedia.org/wiki/Responsibility_assignment_matrix" },
      { label: "Kurt von Hammerstein-Equord and the officer heuristic, overview", url: "https://en.wikipedia.org/wiki/Kurt_von_Hammerstein-Equord" },
      { label: "NSW Government: Finding sponsors for your event", url: "https://www.nsw.gov.au/departments-and-agencies/premiers-department/community-engagement/event-starter-guide/sponsorship" },
      { label: "Wikipedia: Mentorship", url: "https://en.wikipedia.org/wiki/Mentorship" },      { label: "Wikipedia: Fiscal sponsorship", url: "https://en.wikipedia.org/wiki/Fiscal_sponsorship" },
      { label: "Liang et al. (Stanford): GPT detectors are biased against non-native English writers", url: "https://arxiv.org/abs/2304.02819" },

      { label: "City of Orlando: Cultivating New Neighborhood Leadership", url: "https://www.orlando.gov/Our-Government/Get-Involved/iLead-Neighborhood-Leadership-Training/iLead-Guides/Cultivating-New-Neighborhood-Leadership" },
      { label: "Community Tool Box (University of Kansas): Increasing Participation and Membership", url: "https://ctb.ku.edu/en/increasing-participation-and-membership" },
      { label: "National Council of Nonprofits: Succession Planning for Nonprofits", url: "https://www.councilofnonprofits.org/running-nonprofit/governance-leadership/succession-planning-nonprofits-managing-leadership" },
      { label: "TidyHQ: Succession Planning Guide for Clubs and Associations", url: "https://tidyhq.com/guides/succession-planning-for-community-organisations" },
      { label: "Ditjen AHU (Kemenkumham): Perkumpulan", url: "https://ahu.go.id/perkumpulan" },
      { label: "Klinik Hukumonline: Apa Perbedaan Perkumpulan dan Yayasan?", url: "https://www.hukumonline.com/klinik/a/apa-perbedaan-perkumpulan-dan-yayasan-cl2755/" },
      { label: "Wikipedia: Farley file", url: "https://en.wikipedia.org/wiki/Farley_file" },
      { label: "Wikipedia: Rolodex", url: "https://en.wikipedia.org/wiki/Rolodex" },
      { label: "Monica: the open-source personal CRM", url: "https://www.monicahq.com" },
      { label: "Mesh (formerly Clay): personal CRM", url: "https://me.sh/" },
      { label: "Mesh team: Clay is now Mesh", url: "https://library.me.sh/2026/03/25/clay-is-now-mesh/" },
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
        tools: [
          { label: "kapan", url: "https://vanipy.com/kapan/", note: "web: developer events in Jakarta and Jogja, a way to find real rooms to practice in" },
        ],
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
      {
        id: "cb1",
        kind: "practice",
        title: "Gather the interest",
        lesson:
          "A community starts from a shared interest, not from a platform or a chat group. The Community Canvas begins with identity: who the community is for and why they would gather. Find where those people already are before creating anything new.",
        practice:
          "Name the interest in one sentence. List 5 to 10 real people who care about it and one place they already gather, online or offline. Talk to three of them about what they would want from a community.",
      },
      {
        id: "cb2",
        kind: "practice",
        title: "Run a first small event",
        lesson:
          "An event is a promise: a time, a place and a reason to come. Small and regular beats big and rare. A first meetup with three people who talk to each other is a success; a big event where nobody talks is not.",
        practice:
          "Organize one small gathering, even three people: pick the date, place and a simple format, invite people personally, and afterwards note who came, what worked and what to repeat.",
      },
      {
        id: "cb3",
        kind: "practice",
        title: "Do a project together",
        lesson:
          "Communities deepen by making things together, not only by meeting. A shared project with a clear finish line gives members a reason to collaborate and something visible to point at. When several people share the work, name the roles explicitly; a common tool is RACI: who is Responsible for doing the work, who is Accountable for the outcome (exactly one person), who must be Consulted, and who is only Informed. Shared skill: RACI is also practiced in the Career path and in <a href='#projects/bu4'>Projects and business</a>.",
        practice:
          "Run one small shared project with a clear end: a guide, a cleanup, a group repo, a showcase. Name the Responsible and Accountable person for each part, and finish it.",
      },
      {
        id: "cb4",
        kind: "practice",
        title: "Activate and engage members",
        lesson:
          "Joining is not participating. New members need a first action within days: a welcome, an introduction round, one small job. Keeping members engaged is rhythm plus roles: a predictable schedule of things worth showing up for, and small responsibilities that make members feel the community is partly theirs.",
        practice:
          "Write your welcome for a new member: the first thing they see and the first small thing you ask them to do. Then give one quiet member a small real role and check back on them.",
      },
      {
        id: "cb5",
        kind: "practice",
        title: "Revitalize and delegate",
        lesson:
          "Energy fades when everything depends on one organizer. Open Source Guides' leadership advice is to share ownership early: give people real responsibility with real authority, and write down how things run so knowledge is not trapped in your head. Teams call such a written how-we-run-things note a standard operating procedure, an SOP; it is what lets a new organizer repeat the event without you. Shared skill: writing steps down for a learner, an SOP in small, is also practiced in <a href='#teaching/tm2'>Teaching and mentoring</a> and Projects and business.",
        practice:
          "Identify two members who could lead something. Hand each of them one real responsibility, with the authority to decide, and write a short how-we-run-things note they can use without asking you.",
      },
      {
        id: "cb6",
        kind: "practice",
        title: "Find sponsors and partners",
        lesson:
          "Sponsors support events that reach people they care about, so the search starts with what you can offer, not with what you need. Partners are different from sponsors: partners contribute work, venues or speakers; sponsors contribute money or goods. Match each candidate to your members: a sponsor whose customers are your members has a reason to say yes. Shared skill: offering ad and sponsor slots in your own work is also practiced in <a href='#branding/mk9'>Branding and creator</a>.",
        practice:
          "List five local businesses or organizations whose audience overlaps yours. For each, write one thing you could offer: a logo on materials, a talk slot, a workshop, a product trial or a booth.",
      },
      {
        id: "cb7",
        kind: "practice",
        title: "Negotiate and work together",
        lesson:
          "Sponsorship is an exchange, so negotiate the exchange, not just the money: what they give, what you deliver, by when. Shared skill: negotiation preparation, including knowing your walk-away alternative, has its home in <a href='#negotiation/ng1'>the Negotiation path</a>. Put the agreement in writing, even one page, and name a contact on both sides. Deliver what you promised before asking for more; reliability is what renews a sponsor next year.",
        practice:
          "Draft a one-page sponsorship or partnership offer for one candidate from cb6: what you ask for, what they get in return, the dates, and a named contact on both sides.",
      },
      {
        id: "cb8",
        kind: "practice",
        title: "Benefits for each group, with proof",
        lesson:
          "A community runs on exchanged benefits: organizers get experience and reputation, members get learning and belonging, sponsors get reach and goodwill, partners get shared outcomes. Prove benefits with evidence, not adjectives: attendance numbers, photos, quotes, member growth, and exactly what the sponsorship paid for. Organizations often formalize this: an OKR pairs an Objective with a few measurable Key Results, and a KPI is a number you watch over time. Pick one number per group that would show the benefit is real. Shared skill: KPIs and OKRs are also practiced in the Career path and in <a href='#projects/bu2'>Projects and business</a>.",
        practice:
          "Write a one-paragraph benefit report of your last event for each group: organizers, members, sponsors and partners. Give each paragraph one number or quote as evidence, and send the sponsor paragraph to your sponsor.",
      },
      {
        id: "nt14",
        kind: "practice",
        title: "Reach out to new people on purpose",
        lesson:
          "Reaching out to new people works the same way as the earlier stages here: lead with genuine interest, give before you ask, and keep it small. What is different is the first contact: name why you picked them in one sentence, make one specific small ask, and make it easy to say no. Approaching senior people is the same skill with more preparation: they are busy, so show you did your homework and respect their time. Mentors do not have to be senior, but the good ones have experience you can learn from, and the relationship grows through communication over time, not one ask.",
        practice:
          "Pick one imaginary person, either new to you or senior in your field. Write the first message in three sentences: why them, one specific small ask, and an easy out. Do not send anything.",
      },
      {
        id: "nt15",
        kind: "practice",
        title: "Know what fiscal sponsorship is",
        lesson:
          "A community project that wants to receive grants or donations sometimes lacks its own legal entity. Fiscal sponsorship is a fee-based arrangement where an established nonprofit lends its legal and tax status to a project that fits its mission, often with administrative help like payroll and bookkeeping. The trade-offs are real: the sponsor keeps legal control of the project and charges a fee, and both sides can face liability if the arrangement is just a money conduit. The concept comes from the US nonprofit system; Indonesia has its own legal forms and tax rules for community organizations, so the local details need local advice.",
        practice:
          "Take a fictional running club that wants a 50,000,000 rupiah grant. Write two plans: one where the club registers its own entity, one where it works under a fiscal sponsor. List what the club gives up and gains in each, and three questions to ask a sponsor before signing.",
      },
      {
        id: "nt16",
        kind: "practice",
        title: "Talk about AI use with care",
        lesson:
          "Sometimes you suspect a post, application or message was AI-generated, or a community fills up with repetitive AI replies. Handle it with care. Detection is unreliable: research from Stanford found GPT detectors flag non-native English writing as AI-generated far too often, so a style hunch or a detector score is a clue, never evidence, and accusing someone on that basis can harm an innocent person. Better moves: judge the work on quality, ask questions only the author could answer, raise concerns privately and specifically, and set clear community rules about AI use so moderation is about consent and shared expectations, not about catching people.",
        practice:
          "A fictional community group gets ten near-identical generic comments from one account. Write the private, specific message a moderator could send that names the behavior and asks for a change without accusing or attacking the person, plus one community rule that would make the boundary clear for everyone.",
      },
      {
        id: "nt17",
        kind: "practice",
        title: "Notice when a community stops renewing",
        lesson:
          "A community fades quietly: the same longtime members hold every role for years, new and younger people visit once and drift away, and activity slowly shrinks to meetups with no shared project. Guides for neighborhood organizations call out exactly this trap and treat rotation of roles as healthy. Renewal is about the circulation of people, roles and knowledge, not about anyone's age: longtime members carry the community's memory, and the goal is to add new energy alongside them, not push anyone out.",
        practice:
          "For a community you belong to, write down: how many different people held a role in the last two years, how many first-time visitors came back, and what the group does together besides meet.",
      },
      {
        id: "nt18",
        kind: "practice",
        title: "Welcome new people onto a path",
        lesson:
          "The Community Tool Box advises groups to make special efforts to welcome new members and to remove the barriers that keep people from participating. A newcomer stays when three things happen quickly: someone greets them by name, they get a small real task they can finish, and they can see a path from attendee to contributor to organizer.",
        practice:
          "Design the first month for a fictional new member of a community you know: who greets them, which small task they get in week one, and how they would see the next step.",
      },
      {
        id: "nt19",
        kind: "practice",
        title: "Pass on knowledge and responsibility",
        lesson:
          "Longtime members hold knowledge that exists nowhere in writing. Nonprofit succession guides recommend building a deeper bench before you need it, cross-training, and treating handover as a scheduled, repeatable event: the new person shadows the outgoing one for one full cycle of the role, and meeting minutes keep the reasons behind past decisions alive after people move on.",
        practice:
          "Pick one role in a group you know. Write what a shadow would need to see in one full cycle of that role, and name one person who could shadow it next.",
      },
      {
        id: "nt20",
        kind: "practice",
        title: "Keep the community's paperwork alive",
        lesson:
          "Good paperwork is a habit, not a legal project: minutes that record what was decided, and simple money records a treasurer reports regularly, keep a group trustworthy and make handovers possible. In Indonesia, a community can exist informally; Kemenkumham's Ditjen AHU explains that a perkumpulan needs ministerial ratification as a badan hukum to perform civil legal acts as an entity. Whether your group needs that, and what it would change for taxes, bank accounts or contracts, is exactly what to ask a notaris or accountant, because the answer depends on your situation.",
        practice:
          "Write the questions your community would bring to a notaris or accountant: for example whether to register as a badan hukum, what records to keep, and how money should be held and reported.",
      },
      {
        id: "nt21",
        kind: "practice",
        title: "Keep a memory file for people",
        lesson:
          "Staying thoughtful is a system, not a memory feat. Politicians have long kept a Farley file, named after Franklin Roosevelt's campaign manager James Farley, who noted the family details and past conversations of everyone they met so Roosevelt could greet them personally next time; salespeople relied on the Rolodex, the rotating card file that became shorthand for a person's contacts. The modern version is a personal CRM: apps like Mesh (formerly Clay) do it commercially, while Monica is open source and can be self-hosted. A notebook or spreadsheet works too. Two rules matter more than the tool: keep only the notes you actually use, and remember these are real people's details, so store them as privately and respectfully as you would want your own stored.",
        practice:
          "Pick five people you care about. For each, write one line: what is happening in their life right now, and one follow-up you owe. Then act on the oldest follow-up this week.",
      },
      {
        id: "cb9",
        kind: "milestone",
        title: "Milestone: the community runs without you",
        lesson:
          "The real test of a community is whether it survives the founder stepping back. Succession is designed, not hoped for: new organizers need standing, documentation and the experience of leading while you are still around to help. A much-retold heuristic, commonly attributed to German general Kurt von Hammerstein-Equord though its exact origin is unverified, sorts officers by bright or dull, lazy or diligent, and calls the dull-and-diligent combination dangerous. Treat it as folklore, not a rule: sorting people into smart and stupid is not how you choose leaders. The kernel worth keeping is to match responsibility to a person's judgment and energy, and not to mistake busyness for contribution.",
        milestone:
          "Step back from one full cycle: the community plans, runs and wraps an event or project without you organizing it. The new organizer confirms how it went and signs off.",
      },
    ],
  },
  {
    id: "money", short: "Money", icon: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18 M16 14h2"/>',
    title: "Money and FIRE",
    tagline: "Budgeting, basic accounting and money habits, Indonesia focus",
    status: "prototype",
    note:
      "General education using made-up example numbers in rupiah. It is not personal financial, tax or investment advice, does not connect to any of your accounts and does not recommend products or providers. Rules and deadlines change; check the official source and a qualified adviser for your situation. The FIRE stages are education about an idea, not a plan for you: outcomes are uncertain, past returns do not guarantee future ones, and no withdrawal rate is safe for everyone. They do not recommend investments or providers; for real decisions, talk to a licensed financial planner, and check any adviser is licensed with OJK. AI chatbots are not financial advisers: expect confident errors and verify everything against official sources.",
    sources: [
      { label: "OJK Sikapi Uangmu: financial literacy for the public (Indonesia)", url: "https://sikapiuangmu.ojk.go.id/FrontEnd/CMS/Article/40786" },
      { label: "LPS FAQ: deposit guarantee (Indonesia)", url: "https://lps.go.id/faq/" },
      { label: "DJP: Panduan SPT Tahunan orang pribadi karyawan (Indonesia tax)", url: "https://pajak.go.id/sites/default/files/2026-09/Panduan%20Lengkap%20-%20SPT%20Tahunan%20Orang%20Pribadi%20Karyawan%20v24082026.pdf" },
      { label: "OpenStax: Basic accounting procedures", url: "https://openstax.org/books/introduction-business/pages/14-3-basic-accounting-procedures" },
      { label: "Financial Planning Association: Updating the Trinity study", url: "https://www.financialplanningassociation.org/article/journal/AUG15-sustainable-retirement-spending-low-interest-rates-updating-trinity-study" },
      { label: "Vanguard: FIRE investing and the 4% rule", url: "https://investor.vanguard.com/investor-resources-education/retirement/early-retirement" },
      { label: "Saxo: FIRE, key considerations and risks", url: "https://www.home.saxo/learn/guides/trading-strategies/financial-independence-retire-early-fire-a-guide" },
      { label: "Investor.gov: Early retirement seminars and scams", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/early" },
      { label: "Investor.gov: Compound interest", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/compound-interest" },
    ],
    stages: [
      {
        id: "b1",
        kind: "practice",
        title: "See where money goes",
        lesson:
          "A budget starts with facts. Example: someone earns Rp 8,000,000 a month and spends Rp 7,200,000, but could only name Rp 5,000,000 of it. The missing Rp 2,200,000 is where the budget starts. Tracking is not judging; it is collecting data. Shared skill: freeing savings to start a venture is bootstrapping, in <a href='#projects/bs1'>Projects and business</a>.",
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
      {
        id: "b8",
        kind: "practice",
        title: "Learn what investing is",
        lesson:
          "Investing means putting money into something, like stocks or bonds, hoping it grows, with the risk that it can also shrink. Two ideas carry most of the weight. Compound interest is interest paid on the principal and on the interest already earned, so growth accelerates over years; starting early matters more than starting big. Diversification means spreading money across different investments so one failure cannot sink the whole amount. Risk and return move together: anything promising high returns with no risk is a red flag, and in Indonesia you can check whether a financial product or adviser is licensed with OJK before trusting it.",
        practice:
          "Take a fictional 10,000,000 rupiah. On paper, split it across three imaginary investments with different risk levels and write why you chose the split. Then compute what 10,000,000 becomes in 20 years at a steady fictional 6 percent a year, compounded yearly, and note how much of the final number is interest on interest.",
      },
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
    title: "Writing and journalism",
    tagline: "From idea to finished first draft",
    status: "prototype",
    note:
      "Original exercises for your own writing. sanggup does not write your book for you. Word counts below are examples, not rules; choose a pace you can keep. The journalism stages are general education drawn from published ethics codes and reporting guidance; sanggup does not verify facts, contact sources or review your stories, and publishing carries real legal and ethical duties that vary by country, including defamation and privacy law.",
    sources: [
      { label: "Author Revolution: How to write a first draft in six weeks", url: "https://www.authorrevolution.org/blog/how-to-write-a-first-draft-in-six-weeks" },
      { label: "Writer by Nature: How to write a book, steps and outline", url: "https://writerbynature.com/how-to-write-a-book/" },
      { label: "Literary Hub: David Yoon on creative endurance", url: "https://lithub.com/david-yoon-on-how-to-cultivate-creative-endurance/" },
      { label: "Writers Club of America: Steps for drafting your first version", url: "https://writersclubofamerica.com/2025/08/11/steps-for-drafting-your-first-version/" },
      { label: "Society of Professional Journalists: Code of Ethics", url: "https://www.spj.org/spj-code-of-ethics/" },
      { label: "Reuters: Journalistic Standards handbook", url: "https://handbook.reuters.com/" },
      { label: "UNESCO: Journalism, Fake News and Disinformation handbook", url: "https://www.unesco.org/en/articles/journalism-fake-news-disinformation" },      { label: "Chatham House: the Chatham House Rule", url: "https://www.chathamhouse.org/about-us/chatham-house-rule" },
      { label: "University of Wisconsin Writing Center: Using interview data", url: "https://writing.wisc.edu/handbook/academicwriting/interviewdata/" },

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
      {
        id: "jr1",
        kind: "practice",
        title: "Truth and verification first",
        lesson:
          "The SPJ code opens with seeking truth and reporting it: accuracy over speed, verification over assumption. UNESCO's handbook treats disinformation as the core challenge of the craft. Journalism begins when you check something others only repeat.",
        practice:
          "Take one claim circulating in your feeds today. Trace it to its original source. Write down whether the original actually says what the claim says.",
      },
      {
        id: "jr2",
        kind: "practice",
        title: "Independence and minimizing harm",
        lesson:
          "Journalists act independently: first loyalty to the public, conflicts of interest disclosed. They also minimize harm: reporting affects real people, so the public's need to know is weighed against the impact on sources and subjects, especially private and vulnerable people.",
        practice:
          "Write your own conflicts list: employers, communities, sponsors, friendships that could bias what you cover. Then take one story idea and note who could be harmed by it and one choice that reduces the harm without hiding the truth.",
      },
      {
        id: "jr3",
        kind: "practice",
        title: "Gather from people and documents",
        lesson:
          "Reporting starts from a question, not a conclusion, and works from primary material: interviews, documents, data, your own observation. Reuters' standards stress accurate quotes and sourcing. One source is a claim; two independent sources start to be a fact.",
        practice:
          "Pick a real question near you. List two people you could interview and two documents or data sources you could read. Do one interview or read one primary document, take dated notes, and verify three facts against independent sources.",
      },
      {
        id: "jr4",
        kind: "practice",
        title: "Structure the report and stand behind it",
        lesson:
          "A report is structured for the reader: most important facts first, attribution for every claim, context for why it matters. Accountability separates journalism from content: show your evidence where you can and correct errors quickly and visibly.",
        practice:
          "Write your own corrections policy in three sentences: how people can report an error to you, what you will do, and how fast.",
      },
      {
        id: "w6",
        kind: "practice",
        title: "Use AI as a drafter, not the author",
        lesson:
          "A chatbot can produce a draft in seconds, but the draft is a starting point, not a finished piece. It can state wrong facts confidently, and its default voice is generic. Check every factual claim against a source you trust, and rewrite until the piece sounds like you. What you publish has your name on it, so you own every sentence.",
        practice:
          "A fictional AI draft says: 'The Bandung Book Fair drew 80,000 visitors in 2024 and is the oldest book fair in Asia.' List the claims you would need to check and where you would check them. Then rewrite the sentence as your own opening, keeping only what you could verify.",
      },
      {
        id: "w7",
        kind: "practice",
        title: "Get a piece reviewed, then revise",
        lesson:
          "Writing improves through review: share a specific piece, ask a reader what confused them and what they remember, then revise and share again. A chatbot can also critique a draft and is always available, but it reads differently from your real audience, so use its notes as a complement, not a verdict. The milestone sign-off in this path still comes from a person.",
        practice:
          "Pick a short piece you wrote, real or fictional. Ask one person to read it and answer two questions: where did you stop understanding, and what do you remember? Optionally compare with a chatbot's critique. Revise one section based on the feedback.",
      },
      {
        id: "w8",
        kind: "practice",
        title: "Know the Chatham House Rule",
        lesson:
          "Some meetings run under the Chatham House Rule: participants are free to use the information received, but neither the identity nor the affiliation of the speakers may be revealed. It exists so people can speak openly. If you write about or share what was discussed, you can use the substance but never name or hint at who said it. When you organize a discussion, say up front which rule applies; when you attend one, ask if it is unclear. Shared skill: the same respect for a room applies in the <a href='#network/cb2'>Network and community</a> path.",
        practice:
          "A fictional meetup under the Chatham House Rule discussed salaries, and one speaker admitted their company missed payroll twice. Write two shareable sentences about the discussion that use the information without identifying anyone, then one sentence that would break the rule, marked as the violation.",
      },
      {
        id: "w9",
        kind: "practice",
        title: "Interview people for a book",
        lesson:
          "For nonfiction, interviews bring firsthand stories and perspectives that desk research cannot. Prepare open questions about real experiences, including what went wrong, not only general advice. Agree up front on recording, attribution and what may be published; an interview is not automatically off the record or under any rule you did not agree on. Talk to people with different experiences of the topic, so the book tests its assumptions instead of only illustrating them, and fact-check claims from interviews like any other source. Shared skill: the consent habit is the same one as in the survey stages of <a href='#surveying/sv1'>the Surveying people path</a>.",
        practice:
          "Plan a fictional interview for a book chapter: five open questions about one person's real experience of the topic, including one about a failure. Then write the consent sentence you would actually say before pressing record, covering recording, attribution and what may be published.",
      },
      {
        id: "jr5",
        kind: "milestone",
        title: "Milestone: file one report",
        lesson:
          "A finished piece carries verified facts, named sources and a structure a reader can follow. Short and accurate beats long and impressive.",
        milestone:
          "Write and share one short report, 300 to 500 words, answering a real question, with sources named. An editor, mentor or informed reader checks the facts and signs off.",
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
      {
        id: "w_5",
        kind: "milestone",
        title: "Milestone: take a real beginner lesson",
        lesson:
          "The CDC says formal swimming lessons can reduce drowning risk, while stressing they are one of several layers of protection, not a guarantee. A qualified instructor can correct your breathing, floating and kicking in the water in a way no text can.",
        milestone:
          "Book and complete a beginner swimming session with a qualified instructor at a supervised pool. The instructor confirms you attended and practiced, and signs off. This records attendance, not swimming ability or safety in water.",
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
          "According to Korlantas Polri's SIM guide, the minimum age is 17 for SIM A (private car) and SIM C (motorbike under 250cc), 18 for SIM CI and 19 for SIM CII. A new SIM requires your KTP, a physical health certificate, a psychological test, and, under the guide's current rules, active BPJS Kesehatan membership. For a new SIM you go to a Satpas in person for photo and fingerprints and the exams; the guide describes online steps for renewal. The guide lists the official fee as Rp 120,000 for SIM A and Rp 100,000 for SIM C, excluding health and psychology tests. Check the guide for current rules.",
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
      {
        id: "v_5",
        kind: "milestone",
        title: "Milestone: supervised practice",
        lesson:
          "Korlantas describes practical exam elements such as braking and balance, the U-turn, the S-track and emergency braking, and offers a coaching clinic at Satpas. Supervised practice with a licensed instructor is how vehicle control is actually built.",
        milestone:
          "Complete a supervised driving practice session with a licensed instructor or driving school. The instructor confirms what you practiced and signs off. This records practice, not driving competence or licence readiness.",
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
        id: "l_6",
        kind: "practice",
        title: "Rehearse with AI, then talk to people",
        lesson:
          "A chatbot is a patient rehearsal partner: it never gets tired of your third attempt at a dialogue. Use it to practice phrasing, then check its translations against a dictionary or a trusted source, because fluent-sounding output can still be subtly wrong. The goal is still conversation with real people; AI rehearsal prepares you for it, it does not replace it.",
        practice:
          "Write a six-line dialogue in a language you are learning, real or imagined, for ordering at a small warung. Rehearse it aloud three times. Then pick two sentences and check their wording against a dictionary or trusted learning source, noting anything you would say differently.",
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
        tools: [
          { label: "nada", url: "https://vanipy.com/nada/", note: "web: turns a small JSON recipe into a .mid you can practice along with" },
          { label: "denting", url: "https://vanipy.com/denting/", note: "web, draft: direct a piece with everyday words, export a real .mid" },
          { label: "tengok", url: "https://vanipy.com/tengok/", note: "web version: opens .mid and other files in the browser; files stay on this device" },
        ],
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
        id: "u_6",
        kind: "practice",
        title: "Play for someone, then play it again",
        lesson:
          "Music grows through being heard: play a specific piece for one person, ask what came across and what to fix first, practice that, and play it again. A recording of yourself is the next best reviewer when nobody is around. Listening apps and AI tools can comment on a recording's notes and timing, but they cannot judge how the music feels in the room; a person's ear still closes the loop.",
        practice:
          "Play one short piece for a person or record yourself playing it. Note two specific comments from the listener or the recording, pick one thing to fix, and play the piece again with that fix in mind.",
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
      {
        id: "a_5",
        kind: "practice",
        title: "Reuse the result and the method",
        lesson:
          "Pólya's fourth phase goes beyond checking the answer: he urges reflecting on what worked, what did not, and other problems where the same solution or method might be useful. Methods transfer to new problems; answers usually do not.",
        practice:
          "Take a problem you solved earlier and find one new problem where the same method applies. Solve it, then write down what transferred and what you had to change.",
      },
      {
        id: "a_7",
        kind: "practice",
        title: "Check the solver's steps, not just the answer",
        lesson:
          "Solver apps and chatbots can show worked steps for a math problem, and the steps can be wrong even when the final answer looks right. Use them to check your own solution or to see a method you missed, not to skip the solving. If you cannot explain each step, you have the answer but not the skill.",
        practice:
          "A fictional solver says: '2x + 6 = 20, so 2x = 26, so x = 13.' Find the wrong step, correct it, and solve the equation yourself. Then write one line about how you would check the corrected answer without any tool.",
      },
      {
        id: "a_6",
        kind: "milestone",
        title: "Milestone: a mixed set, reviewed",
        lesson:
          "Practicing one problem type at a time hides whether you can choose a strategy yourself. A mixed set forces Pólya's first two phases, understanding the problem and making a plan, to do real work.",
        milestone:
          "Solve a mixed set of problems across different topics, with no hint about which method to use. Review every error with a teacher or mentor, who signs off on the review.",
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
        id: "x_6",
        kind: "practice",
        title: "Analyze with engines after the game",
        lesson:
          "Chess engines are the standard tool for post-game analysis: after a game, they show where the evaluation turned and what was missed. Using an engine during a game, online or over the board, is cheating and is treated that way by platforms and federations. The engine's job is to teach you after the fact, not to play for you.",
        practice:
          "Take one of your recent games, or a fictional short game, and pick the move you were least sure about. First write down your own analysis of the alternatives, then list two questions you would ask an engine about that position, such as which candidate move it prefers and why the evaluation changed.",
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
  {
    id: "branding", short: "Branding", icon: '<path d="m3 11 18-5v12L3 14v-3z M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    title: "Branding and creator",
    tagline: "Decide what you want to be known for, then show it",
    status: "prototype",
    note:
      "sanggup does not write your profiles, post for you or manage your reputation. A personal brand is what others believe about you when you are not in the room; these exercises shape only the honest input. Nothing here asks you to exaggerate, and no exercise promises jobs, followers or income. The creator stages do not create content, run your channels or promise an audience or income; growth is slow and uneven, and platform rules and algorithms change without notice.",
    sources: [
      { label: "Harvard Business Review: A New Approach to Building Your Personal Brand", url: "https://hbr.org/2023/05/a-new-approach-to-building-your-personal-brand" },
      { label: "Harvard Business Review: How to Define, Develop, and Communicate Your Personal Brand", url: "https://hbr.org/2023/09/how-to-define-develop-and-communicate-your-personal-brand" },
      { label: "WVU Eberly career center: Personal Branding", url: "https://eberly.wvu.edu/career-center-new/resources/personal-branding" },
      { label: "Indeed: What Is Personal Branding?", url: "https://www.indeed.com/career-advice/career-development/what-is-personal-branding" },
      { label: "Situation, task, action, result (STAR), overview", url: "https://en.wikipedia.org/wiki/Situation%2C_task%2C_action%2C_result" },
      { label: "Substack: How to start a newsletter and blog", url: "https://on.substack.com/p/start-a-substack-newsletter" },
      { label: "YouTube for Creators: Start and manage your channel", url: "https://www.youtube.com/creators/get-started/" },
      { label: "Medium Help Center: Write and publish a story", url: "https://help.medium.com/hc/en-us/articles/225168028-Write-and-publish-a-story" },
      { label: "Wikipedia: Market segmentation (STP)", url: "https://en.wikipedia.org/wiki/Market_segmentation" },
      { label: "Wikipedia: Positioning (marketing)", url: "https://en.wikipedia.org/wiki/Positioning_(marketing)" },
      { label: "Wikipedia: Marketing mix", url: "https://en.wikipedia.org/wiki/Marketing_mix" },
      { label: "Google Search Central: Search Essentials", url: "https://developers.google.com/search/docs/essentials" },
      { label: "Wikipedia: Search engine marketing", url: "https://en.wikipedia.org/wiki/Search_engine_marketing" },
      { label: "US FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
      { label: "Wikipedia: Trade show", url: "https://en.wikipedia.org/wiki/Trade_fair" },
      { label: "Wikipedia: Advertising", url: "https://en.wikipedia.org/wiki/Advertising" },      { label: "Wikipedia: Marketing for Deadpool (film)", url: "https://en.wikipedia.org/wiki/Marketing_for_Deadpool_(film)" },
      { label: "Wikipedia: Among Us", url: "https://en.wikipedia.org/wiki/Among_Us" },
      { label: "CNBC: How Among Us became a mega hit thanks to Twitch", url: "https://www.cnbc.com/2020/10/14/how-among-us-became-a-mega-hit-thanks-to-amazon-twitch.html" },

    ],
    stages: [
      {
        id: "br1",
        kind: "practice",
        title: "Choose what you want to be known for",
        lesson:
          "Harvard Business Review's guidance is that a personal brand starts with what you want to be known for, grounded in what you have actually done and can do. Pick an area narrow enough to be believable: 'Android apps' is a brand; 'technology' is too vague to guide anyone.",
        practice:
          "Write one sentence: 'I want to be known for ___ because I have ___.' Under it, list three real proofs: projects, talks or work that support it.",
      },
      {
        id: "br2",
        kind: "practice",
        title: "Audit your current footprint",
        lesson:
          "Your brand already exists: it is what people find when they look you up. Career-center advice, such as West Virginia University's, is to audit that footprint first, before changing anything.",
        practice:
          "In a private or logged-out browser window, search your own name. List the first five results and mark each: supports my sentence, neutral, or works against it.",
      },
      {
        id: "br3",
        kind: "practice",
        title: "Align one profile",
        lesson:
          "HBR describes a brand as something you define, develop and then communicate consistently. Start with the single profile people see first: photo, headline and short bio should all say the same thing as your sentence.",
        practice:
          "Pick one public profile and rewrite its headline and about section so they match your br1 sentence. Remove or fix anything there that contradicts it.",
      },
      {
        id: "br4",
        kind: "practice",
        title: "Show work instead of claiming it",
        lesson:
          "A brand grows through evidence, not adjectives. Publishing real work, small and regular, beats claiming qualities; Indeed's guidance likewise emphasizes demonstrating skills rather than stating them. When you tell the story behind a proof, a common structure is STAR: the Situation, the Task you owned, the Action you took and the Result, ideally with a number. It works anywhere you present achievements, from profiles to interviews. Shared skill: the same STAR structure is also practiced in <a href='#work/ca2'>the Career path</a>, as case studies and for CVs and interviews.",
        practice:
          "Publish one small piece of real work this week: a repo, a demo page, or a short post explaining something you built or learned. Add its link to the profile you aligned.",
      },
      {
        id: "cr1",
        kind: "practice",
        title: "Pick a topic and one main format",
        lesson:
          "Creators grow by being reliably about something. Choose a topic you can sustain for a year and one primary format: writing (a blog, or a newsletter on Substack, Medium or dev.to), video (YouTube or TikTok) or photos (Instagram). One main channel first; repurpose to others later.",
        practice:
          "Write your topic sentence: 'I make ___ for ___.' Pick one primary platform and list ten piece ideas you could actually finish.",
      },
      {
        id: "cr2",
        kind: "practice",
        title: "Set up a home you own",
        lesson:
          "Platforms rent you reach and can change their rules or shut down; a blog or a newsletter list is yours. Substack's own starting guide begins with claiming your home base and a clear promise to readers.",
        practice:
          "Create your base: a blog or newsletter on the platform you picked. Write a short welcome post saying what people will get and how often.",
      },
      {
        id: "cr3",
        kind: "practice",
        title: "Publish on a schedule you can keep",
        lesson:
          "Consistency beats bursts. YouTube's creator guidance emphasizes a sustainable cadence over daily uploads; the same holds for writing. A schedule you can keep for a year beats an intense month followed by silence.",
        practice:
          "Publish one piece per week for four weeks on your platform. Keep a simple log: date, topic and link.",
      },
      {
        id: "cr4",
        kind: "practice",
        title: "Read feedback, ignore vanity",
        lesson:
          "Early numbers are small and noisy. Watch signals that show real attention: replies, watch time, returning readers. Ask your first readers what helped them. Likes alone tell you almost nothing.",
        practice:
          "After your fourth piece, write down the three most useful signals you saw and one change you will test next month.",
      },
      {
        id: "mk1",
        kind: "practice",
        title: "Segment, then choose a target",
        lesson:
          "Marketing guidance describes the STP approach: divide a broad market into meaningful sub-groups, called segments, of people with shared needs, then target the segment you can serve best with a tailored strategy. Trying to reach everyone usually reaches no one in particular. Shared skill: asking people in your target group directly is <a href='#surveying/sv3'>the Surveying people path</a>.",
        practice:
          "Write down two or three segments for something you offer, with the need that defines each. Pick one target and describe one real person in it: their situation, their need and where they spend their attention.",
      },
      {
        id: "mk2",
        kind: "practice",
        title: "Position against the alternative",
        lesson:
          "Positioning is the distinct place your offer occupies in the customer's mind relative to the alternatives they already use. A position can be functional, solving a problem, symbolic, saying something about them, or experiential, feeling a certain way. A clear position is a choice: you give up being for everyone.",
        practice:
          "Write one sentence: for your target, your offer is the category that gives one distinct benefit, unlike the alternative they use now. Show it to two people in your target and note what confused them.",
      },
      {
        id: "mk3",
        kind: "practice",
        title: "Choose channels and one simple message",
        lesson:
          "The marketing mix sorts what you control into product, price, place and promotion. For a personal brand, place and promotion mean choosing the few channels your target actually uses instead of posting everywhere. Shared skill: publishing on a cadence is the creator stages in this path; measuring which channel works, with the numbers that matter, is the KPI stage in <a href='#projects/bu2'>Projects and business</a>.",
        practice:
          "Pick two channels your target already uses. Write one short message for each, in the words your target uses, and say where each reader should go next.",
      },
      {
        id: "mk4",
        kind: "practice",
        title: "Be findable in search (SEO)",
        lesson:
          "Google's own Search Essentials say appearing in search results costs nothing, whatever anyone tells you. Its key practices: create helpful, reliable, people-first content; use the words people actually search for in the title, main heading and link text; and keep links crawlable. Tactics that try to trick rankings can get a page ranked lower or omitted entirely under Google's spam policies.",
        practice:
          "Pick one page of yours. Rewrite its title and main heading using the exact words your target would type into a search box, then click every link on the page to check it works.",
      },
      {
        id: "mk5",
        kind: "practice",
        title: "Paid search ads (SEM), on paper",
        lesson:
          "Search engine marketing means paying for visibility in search results, usually pay-per-click: you choose which searches show your ad and pay when someone clicks. Paid clicks that do not lead anywhere useful are pure cost, so campaigns are planned around one action that counts. Shared skill: the words to bid on are the words your target uses, the same words SEO relies on.",
        practice:
          "With an imaginary Rp 1,000,000 budget, draft a campaign on paper: five search terms, the page each click should land on, the price per click you would accept, and the one action that counts as a conversion. No real account, no real spend.",
      },
      {
        id: "mk6",
        kind: "practice",
        title: "Paying influencers, on paper",
        lesson:
          "Paying influencers means paying people with an audience to talk about your offer. Disclosure rules vary by country: the US FTC requires a clear disclosure whenever there is a material connection, which includes payment or free products, and puts that responsibility on the influencer. Judge fit by whether their audience is your target segment, not by follower counts. Shared skill: the creator stages in this path cover building an audience of your own.",
        practice:
          "Draft a campaign plan for three imaginary influencers: why their audience matches your target, what they would say, the disclosure you would require and the total mock budget. No real outreach.",
      },
      {
        id: "mk7",
        kind: "practice",
        title: "Show up in person: booths and trade shows",
        lesson:
          "A trade show is an organized event where companies in an industry showcase and demonstrate what they offer, meet customers and partners, and watch competitors and market trends. A booth is a cost, not a guarantee: it pays off only when the show’s visitors are your target segment and you know what one conversation should lead to. Shared skill: starting and keeping those conversations is the <a href='#network/n3'>Network and community</a> path; weighing the cost against results is the KPI stage in Projects and business.",
        practice:
          "Pick one real event your target visits. On paper, plan a booth: the one thing visitors should remember, a two-sentence demo, how you would collect contacts, and a mock budget with the cost per useful conversation. No booking, no spend.",
      },
      {
        id: "mk8",
        kind: "practice",
        title: "Buy advertising, on paper",
        lesson:
          "Advertising means paying to bring attention to an offer, and it spans far more than search ads: social feeds, banners, print, radio and out-of-home. Whatever the channel, the discipline is the same: one target, one message, one action, one number that tells you whether it worked. Shared skill: search ads specifically are the SEM stage in this path.",
        practice:
          "Choose one channel from your earlier channel stage. Draft an ad buy on paper: the audience definition, the exact message, the page it lands on, the mock budget and the cost per result you would accept. No real spend.",
      },
      {
        id: "mk9",
        kind: "practice",
        title: "Sell space in what you make",
        lesson:
          "The other side of advertising: if people pay attention to your work, you can offer space in it - a sponsor slot at an event, a logo on a T-shirt, a mention in a project or product. Sponsors pay for access to your audience, so the offer only makes sense once you can say who that audience is. Selling space spends a piece of your audience's trust, so keep what you show them honest. Shared skill: finding sponsors and partners, and negotiating with them, is the <a href='#network/cb6'>Network and community</a> path.",
        practice:
          "List what you make that people pay attention to. For one item, draft an offer on paper: the slot, who it would suit, the price you would ask and what you would not allow. No real outreach.",
      },
      {
        id: "mk10",
        kind: "practice",
        title: "Draft marketing with AI, check everything",
        lesson:
          "AI can draft posts, taglines and campaign copy in bulk, which makes checking more important, not less. Verify every claim a draft makes about your product, watch for copied or generic phrasing, and keep the disclosures your channels require. Volume is cheap; a false claim in fifty posts is fifty problems.",
        practice:
          "A fictional AI draft for a coffee shop says: 'Voted the best coffee in Jakarta, our beans add years to your life.' Mark every claim that needs evidence or removal, then rewrite the post with only claims the shop could actually stand behind.",
      },
      {
        id: "mk11",
        kind: "practice",
        title: "Write the shouted headline",
        lesson:
          "Street newspaper vendors sell the paper with one shouted line: honest, sharp, and enough to make you want the story. A teaser works the same way. It raises a question the launch answers, and every word in it must be true, because a teaser that overpromises spends the trust you need at launch. Deadpool's marketing played this well with in-character teasers that told you exactly what kind of film was coming.",
        practice:
          "Take a fictional product launch. Write three one-line shouted headlines for it, then check each: is it literally true, and does the product keep the promise? Cut or fix any line that fails, and keep the strongest honest one.",
      },
      {
        id: "mk12",
        kind: "practice",
        title: "Give a real freebie",
        lesson:
          "A freebie earns attention by being genuinely useful on its own: a template, a sample chapter, a small tool, a first lesson. It lets people feel your value with almost no friction before they decide anything. A crippled demo or a bait PDF does the opposite, because the free thing is your proof of quality, not a trap.",
        practice:
          "Design a freebie for a fictional project: what it is, why a stranger would keep it even if they never pay, and what it quietly demonstrates about the paid work. Then write the one-sentence honest description you would publish with it.",
      },
      {
        id: "mk13",
        kind: "practice",
        title: "Keep a devlog",
        lesson:
          "Game developers post development logs: short, regular notes on what they built, decided and learned. A devlog keeps a project visible between launches and gives other people material to share. Among Us shipped in 2018 to modest numbers, its developers kept updating it, and in 2020 it surged after Twitch streamers picked it up; the devlog did not cause that surge, but the game was still alive and improving when the moment came.",
        practice:
          "Draft two devlog entries for a fictional week of work on a project: each with one decision, one lesson and one screenshot-worthy moment described in words. Keep them short enough to actually publish weekly.",
      },
      {
        id: "mk14",
        kind: "practice",
        title: "Design so it can spread",
        lesson:
          "Some products are built to be shared. Among Us is played in groups, so every session naturally brings in new players; Deadpool's campaign used an in-character voice people wanted to quote. You control the shareable design: the moment worth screenshotting, the invite that is easy to send. You do not control timing, creators or luck, and no design guarantees a hit. Use only media you have rights to, and treat case-study stories as reported accounts, not recipes.",
        practice:
          "Sketch one shareable moment for a fictional product: what a user would screenshot or send to a friend, and what makes it easy to share. Then list two things in your control and two that are not, to keep the plan honest.",
      },
      {
        id: "cr5",
        kind: "milestone",
        title: "Milestone: one month, four pieces",
        lesson:
          "The first month is the filter most people fail. Finishing it, with an honest review of what worked, is the real beginning of being a creator.",
        milestone:
          "Complete four weeks of scheduled publishing plus a written review of what worked. A fellow creator or mentor checks your log and signs off.",
      },
    ],
  },
  {
    id: "selfcare", short: "Self care", icon: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
    title: "Self care and calm",
    tagline: "Look after your body and mind on purpose",
    status: "prototype",
    note:
      "sanggup is not a medical service and does not diagnose or treat anything. Self care supports everyday wellbeing; it does not replace professional care. A chatbot is not a therapist or a doctor. If you struggle persistently or are in crisis, contact a health professional or local emergency help. The calm stages are general wellbeing practice, not medical or mental health treatment; if you feel unsafe, hopeless or overwhelmed, contact a doctor, a mental health professional or the emergency number (119 in Indonesia, or 112 in areas that run it).",
    sources: [
      { label: "WHO: Self-care for health and well-being (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/self-care-health-interventions" },
      { label: "WHO: Self-care for health and well-being (Q&A)", url: "https://www.who.int/news-room/questions-and-answers/item/self-care-for-health-and-well-being" },
      { label: "NCCIH: Meditation and mindfulness, effectiveness and safety", url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety" },
      { label: "NCCIH: 8 things to know about meditation and mindfulness", url: "https://www.nccih.nih.gov/health/tips/8-things-to-know-about-meditation-and-mindfulness" },
      { label: "Layanan 112, Indonesia emergency call", url: "https://layanan112.komdigi.go.id/tentang" },      { label: "NHS: Get running with Couch to 5K", url: "https://www.nhs.uk/live-well/exercise/get-running-with-couch-to-5k/" },
      { label: "NHS: Sitting exercises", url: "https://www.nhs.uk/live-well/exercise/sitting-exercises/" },
      { label: "Torbay and South Devon NHS: Tai chi", url: "https://www.torbayandsouthdevon.nhs.uk/services/pain-service/reconnect2life/improving-health-and-fitness/tai-chi/" },

    ],
    stages: [
      {
        id: "sc1",
        kind: "practice",
        title: "Know what self care is",
        lesson:
          "The WHO describes self care as the things people do for their own health: daily habits like sleep, food, movement and hygiene, plus knowing when to seek professional help. It is maintenance, not indulgence, and not a substitute for care when something is wrong.",
        practice:
          "Write down your current basics: how many hours you slept last night, when you last moved your body for 20 minutes, and when you last drank water. No judgment, just the numbers.",
      },
      {
        id: "sc2",
        kind: "practice",
        title: "Protect sleep and movement",
        lesson:
          "Sleep and movement are the two levers with the largest everyday effect on mood and focus. Regular hours beat occasional long sleeps; a daily walk beats a weekly heroic workout you skip.",
        practice:
          "For three days, keep a fixed wake-up time and take one 20-minute walk. Note your energy at midday each day.",
        tools: [
          { label: "kokok", url: "https://vanipy.com/kokok/", note: "web version: an alarm rings only while its tab stays open and visible; it cannot wake the phone" },
        ],
      },
      {
        id: "sc3",
        kind: "practice",
        title: "Notice stress early",
        lesson:
          "Stress shows up in the body first: poor sleep, short temper, no appetite for things you usually enjoy. Noticing early lets you act while the fix is still small: a break, a walk, a conversation, a day with fewer commitments.",
        practice:
          "Write your three personal early-warning signs. Next to each, one small action that helps you. Share it with someone you trust.",
      },
      {
        id: "sc4",
        kind: "practice",
        title: "Ask for help as a skill",
        lesson:
          "Self care includes knowing its limit. Talking to a friend, a counselor or a doctor early is strength, not failure. The WHO frames seeking appropriate care as part of self care itself.",
        practice:
          "Save the contact of one person and one professional service you would reach out to if things got heavy. Put them somewhere you can find in ten seconds.",
      },
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
          "In a real emergency, the first job is safety and calling for help, not meditating. A rehearsed reset can help you think. If the emergency is medical or dangerous, call emergency services. In Indonesia, 119 is for medical emergencies, and 112 operates in the cities and regencies that run it.",
        practice:
          "Write a three-line personal crisis card: your reset, the numbers you would call, and one person you would contact.",
      },
      {
        id: "ex1",
        kind: "practice",
        title: "Start running gently",
        lesson:
          "The NHS Couch to 5K model works because it starts absurdly small: one minute of easy jogging alternating with walking, three times a week with rest days between, adding a little each week. Pace does not matter at the start; showing up does. This is general education, not a personal plan: anyone with a health condition or long inactivity checks with a professional first, and pain is a stop signal, not a challenge.",
        practice:
          "Plan one week of beginner walk-run sessions, real or on paper: three outings on non-consecutive days, each with a five-minute warm-up walk, then short easy jog intervals mixed with walking. After each outing, note how it felt and whether the next one should repeat or build.",
      },
      {
        id: "ex2",
        kind: "practice",
        title: "Build strength without equipment",
        lesson:
          "A squat, a push-up and a plank cover the basics, and all three scale: wall push-ups before floor push-ups, a chair squat before a deep one, a short plank before a long one. Form beats count every time; ten careful repetitions help, thirty sloppy ones mostly teach your joints a bad habit. Rest days are when muscles actually rebuild, so alternate days rather than daily maxing.",
        practice:
          "Design a ten-minute no-equipment routine, real or on paper: one leg move, one push move and one hold, each at the easiest honest version, two rounds with rest between. Try it once and write which version of each move was right for you, and what you would adjust.",
      },
      {
        id: "ex3",
        kind: "practice",
        title: "Try gentle movement: tai chi and chair exercise",
        lesson:
          "Not all exercise needs sweat or a gym. Tai chi is slow, controlled movement that NHS guidance links to better balance and flexibility, and it suits beginners because it is low impact. Chair-based exercise goes further: the NHS sitting exercises are done seated on a stable chair without wheels, for people who are less mobile or returning after a long break, with a GP check advised if unsure. The ads promising transformation oversell them; the real value is gentle, repeatable movement almost anyone can start.",
        practice:
          "Pick one gentle option, real or imagined: a ten-minute beginner tai chi follow-along, or a short set of NHS sitting exercises. Write which one fits you or someone you know, when in the day it would happen, and one thing that would tell you it is working after two weeks.",
      },
    ],
  },
  {
    id: "speaking", short: "Speaking", icon: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0 M12 17v4 M8 21h8"/>',
    title: "Public speaking",
    tagline: "From nervous reading to a talk people follow",
    status: "prototype",
    note:
      "sanggup cannot listen to your talk or coach your delivery. Speaking improves by doing it in front of real people; these stages structure that practice. Toastmasters clubs and similar groups give live feedback this app cannot.",
    sources: [
      { label: "Toastmasters International: Public Speaking Tips", url: "https://www.toastmasters.org/en-us/resources/public-speaking-tips" },
      { label: "Toastmasters International: How to Write and Deliver a Speech", url: "https://www.toastmasters.org/resources/public-speaking-tips/how-to-write-and-deliver-a-speech" },      { label: "Toastmasters International: practice and evaluation clubs", url: "https://www.toastmasters.org/" },

    ],
    stages: [
      {
        id: "sp1",
        kind: "practice",
        title: "One message, one audience",
        lesson:
          "Toastmasters' first guidance: know your audience and your material. A talk is not everything you know; it is one message for one group. If you cannot say the message in one sentence, the audience cannot repeat it either.",
        practice:
          "Pick a real upcoming occasion or an imagined one. Write: the audience, the one sentence they should remember, and why they should care.",
      },
      {
        id: "sp2",
        kind: "practice",
        title: "Structure it",
        lesson:
          "The classic shape works: tell them what you will say, say it, tell them what you said. Opening earns attention, body carries two or three points with examples, close returns to the one message.",
        practice:
          "Outline your talk on one page: opening line, three points with one example each, closing line. Full sentences only for the first and last lines.",
      },
      {
        id: "sp3",
        kind: "practice",
        title: "Practice aloud, not in your head",
        lesson:
          "Silent reading hides problems. Practicing aloud reveals the sentence you cannot say and the section that runs long. Recording yourself once is uncomfortable and worth it: you hear your real pace and filler words.",
        practice:
          "Deliver your talk aloud twice, timing both. Record the second on your phone, listen back once, and write the two changes you will make.",
      },
      {
        id: "sp5",
        kind: "practice",
        title: "Open strong, end with a call to action",
        lesson:
          "Toastmasters' speech guide says you have about 30 seconds to capture attention before listeners tune out, and recommends opening with a story, especially one with conflict. Its outline advice ends with a conclusion that emphasizes your one message and asks the audience to actually do something with it.",
        practice:
          "Rewrite the first 30 seconds and the closing lines of your talk: a vivid opening story and one specific call to action. Test both on one listener and keep what lands.",
      },
      {
        id: "sp6",
        kind: "practice",
        title: "Get a talk reviewed, then try again",
        lesson:
          "Speaking improves through a feedback loop: deliver a talk, ask for a review of that specific attempt, apply the feedback, and try again. Reviewers are everywhere once you look: a colleague, a friend, or a club built for this, like Toastmasters, where members practice and evaluate each other. A chatbot can also critique a transcript and is useful for rehearsal, but it cannot hear your delivery, so its review complements a person's assessment rather than replacing it. The milestone sign-off in this path still comes from a human reviewer.",
        practice:
          "Record or draft a two-minute talk on any topic. Ask one person to review that specific attempt with two questions: what landed, and what to change first. Optionally ask a chatbot for feedback on the text and compare. Apply one piece of feedback and deliver the talk again.",
      },
      {
        id: "sp4",
        kind: "milestone",
        title: "Milestone: speak to real people",
        lesson:
          "A talk only exists in front of people. Nerves are normal; Toastmasters notes that even experienced speakers feel them and convert them to energy through preparation.",
        milestone:
          "Deliver your talk to a real audience, even three people, in person or on a call. A listener confirms what your one message was and signs off.",
      },
    ],
  },
  {
    id: "presenting", short: "Presenting", icon: '<path d="M2 3h20 M4 3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3 M12 15v3 M9 21l3-3 3 3"/>',
    title: "Presentation",
    tagline: "Build a deck that carries your point, not your script",
    status: "prototype",
    note:
      "sanggup does not make your slides or present for you. Tools and templates change; the judgment of what to show and what to cut does not. These stages are general education, not a design qualification.",
    sources: [
      { label: "Sheffield Hallam University: Presentation Skills, Structure and formatting", url: "https://libguides.shu.ac.uk/presentations/Structure" },
      { label: "University of Sussex Skills Hub: Presentations, seminars and group work", url: "https://www.sussex.ac.uk/skills-hub/presentations-and-group-work" },
    ],
    stages: [
      {
        id: "pr1",
        kind: "practice",
        title: "Purpose before slides",
        lesson:
          "University presentation guides start before any software: what should the audience think, know or do afterwards, and how long do you have. The deck exists to serve that purpose; anything that does not is decoration.",
        practice:
          "For a real or imagined presentation, write the one action or takeaway you want, the time limit, and three things this audience already knows.",
      },
      {
        id: "pr2",
        kind: "practice",
        title: "Story before design",
        lesson:
          "Structure guides recommend a clear beginning, middle and end: set up the problem, walk through your points in an order a listener can follow, land on the takeaway. If the story works as bullet points on paper, it will work as slides.",
        practice:
          "Write your presentation as a plain outline: problem, three points in order, takeaway. No software yet.",
      },
      {
        id: "pr3",
        kind: "practice",
        title: "Slides support, they do not read",
        lesson:
          "Slides are for the audience, not a teleprompter for you. One idea per slide, few words, readable from the back; your sentences live in your mouth and your speaker notes. If people read your slides, they are not listening to you.",
        practice:
          "Turn your outline into slides: one idea each, at most a short headline and one image or figure per slide. Delete every slide that only repeats what you will say.",
      },
      {
        id: "pr5",
        kind: "practice",
        title: "Rehearse for real, plan for questions",
        lesson:
          "Sussex's Skills Hub notes that a presentation rarely ends with the conclusion, because a question-and-answer section usually follows, and that you can practise your delivery several times before the real event. It suggests budgeting slides per section and leaving time for questions.",
        practice:
          "Do two full timed run-throughs, aloud and on your feet. Then write down the three questions you would least like to be asked and prepare an honest answer for each.",
      },
      {
        id: "pr6",
        kind: "practice",
        title: "Check AI-drafted slides before you present",
        lesson:
          "AI tools can draft a whole deck from a prompt, including numbers and sources that may not exist. Before you present, verify every figure and quote against its real source, and rewrite the story so you can defend every slide without notes. The audience holds you responsible for the content, not the tool.",
        practice:
          "A fictional AI deck claims: 'Sales grew 340 percent after the redesign, according to a 2025 Nielsen study.' Write down what you would verify before showing it, what you would do if the study cannot be found, and a replacement headline you could stand behind.",
      },
      {
        id: "pr4",
        kind: "milestone",
        title: "Milestone: present for real",
        lesson:
          "A presentation is finished when it lands with an audience and survives their questions. Rehearsing with the actual slides once, standing, catches most failures cheaply.",
        milestone:
          "Rehearse once aloud with your slides, then present to a real audience and take questions. An attendee confirms the takeaway landed and signs off.",
      },
    ],
  },
  {
    id: "surveying", short: "Surveying", icon: '<path d="M9 11l3 3 8-8 M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>',
    title: "Surveying people",
    tagline: "Ask questions well and learn what people actually think",
    status: "prototype",
    note:
      "sanggup does not run surveys or collect responses for you. Survey results depend heavily on who you asked and how you asked; small informal polls show direction, not proof. Respect privacy and consent when you collect people's answers.",
    sources: [
      { label: "Pew Research Center: Writing survey questions", url: "https://www.pewresearch.org/writing-survey-questions/" },
      { label: "Pew Research Center: U.S. Surveys methods", url: "https://www.pewresearch.org/our-methods/u-s-surveys/" },
      { label: "PingPolls: documented method and limits (vendor source)", url: "https://pingpolls.com/whitepaper" },
      { label: "Kaji: conversational surveys, pairwise choice and timing limits", url: "https://vanipy.com/kaji/pingpolls/" },
    ],
    stages: [
      {
        id: "sv1",
        kind: "practice",
        title: "Start from a decision",
        lesson:
          "A survey exists to inform a decision: what you will do differently depending on the answers. If no answer would change anything, the survey is decoration. Define the decision, then what you need to learn, then who can tell you. Shared skill: surveying an audience for marketing is also practiced in <a href='#branding/mk1'>Branding and creator</a>.",
        practice:
          "Pick a real question from your work or community. Write the decision it informs, the one thing you need to learn, and the group of people whose answers would settle it.",
      },
      {
        id: "sv2",
        kind: "practice",
        title: "Write questions people can answer",
        lesson:
          "Pew Research's guidance: ask one thing at a time, use words your respondents use, and avoid leading phrasing that pushes an answer. A confusing or loaded question measures your wording, not their opinion. Test questions on one or two people before sending them widely.",
        practice:
          "Draft five questions for your survey. Read them aloud to one person from your target group and watch where they hesitate. Rewrite the two weakest.",
      },
      {
        id: "sv3",
        kind: "practice",
        title: "Who answers matters more than how many",
        lesson:
          "A hundred answers from your friends tell you about your friends. Sampling is about reaching the mix of people whose views you claim to describe, and nonresponse bias means the people who skip your survey often differ from those who answer. Report who actually answered, not just the totals.",
        practice:
          "Write down who your survey would reach by default and who it would miss. Add one concrete step that reaches a missed group.",
      },
      {
        id: "sv5",
        kind: "practice",
        title: "Pilot before you launch",
        lesson:
          "Pew Research treats pretesting as an essential step: cognitive interviews, focus groups or a small pilot show how real people actually interpret your questions before you spend your real sample. Pew also warns that earlier questions can change how people answer later ones.",
        practice:
          "Pilot your questionnaire with three people from your intended audience and watch where they hesitate or misread. Write down every change you make before the real run.",
      },
      {
        id: "sv6",
        kind: "practice",
        title: "Use AI on surveys with checks",
        lesson:
          "AI can draft survey questions and summarize answers, and both need checking. Drafted questions can be leading or double-barreled; summaries can drop minority views or invent patterns. Compare every summary against the raw answers, and never paste respondents' personal data into a chatbot.",
        practice:
          "Five fictional answers to 'What would improve the park?' are: more lights, more lights, cleaner toilets, a running track, and cheaper parking. An AI summary says 'respondents mainly want better security.' Write what the summary got right, what it dropped, and a fair one-sentence summary of your own.",
      },
      {
        id: "sv7",
        kind: "practice",
        title: "Make the next answer easy, not biased",
        lesson:
          "PingPolls uses a conversational form: one question at a time, with routing based on earlier answers. Borrow the small-step presentation, not a promise that chat makes answers true. Keep the purpose, consent, skip or exit route and relevant context visible. A friendly tone can still lead people, and hidden earlier answers can make correction harder. Pilot the same wording in a short conventional form and a conversational sequence before claiming one works better.",
        practice:
          "Use a fictional library study. Turn 'How satisfied are you with opening hours and the collection?' into two neutral questions. Sketch the next question for a visitor and for someone who has never visited. Include a skip route, a way to correct an earlier answer and no request for a name. Use fictional answers only in this prototype.",
      },
      {
        id: "sv8",
        kind: "practice",
        title: "Choose between options without forcing a false choice",
        lesson:
          "Pairwise preference questions show two options at a time instead of asking someone to rate everything highly. For three options, the complete set has three pairs; for four, six. That reduces each screen's reading load but can add work overall. Order can change a choice, and A over B plus B over C does not guarantee A over C. Keep a route for neither, equal or unsure when the study needs it, and record raw choices separately from any weighted score. PingPolls describes adaptive pair selection; this lesson does not reproduce or validate its algorithm.",
        practice:
          "Compare three fictional library improvements: longer hours, more desks and quieter rooms. Write all three pairs, then make a second version with the sides and sequence changed. Add a neither-or-unsure route. Invent an A-over-B, B-over-C, C-over-A response and explain why reporting a certain overall winner would hide a cycle.",
      },
      {
        id: "sv9",
        kind: "practice",
        title: "Treat response time as a clue, not a verdict",
        lesson:
          "PingPolls' Certiscore compares each card choice's delay with that respondent's own quicker choices. Its whitepaper calls the constants design choices, not confidence thresholds validated against labelled data. A slow answer may mean uncertainty, careful reading, a screen reader, a hard image, a notification or a slow device. Fast answers can also be careless or automated. Timing is not truth, intelligence, consent or proof of being human. With only one pair, the pick is its own reference so the documented timing adjustment has no effect. Do not exclude people or label them dishonest from speed; report the measure, its limits and sensitivity separately from raw choices.",
        practice:
          "Two fictional respondents choose the same option: one after one second, the other after six seconds while interrupted by a call. Write at least three possible explanations before calling one less confident. Then write a methods note that reports the original choices, any optional timing analysis and who the sample misses. No timer, biometric inference, AI analysis or real-response collection is added to sanggup.",
      },
      {
        id: "sv4",
        kind: "milestone",
        title: "Milestone: run one small survey",
        lesson:
          "A finished survey reports honestly: the question, who answered, how many, what they said, and what it cannot tell you. Direction from thirty honest answers beats false precision from a biased thousand.",
        milestone:
          "Run your survey with a real group, collect at least ten responses, and write a short summary: what you asked, who answered, what you learned, and the limits. Someone from the surveyed group reads it and signs off that it represents the answers fairly.",
      },
    ],
  },
  {
    id: "teaching", short: "Teaching", icon: '<path d="M22 10L12 5 2 10l10 5 10-5z M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/>',
    title: "Teaching and mentoring",
    tagline: "Help someone learn to do what you can do",
    status: "prototype",
    note:
      "sanggup does not teach for you or assess your learner. Teaching and mentoring involve real people's time and confidence, so adjust to the learner in front of you. These stages are general education drawn from published university teaching and mentoring guidance.",
    sources: [
      { label: "Carnegie Mellon Eberly Center: Teaching Principles", url: "https://www.cmu.edu/teaching/principles/teaching.html" },
      { label: "UNC Center for Faculty Excellence: Faculty Mentoring Toolkit, Mentor", url: "https://cfe.unc.edu/faculty-mentoring-toolkit/mentor/" },
    ],
    stages: [
      {
        id: "tm1",
        kind: "practice",
        title: "See from the learner's side",
        lesson:
          "Carnegie Mellon's Eberly Center starts its teaching principles with prior knowledge: what a learner already knows, and wrongly believes, shapes everything they can absorb. Expertise makes your own steps invisible to you, so teaching begins by recovering what a beginner does not know.",
        practice:
          "Pick one skill you do easily. Do it once slowly and write down every step and assumption a beginner would miss. Ask one beginner what they find confusing about it.",
      },
      {
        id: "tm2",
        kind: "practice",
        title: "Show, then let them do",
        lesson:
          "The Eberly principles tie learning to practice with feedback: people learn skills by doing them, not by watching. A demonstration sets the target, but the learner's own attempt is where the teaching happens. If you write your steps down, that note doubles as a small standard operating procedure the learner can follow without you. Shared skill: SOPs are also practiced in <a href='#network/cb5'>Network and community</a>.",
        practice:
          "Demonstrate your skill once, narrating your steps. Then have the learner do it while you watch. Give one correction at a time and let them retry between corrections.",
      },
      {
        id: "tm3",
        kind: "practice",
        title: "Feedback that lands",
        lesson:
          "Useful feedback is specific, timely and about the work, not the person: what worked, what to change next, in words the learner can act on. University mentoring guides add the longer arc: agree on goals, check in regularly, and let the learner own their growth.",
        practice:
          "Give feedback on one real attempt using the shape: one thing that worked, one thing to change next, nothing else. If you mentor someone over time, write the goal and the next check-in date.",
      },
      {
        id: "tm5",
        kind: "practice",
        title: "Align goal, practice and check",
        lesson:
          "Carnegie Mellon's Eberly Center says effective teaching aligns three components: clear learning objectives, activities that give goal-oriented practice, and assessments that let learners demonstrate the objective and receive targeted feedback. Practicing one thing while checking another is a common way teaching fails.",
        practice:
          "For one skill you want to teach, write a single sentence each for the objective, the practice activity and the check. Show all three to a colleague and fix any mismatch they spot.",
      },
      {
        id: "tm6",
        kind: "practice",
        title: "Draft exercises with AI, verify before teaching",
        lesson:
          "AI can draft quiz questions, worked examples and feedback quickly, and a share of them will be wrong: plausible questions with incorrect answer keys. Verify every item before a learner sees it, and keep real learner data out of chatbots; practice with fictional students. Your name is on the lesson, so the checking is yours.",
        practice:
          "A fictional AI quiz asks: 'What is the capital of Australia?' with the answer key 'Sydney'. Find the error, fix the item, and write one more question with its correct answer. Then note what you would check in a ten-question AI quiz before using it.",
      },
      {
        id: "tm7",
        kind: "practice",
        title: "Teach in front of a reviewer",
        lesson:
          "Teaching improves when someone watches: run a short session, ask the observer where learners got lost and what to change, then teach it again differently. Learners themselves are reviewers too, and AI can help you rehearse explanations of a topic, but only the people in the room can tell you whether they actually learned. The milestone sign-off in this path still comes from a person.",
        practice:
          "Teach a five-minute explanation of anything to one person. Ask them two questions afterward: what was clear, and where did I lose you? Reteach the weak part in a different way and note which explanation landed better.",
      },
      {
        id: "tm4",
        kind: "milestone",
        title: "Milestone: teach one real skill",
        lesson:
          "You have taught something when the learner can do it without you. That is a higher bar than explaining, and it is the bar that matters.",
        milestone:
          "Teach one real skill to a real person until they can do it unaided. The learner demonstrates the skill without your help and signs off.",
      },
    ],
  },
  {
    id: "negotiation", short: "Negotiation", icon: '<path d="M17 3l4 4-4 4 M21 7H9 M7 21l-4-4 4-4 M3 17h12"/>',
    title: "Negotiation",
    tagline: "Reach agreements both sides can keep",
    status: "prototype",
    note:
      "sanggup does not negotiate for you or advise on specific deals. Real negotiations involve money, jobs and relationships; for legal or high-stakes matters, get professional advice. Sponsor and partner negotiation has its own stage in the <a href='#network/cb7'>Network and community</a> path; this path is the general skill.",
    sources: [
      { label: "Program on Negotiation at Harvard Law School: What is BATNA?", url: "https://www.pon.harvard.edu/daily/batna/translate-your-batna-to-the-current-deal/" },
      { label: "Program on Negotiation at Harvard Law School: Bargaining with Your BATNA in Mind", url: "https://www.pon.harvard.edu/daily/batna/negotiation-and-bargaining-with-your-batna-in-mind/" },
      { label: "Program on Negotiation at Harvard Law School: Listening skills for maximum success", url: "https://www.pon.harvard.edu/daily/negotiation-skills-daily/listening-skills-for-maximum-success/" },
    ],
    stages: [
      {
        id: "ng1",
        kind: "practice",
        title: "Know your walk-away",
        lesson:
          "Harvard's Program on Negotiation centers preparation on the BATNA, your best alternative to a negotiated agreement. Your power in a negotiation is how good your no is: if walking away is fine, you can hold out for a good yes. Decide your BATNA and your walk-away point before you talk numbers. Shared skill: sponsorship negotiation is also practiced in <a href='#network/cb7'>Network and community</a>, with its own stage.",
        practice:
          "Pick one real negotiation ahead of you, small is fine. Write your best alternative if no deal happens, the worst outcome you would accept, and one step that would improve your alternative.",
      },
      {
        id: "ng2",
        kind: "practice",
        title: "Prepare interests, not positions",
        lesson:
          "A position is what someone demands; an interest is why they want it. Preparation means listing both sides' interests: money, time, risk, reputation, relationship. Trades between different interests are where agreements come from, and guessing the other side's interests beats rehearsing your own arguments.",
        practice:
          "For your ng1 negotiation, write your three interests and your honest guess of their three. Mark one thing cheap for you to give that they may value.",
      },
      {
        id: "ng3",
        kind: "practice",
        title: "Trade, do not just concede",
        lesson:
          "In the conversation, open with a supportable position, ask questions before countering, and trade instead of conceding: 'if you need X, then I need Y'. Silence after an offer is allowed. Any agreement needs a clear write-up of who does what by when, or it is not finished.",
        practice:
          "Rehearse the negotiation aloud once with a friend playing the other side, or write both sides of the likely exchange. End with the one-page write-up you would send after a yes.",
      },
      {
        id: "ng5",
        kind: "practice",
        title: "Listen actively: paraphrase and confirm",
        lesson:
          "Harvard's Program on Negotiation calls active listening one of the most powerful negotiation skills, and one most people overestimate in themselves. It is dynamic, not silent nodding: paraphrase the other side's points back and ask whether you captured their main concerns, so they can correct you before positions harden.",
        practice:
          "In your next real conversation where you want something, paraphrase the other person's position out loud and ask whether you got it right before making your case. Write down one thing you learned that you would otherwise have missed.",
      },
      {
        id: "ng6",
        kind: "practice",
        title: "Rehearse a negotiation with a reviewer",
        lesson:
          "Negotiation practice sticks when someone plays the other side: run the conversation, then ask your sparring partner where you gave ground too fast and what landed. A chatbot can role-play the counterpart for rehearsal and is useful for trying different openings, but it does not push back like a real counterpart with real stakes, so treat its sessions as warm-ups. The milestone sign-off in this path still comes from a person.",
        practice:
          "Role-play a fictional negotiation, such as splitting a project budget, with a friend or a chatbot as the counterpart. Afterward write what the counterpart said that you did not expect, and one thing you would open with differently next time.",
      },
      {
        id: "ng4",
        kind: "milestone",
        title: "Milestone: close one real negotiation",
        lesson:
          "The skill is the whole arc: preparation, conversation, written agreement. A negotiation you both keep is a success even when you got less than your opening ask.",
        milestone:
          "Complete one real negotiation, from preparation to a written agreement both sides accept: a price, terms, a split of work or a commitment. Your counterpart or a mentor confirms the agreement and signs off.",
      },
    ],
  },
  {
    id: "coding", short: "Coding", icon: '<path d="M8 6l-6 6 6 6 M16 6l6 6-6 6"/>',
    title: "Coding",
    tagline: "Code and the assumptions that break it",
    note: "Written exercises only: Sanggup does not run your code. You sketch the example and the fix by hand, then try it in your own tools if you want.",
    sources: [
      { label: "Falsehoods programmers believe about time (Noah Sussman)", url: "https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time" },
      { label: "Falsehoods Programmers Believe About Geography", url: "https://ctemm.me/falsehoods/geography/" },
      { label: "Falsehoods Programmers Believe About Addresses", url: "https://ctemm.me/falsehoods/addresses/" },
      { label: "Falsehoods Programmers Believe About Names (Patrick McKenzie)", url: "https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/" },
      { label: "How to deal with money in software (cs-syd.eu)", url: "https://cs-syd.eu/posts/2022-08-22-how-to-deal-with-money-in-software" },
      { label: "Wikipedia: Mars Climate Orbiter", url: "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter" },
      { label: "Awesome Falsehood: the curated falsehoods list", url: "https://github.com/kdeldycke/awesome-falsehood" },
    ],
    stages: [
      {
        id: "cd1",
        kind: "practice",
        title: "Break a date with timezones",
        lesson:
          "Programmers keep a famous list of falsehoods about time: days always have 24 hours, timezones never change, a minute is always 60 seconds. Real calendars violate all of these, through daylight-saving switches, leap seconds and governments moving offsets. Code that assumes the falsehood works for months, then breaks for one user in one week of the year.",
        practice:
          "Write three assumptions about time that feel obviously true. For each, describe a concrete case that breaks it, such as a meeting at 02:30 on the night clocks spring forward. Then write the smallest code sketch that would show the break, and what you would use instead.",
        tools: [
          { label: "daya", url: "https://vanipy.com/daya/", note: "web, prototype: generates a small app from a recipe, ready-made material to practice breaking" },
        ],
      },
      {
        id: "cd2",
        kind: "practice",
        title: "Break a place with geography",
        lesson:
          "There are equally famous falsehoods about geography and addresses: every place has one name, streets have numbers, coordinates are enough, countries never change. Real locations violate these constantly, and maps, deliveries and profiles fail where the assumption meets reality.",
        practice:
          "Write three assumptions about places or addresses that feel obviously true. For each, find the breaking case, such as a place with no street address or two towns sharing a name in one country. Sketch the smallest example that shows the break and what data you would store instead.",
      },
      {
        id: "cd5",
        kind: "practice",
        title: "Break a form with names",
        lesson:
          "The original falsehoods list was about people's names: everyone has exactly one canonical full name, names fit in ASCII, a name is a first name plus a last name, names never change. All wrong. Systems that assume them reject real people at the form field, and anything someone tells you is their name is, by definition, an appropriate identifier for them.",
        practice:
          "Invent three fictional people whose names break the usual assumptions, such as one name only, a name with characters outside ASCII, or a name that changed last year. For each, write which common form field would reject them and what the field should accept instead.",
      },
      {
        id: "cd6",
        kind: "practice",
        title: "Break a price with money",
        lesson:
          "Money looks like a number and is not one. Floating-point types cannot even hold 0.1 exactly, so 0.1 + 0.1 + 0.1 silently becomes 0.30000000000000004; currencies have different smallest units, symbols repeat across countries, and rounding rules differ by context. Software that treats a price as an ordinary decimal creates or destroys real money in rounding errors. Store minor units as integers, and decide the rounding rule before you calculate.",
        practice:
          "Take a fictional price of 0.1 in any currency. Write what 0.1 + 0.1 + 0.1 gives in floating point, then rewrite the calculation in integer minor units. Finish with one line: which rounding rule applies when you split a bill three ways.",
      },
      {
        id: "cd7",
        kind: "practice",
        title: "Break a measurement with units",
        lesson:
          "Numbers in code carry invisible units, and mixing them is catastrophic: NASA lost the Mars Climate Orbiter in 1999 because one team used pound-force seconds where another used newton seconds. The falsehoods are familiar: every length is in meters, every weight in kilograms, every rate per the same hour. The fix is boring and absolute: name the unit everywhere the number lives.",
        practice:
          "Invent a fictional sensor that reports a speed. Write three ways its number could be misread, such as km per hour versus meters per second. Then rewrite the variable name and the comment so the mistake is impossible.",
      },
      {
        id: "cd3",
        kind: "practice",
        title: "Write your own failing example",
        lesson:
          "The skill under these lists is the same: state the assumption out loud, build the smallest case that falsifies it, and only then fix it. The failing example is the proof you understood the bug; skipping it is how fixes create the next falsehood.",
        practice:
          "Pick one assumption you personally relied on, about time, places or anything else. Write the assumption in one sentence, the smallest example that breaks it, and the fix in one sentence. Keep all three; they are the whole exercise.",
      },
      {
        id: "cd8",
        kind: "practice",
        title: "Get your code reviewed by a person",
        lesson:
          "Code review is the profession's feedback loop: another developer reads your change and questions what you stopped seeing. AI review tools catch mechanical issues quickly, but a human reviewer judges whether the code solves the right problem in a way the team can maintain. Ask for review on a specific change, apply the feedback, and expect the exchange to be normal, not personal.",
        practice:
          "Take a small piece of code you wrote, real or a fifty-line fictional script. Ask a person who codes to review that specific piece, or compare against a chatbot's review if nobody is available. List the comments, apply one, and write what the reviewer saw that you had missed.",
        tools: [
          { label: "bedah", url: "https://vanipy.com/bedah/", note: "web, prototype: lays a change out on a review canvas you can walk through with your reviewer" },
        ],
      },
      {
        id: "cd4",
        kind: "milestone",
        title: "Milestone: catch one real assumption bug",
        lesson:
          "Paper exercises prove you can spot the pattern. Real code proves you can find it where it hides, in a form field, a date comparison or an address parser that was never questioned.",
        milestone:
          "In real code, yours or a public project, find one place that relies on a false assumption about time, location or names. Write it up as assumption, failing case and fix, and have your instructor check the reasoning.",
      },
    ],
  },
  {
    id: "work", short: "Career", icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2 M3 13h18"/>',
    title: "Career",
    tagline: "Job hunting, growth and client work in one path",
    note: "Sanggup does not apply for jobs, find clients or do the work for you. Every application, client and decision is yours.",
    sources: [
      { label: "University of Pennsylvania Career Services: Write a Resume/CV", url: "https://careerservices.upenn.edu/channels/resume/" },
      { label: "University of Pennsylvania Career Services: Interview", url: "https://careerservices.upenn.edu/channels/interview/" },
      { label: "Situation, task, action, result (STAR), overview", url: "https://en.wikipedia.org/wiki/Situation%2C_task%2C_action%2C_result" },
      { label: "University of Minnesota HR: Managing Up", url: "https://hr.umn.edu/supervising/news/Managing-Practical-Approach-Working-Your-Supervisor" },
      { label: "StaffEng: Operating at Staff", url: "https://staffeng.com/guides/operating-at-staff/" },
      { label: "US Small Business Administration: Choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" },
      { label: "OSS RBA: Indonesia's risk-based business licensing system", url: "https://oss.go.id/en" },
      { label: "Wikipedia: Elevator pitch", url: "https://en.wikipedia.org/wiki/Elevator_pitch" },
      { label: "Wikipedia: Stock dilution", url: "https://en.wikipedia.org/wiki/Stock_dilution" },
      { label: "StaffEng: the book and stories", url: "https://staffeng.com/book" },
      { label: "Yale Office of Career Strategy: Using AI in your job search", url: "https://ocs.yale.edu/channels/using-ai-job-search/" },
      { label: "Coursera: What Does a Consultant Do?", url: "https://www.coursera.org/articles/what-does-a-consultant-do" },
      { label: "SCORE: Becoming an Independent Consultant", url: "https://www.score.org/ct/western-connecticut/e-guides/becoming-independent-consultant/" },
      { label: "SCORE: Starting a Consulting Business", url: "https://www.score.org/sc/greater-aiken/e-guides/starting-a-consulting-business/" },
      { label: "Coursera: Freelancer Jobs and How to Get Started", url: "https://www.coursera.org/articles/freelancer" },
      { label: "US Small Business Administration: 10 steps to start your business", url: "https://www.sba.gov/business-guide/10-steps-start-your-business" },
      { label: "DJP: Kewajiban Perpajakan Freelancer (Indonesia tax duties)", url: "https://www.pajak.go.id/id/artikel/kewajiban-perpajakan-freelancer" },
      { label: "Wikipedia: Cold calling", url: "https://en.wikipedia.org/wiki/Cold_calling" },
      { label: "VanillaSoft: lead conversion study on follow-up persistency", url: "https://vanillasoft.com/resources/lead-conversion-study-telfer" },
    ],
    stages: [
      {
        id: "ca1",
        kind: "practice",
        title: "Inventory your evidence",
        lesson:
          "University career-center guidance starts with evidence: a CV or resume is a tailored summary of what you have done and achieved, not a list of duties. Before any formatting, gather the raw material: real work, outcomes and numbers.",
        practice:
          "List your five most convincing pieces of work with the outcome of each. Then draft or update a one-page CV or profile from that list, cutting anything it does not support.",
      },
      {
        id: "cs1",
        kind: "practice",
        title: "Name the problem you solve",
        lesson:
          "Coursera's overview describes a consultant as an outside expert hired to analyze a situation and recommend what to do. Consulting starts from a specific problem you already know how to solve, not from a general offer of help.",
        practice:
          "Finish this sentence: 'I help ___ with ___ so they can ___.' Ground it in work you have actually done, and list two real examples as evidence.",
      },
      {
        id: "ca2",
        kind: "practice",
        title: "Tell achievement stories",
        lesson:
          "Interviewers and readers remember stories with shape. STAR gives the shape: the Situation, the Task you owned, the Action you took and the Result, ideally with a number. Three well-prepared stories cover most behavioral interview questions. Shared skill: the STAR structure is also practiced in <a href='#branding/br4'>Branding and creator</a> and in this Career path, as case studies.",
        practice:
          "Write three STAR stories from your ca1 list: one about delivering, one about a problem you fixed, one about working with people. Say each aloud in under two minutes.",
      },
      {
        id: "fr1",
        kind: "practice",
        title: "Pick one sellable service",
        lesson:
          "Freelancers sell specific outcomes, not hours of availability. Coursera's guide to getting started begins with choosing a service: one thing you can deliver well, this month, with proof.",
        practice:
          "Choose one service you can deliver this month. Write the offer in one sentence a stranger would understand, for example: 'I build a one-page website in a week.'",
      },
      {
        id: "fr2",
        kind: "practice",
        title: "Assemble proof",
        lesson:
          "Clients buy evidence. A small portfolio of two or three real examples outperforms a long CV, because it shows the actual deliverable they would receive. Structure each example as a STAR story: the Situation, the Task you owned, the Action you took and the Result. Shared skill: the STAR structure is also practiced in <a href='#branding/br4'>Branding and creator</a> and elsewhere in this Career path.",
        practice:
          "Put two or three examples of real work in one shareable place: a profile, a public repo list or a single page. If you have no client work yet, make one small sample project and label it as a sample.",
      },
      {
        id: "ca3",
        kind: "practice",
        title: "Practice the interview",
        lesson:
          "Career centers treat interviews as a skill you rehearse: research the organization, answer aloud rather than in your head, and bring your own questions, since you are choosing them too. A mock run with a friend catches the rambling your inner voice forgives.",
        practice:
          "Do one mock interview with a friend playing the interviewer, using your STAR stories. Write down their two sharpest questions and your five questions for a real interviewer.",
      },
      {
        id: "cs2",
        kind: "practice",
        title: "Design one consultation",
        lesson:
          "A consultation is a working session with a shape: understand the client's situation, give a recommendation, agree on next steps. Preparing your questions in advance is what separates advice from chat.",
        practice:
          "Write a one-page plan for a 60-minute consultation on your cs1 problem: five diagnostic questions, what the client leaves with (verbal advice, a short written summary or a plan), and how you will follow up.",
      },
      {
        id: "cs3",
        kind: "practice",
        title: "Set expectations in writing",
        lesson:
          "SCORE's guides for independent consultants stress scope and expectations: exactly what is included, what is not, the timeline and the fee. Misunderstandings about scope are a common way a good engagement goes bad. For anything bigger than a one-person job, also name the roles with RACI (Responsible, Accountable, Consulted, Informed) and agree one measurable outcome, a KPI, for what success means. Shared skills: RACI and KPIs are also practiced in <a href='#network/cb3'>Network and community</a>.",
        practice:
          "Draft a one-page scope for your consultation: what you will do, what you will not do, the delivery date, the price (or 'free practice round'), and how changes are handled.",
      },
      {
        id: "fr3",
        kind: "practice",
        title: "Decide price and terms before you are asked",
        lesson:
          "Price by the project or by time, and fix the terms before anyone asks: what is included, how many revision rounds, and when payment is due. The US SBA's startup steps treat written terms as basic protection for both sides.",
        practice:
          "Write down your price for the fr1 service, what it includes, the number of revision rounds and when payment is due. Save it where you can paste it into a reply.",
      },
      {
        id: "fr5",
        kind: "practice",
        title: "Find clients: cold outreach, warmed up",
        lesson:
          "Cold calling means approaching potential clients who have had no prior contact with you. It reaches new people at low cost, but it is intrusive, has a high rejection rate, and many countries restrict it, for example with Do Not Call registries. Modern practice warms it up: work from a list of people who fit your service and dig to understand their situation before any contact. Shared skill: describing exactly who you serve is the segment stage in Branding and creator; first conversations are the <a href='#network/nt14'>Network and community</a> path.",
        practice:
          "Write a list of ten imaginary potential clients who fit your service. For one of them, draft a four-sentence first contact that shows you understand their situation and asks one small question. Do not send anything.",
      },
      {
        id: "fr6",
        kind: "practice",
        title: "Follow up without nagging",
        lesson:
          "A large study of sales interactions found persistency, structured follow-up, among the strongest predictors of a win, with the best outcomes when the first response came within about an hour and attempts were spaced across the first days. Following up is giving the decision another chance, not repeating the ask: each touch should add something useful. Decide your stop rule before you start.",
        practice:
          "Draft a three-touch follow-up plan for your draft contact: what each message adds, when you would send it, and after which attempt you stop and move on.",
      },
      {
        id: "ca6",
        kind: "practice",
        title: "Show evidence of your skills",
        lesson:
          "Career advisors describe AI fluency as judgment, directing tools, and evaluating what they produce, and note that employers look for it through hackathons, personal projects and communities rather than formal credentials. When drafting tools can polish anyone's document, the evidence behind it is what carries weight: things you built, results you measured, people who saw you do it.",
        practice:
          "Pick one skill you want to be hired for. List three concrete proofs you could show for it today, such as a project, a measured result or a person who watched you work. Circle the weakest one and write how you would strengthen it.",
      },
      {
        id: "ca7",
        kind: "practice",
        title: "Use AI as editor, then verify every line",
        lesson:
          "University career guidance is consistent: start from your own draft, use AI to improve it, and never accept suggestions blindly, because AI tools do not always use authoritative sources and can state things inaccurately. Your name sits on every claim in the application, so each sentence needs to be true and defensible in an interview. Keep identifying details out of tools you do not control.",
        practice:
          "Write one resume bullet in your own words. Ask any AI tool to improve it. Then check every sentence against evidence you could actually show, remove anything you cannot defend, and rewrite the final version in your own style.",
      },
      {
        id: "ca8",
        kind: "practice",
        title: "Choose what to learn next",
        lesson:
          "A useful split for the AI era: some tasks AI tools already do well, some judgments stay with people, and the valuable position is directing one while owning the other. Look at your own field rather than headlines: which of your weekly tasks could a tool draft, and which decisions would you never hand over?",
        practice:
          "List one task in your field that AI tools already do well and one judgment you would not hand to a tool. Then write one concrete learning step that moves you toward the judgment side, with a date.",
      },
      {
        id: "ca5",
        kind: "practice",
        title: "Manage up on purpose",
        lesson:
          "Managing up is consciously working with your supervisor to get the best results for you, your manager, and your organization. It is not flattery and not doing their job. Keep your progress visible so they never have to guess what you are doing or chase you for it. Tell them important news yourself, early, before they hear it from someone else; bad news travels and the source matters. And do not sit waiting for instructions: show initiative by picking the next useful step inside your authority and doing it, and when a decision needs their approval, bring a recommendation with your reasoning, not an unfiltered choice for them to solve. Flag risks early, while there is still time to act. Make your contribution tangible: what you moved forward, why it matters, and what is next, so your employer never wonders what they are paying for. Visible results and useful initiative, not looking busy. Shared skill: the update rhythm is the sync stage in <a href='#projects/pb9'>Projects and business</a>.",
        practice:
          "Write a one-page manager brief, real or imaginary: their top three priorities, how they prefer to get updates, and your next update with one risk flagged early plus what you are doing about it. Then add two lines: one piece of news you would deliver yourself before it reaches them another way, and one decision where you write your recommendation and reasoning first and ask only for approval.",
      },
      {
        id: "ca9",
        kind: "practice",
        title: "Grow toward staff engineer",
        lesson:
          "A staff engineer keeps growing on the technical track instead of moving into management. StaffEng's guides describe operating at staff as setting technical direction, mentoring, and unblocking work across teams: the job shifts from writing the most code to making the people and decisions around the code better. Impact is judged by what the whole group ships, not by personal output.",
        practice:
          "Take a fictional team of eight engineers with a struggling project. Write a one-page plan a staff engineer would lead: the technical direction in two sentences, two people you would mentor and how, and one cross-team blocker you would unblock first. Mark what you would deliberately not code yourself.",
      },
      {
        id: "ca10",
        kind: "practice",
        title: "Understand creating a corporation",
        lesson:
          "Incorporating turns a business into its own legal entity, separate from you: it can sign contracts, own assets and be sued, and your personal risk is usually limited to what you put in. The trade-offs are setup cost, ongoing reporting and tax rules that differ by country. The US SBA walks through choosing a structure (sole proprietorship, LLC, corporation) as one of the first launch decisions; Indonesia runs its own registration through the OSS risk-based licensing system, with company forms and rules that differ from the US. Treat the concept as general and the rules as country-specific: a lawyer or notary who knows your jurisdiction is part of the real cost.",
        practice:
          "Take a fictional two-person software studio. On paper, compare staying unincorporated versus forming a company: what each protects, what each costs in effort, and one situation where you would incorporate and one where you would wait. End with a list of three questions you would ask a local lawyer before filing anything.",
      },
      {
        id: "ca11",
        kind: "practice",
        title: "Build an elevator pitch",
        lesson:
          "An elevator pitch explains an idea, product or company in thirty seconds to two minutes: who it is for, what it does, why it is needed and how it happens. Its goal is not to close a deal on the spot but to earn the next conversation. A pitch you can say plainly, without jargon, is also the test of whether you understand your own idea.",
        practice:
          "Take a fictional company, such as a bike-repair subscription for apartment buildings. Write a pitch of at most eighty words covering who it serves, what it does, why now and how it works. Read it aloud and cut every word that does not help a stranger understand it.",
      },
      {
        id: "ca12",
        kind: "practice",
        title: "Sketch a pitch deck",
        lesson:
          "A pitch deck is the short slide story behind the pitch: the problem, your solution, who pays and how much, why your team can pull it off, and what you are asking for. Every number on a slide needs a source or an honest label as an estimate, because investors check. A deck supports the conversation; it does not replace it.",
        practice:
          "For the same fictional company, outline a ten-slide deck with one line per slide: problem, solution, market size, how it makes money, traction so far, competition, team, financial sketch, the ask, and what the money buys. Mark each number as sourced or estimate.",
      },
      {
        id: "ca13",
        kind: "practice",
        title: "Learn how finding investors works",
        lesson:
          "Raising money means finding investors whose stage, sector and cheque size match your company, then earning introductions and running meetings, usually over months. Not every business should raise: investment trades ownership and control for speed, and plenty of good businesses grow from revenue instead. Rejection is the default outcome, so a pipeline of many conversations matters more than any single one.",
        practice:
          "For the fictional company, list five imaginary investor profiles (for example: a local angel who knows logistics, a seed fund focused on consumer apps) with why each would care. Then write one paragraph on whether the company should raise at all, or fund itself from sales, with your reasoning.",
      },
      {
        id: "ca14",
        kind: "practice",
        title: "Spot equity traps before signing",
        lesson:
          "Equity deals have traps that only show up later. Dilution shrinks your ownership percentage whenever new shares are issued, and control dilution can cost you the company even while you keep shares. Term sheets carry more than valuation: board seats, veto rights and anti-dilution clauses shift power. Vesting, where founders earn their shares back over years, protects the company but surprises founders who skip the fine print. This is education, not legal advice; a startup lawyer earns their fee before you sign anything.",
        practice:
          "A fictional offer: 3 billion rupiah for 25 percent of the company, a board seat for the investor, and four-year founder vesting. List what the founders give up now, what they could give up later, and three questions to ask a lawyer before signing.",
      },
      {
        id: "ca15",
        kind: "practice",
        title: "Test a new direction before leaping",
        lesson:
          "Reinventing yourself works best as a series of small tests, not one dramatic leap. Changing direction starts with inventory: what you can do, what you want more of, and what you want to leave behind. Then probe the new direction cheaply, a side project, a course, a conversation with someone doing it, before committing money or quitting anything. Each test answers a real question, and several small yeses beat one big maybe.",
        practice:
          "Take a fictional professional curious about moving from administration into data work. Write their inventory in three lines, then design two cheap tests they could run this month, each with the question it answers and what result would count as a yes.",
      },
      {
        id: "cs4",
        kind: "milestone",
        title: "Milestone: run one real consultation",
        lesson:
          "Method only proves itself with a real person. A first round with someone you know, at no charge, is a normal way to test your plan and collect honest feedback.",
        milestone:
          "Run your consultation end to end with a real person who has the problem: preparation, session, summary, follow-up. Your client or a mentor confirms it happened and signs off.",
      },
      {
        id: "fr4",
        kind: "milestone",
        title: "Milestone: deliver one real job",
        lesson:
          "A first real job, even a small or free one, teaches what no reading does: quoting, scope creep, delivery and asking to be paid. Indonesian freelancers should also learn their tax duties early; DJP publishes the rules for pekerja bebas.",
        milestone:
          "Complete one real freelance job from first message to delivery and payment, or agreed free delivery. The client or a mentor confirms the delivery and signs off.",
      },
      {
        id: "ca4",
        kind: "milestone",
        title: "Milestone: run one real loop",
        lesson:
          "Preparation counts when it meets a real process: an application, a pitch or an interview for an actual opportunity, finished with a follow-up and your own notes on what to improve.",
        milestone:
          "Complete one real application, proposal or interview loop end to end. A mentor or trusted reviewer looks at your materials and debriefs the outcome with you, then signs off.",
      },
    ],
  },

];
