# sanggup

Learn real-life skills by doing them. Short lessons, then practice in real
life. A finished lesson shows you know the steps; practical milestones only
count when a real instructor or mentor signs off.

Live prototype: https://vanipy.com/sanggup/

## What this is

A prototype (0.2.0) with working paths and two roles. The paths are Cooking
(five stages, with practical milestones), Cleaning & tidying (including KonMari
and other approaches), Prioritizing, Deciding, Habits, Focus, Projects (Kanban
and sprints), Calm & meditation, Disaster preparedness (Indonesia focus), First
aid awareness, Networking, Budgeting & personal finance (Indonesia focus), FIRE
and Writing a book. Each path lists its public sources and states its limits.
The roles:

- **Learner**: works through stages in order. Practice stages are self-logged.
  Practical milestones generate a sign-off code and stay open until an
  instructor approves them.
- **Instructor**: looks up a sign-off code (or sees pending requests on the
  same device), checks the learner actually did the thing, then signs off or
  asks for more practice.

The new paths are short, independently written practice exercises, not copies
of any book or course, and are not endorsed by any author or organization.
Finance, health and safety paths are general education only. The first aid
path is awareness plus how to ask for hands-on training; it does not qualify
anyone. No path gives personal advice or makes decisions for you.

Swimming, driving, languages, music, math and chess now have starter paths
too, so all 20 skills are open. Swimming and driving cover water safety, the
Indonesian licence path and how to find proper instruction only. For skills
like swimming and driving the model is: preparation and reflection in the app, practical milestones with real
instruction. No quiz will ever claim someone is safe to swim or drive.

## Prototype scope

- Static site, no build step, no dependencies, no server.
- All data is demo data in your browser's localStorage. Nothing is sent
  anywhere. Both roles share one device in this prototype; syncing sign-off
  requests between devices is future work.
- Not built yet: accounts, instructor dashboards across students, streaks,
  content for the planned tracks.

## License

AGPL-3.0. See [LICENSE](LICENSE).

## Mascot

**Sang** is a gecko. Deliberately nothing like a certain green owl:

- **Family**: reptile, not a bird.
- **Colors**: violet with a warm amber belly and toe pads, not green.
- **Shape**: low, wide and soft, with a curled tail and sticky toes.
- **Personality**: a patient wall-climber. Sang shows up steadily and cheers
  real-world doing, one small step up the wall at a time. No nagging, no
  guilt trips about broken streaks.

Original SVG artwork: [mascot.svg](mascot.svg), app icon: [icon.svg](icon.svg).

Sign-off in this demo is not authenticated and is not proof of competency.
Use synthetic practice notes only. No real learner records are required.

## Tests

Run `npm ci`, `npx playwright install chromium`, then `npm test`.
For a system Chrome install, set `CHROME_PATH` to its executable.
Regression checks cover the complete five-stage path, same-device review,
more-practice retries, safe rendering of notes, persistence and mobile widths.
GitHub Actions runs the same checks before deploying. Runtime has no dependencies.

## Android (prototype)

`android/` holds a native Android app, package `com.vanipy.sanggup`. It
bundles this web app offline in a WebView, shows an animated Sang (original
frame animation from the mascot) and keeps a local learning streak that the
web app reports when a practice stage is logged. A home-screen widget shows
Sang and the streak. The app has no internet permission. Debug builds only;
nothing is signed or released from this repo yet. The widget uses a
`ViewFlipper` for its animation, and launcher support for that is being tested.
