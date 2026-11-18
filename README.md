# sanggup

Learn real-life skills by doing them. Short lessons, then practice in real
life. A finished lesson shows you know the steps; practical milestones only
count when a real instructor or mentor signs off.

Live prototype: https://vanipy.com/sanggup/

## What this is

A first prototype (0.1.0) with one working path, **Cooking: from your first
dish to a full meal**, and two roles:

- **Learner**: works through stages in order. Practice stages are self-logged.
  Practical milestones generate a sign-off code and stay open until an
  instructor approves them.
- **Instructor**: looks up a sign-off code (or sees pending requests on the
  same device), checks the learner actually did the thing, then signs off or
  asks for more practice.

Swimming, driving, languages, music, math and chess are shown as planned
tracks so the shape of the idea is visible. They are not built, and nothing
in the app pretends otherwise. For skills like swimming and driving the model
is: preparation and reflection in the app, practical milestones with real
instruction. No quiz will ever claim someone is safe to swim or drive.

## Prototype scope

- Static site, no build step, no dependencies, no server.
- All data is demo data in your browser's localStorage. Nothing is sent
  anywhere. Both roles share one device in this prototype; syncing sign-off
  requests between devices is future work.
- Not built yet: accounts, instructor dashboards across students, streaks,
  content for the other tracks.

## License

AGPL-3.0. See [LICENSE](LICENSE).
