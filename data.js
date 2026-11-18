// Skill content for the sanggup prototype.
// Only the cooking path is built. The other tracks are visible so the idea's
// breadth is clear, but they are marked as planned and cannot be started.
window.SANGGUP_TRACKS = [
  {
    id: "cooking",
    title: "Cooking",
    tagline: "From your first dish to a full meal",
    status: "prototype",
    stages: [
      {
        id: "c1",
        kind: "practice",
        title: "Set up before you cook",
        lesson:
          "Mise en place: read the whole recipe first, then put every ingredient and tool on the counter before any heat goes on. Most cooking disasters are setup problems, not cooking problems.",
        practice:
          "Cook one simple dish end to end: a fried egg, tumis kangkung, or aglio e olio. Clean up as you go.",
      },
      {
        id: "c2",
        kind: "practice",
        title: "Knife and heat basics",
        lesson:
          "Claw grip for the guiding hand, tip of the knife stays on the board. Even pieces cook evenly. Medium heat is the default; high heat is for boiling water and searing, not for everything.",
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
          "Salt early, taste often, acid at the end. Protein wants dryness on the surface and patience in the pan: put it down, leave it alone, let it brown.",
        practice:
          "Cook one protein (chicken, tofu, tempeh, fish) with a marinade or dry seasoning you mixed yourself.",
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
  { id: "swimming", title: "Swimming", tagline: "Water confidence with certified instruction", status: "planned" },
  { id: "driving", title: "Driving", tagline: "Theory in the app, hours behind the wheel with an instructor", status: "planned" },
  { id: "language", title: "Languages", tagline: "Speak early, drill daily", status: "planned" },
  { id: "music", title: "Music", tagline: "Play something real every week", status: "planned" },
  { id: "math", title: "Math", tagline: "Problems you can check yourself", status: "planned" },
  { id: "chess", title: "Chess", tagline: "Patterns, then games", status: "planned" },
];
