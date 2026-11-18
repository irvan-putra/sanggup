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
  { id: "swimming", title: "Swimming", tagline: "Water confidence with certified instruction", status: "planned" },
  { id: "driving", title: "Driving", tagline: "Theory in the app, hours behind the wheel with an instructor", status: "planned" },
  { id: "language", title: "Languages", tagline: "Speak early, drill daily", status: "planned" },
  { id: "music", title: "Music", tagline: "Play something real every week", status: "planned" },
  { id: "math", title: "Math", tagline: "Problems you can check yourself", status: "planned" },
  { id: "chess", title: "Chess", tagline: "Patterns, then games", status: "planned" },
];
