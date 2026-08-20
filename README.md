# Taurus Student Council Election Website

This is a front-end DEMO/template for a student council election portal inspired by the public-facing structure and leadership-focused messaging of The Taurus School website.

## Included

- 11 election positions:
  - Head Boy
  - Head Girl
  - Deputy Head Boy
  - Deputy Head Girl
  - Red / Bradford House Captain
  - Blue / Aberdeen House Captain
  - Yellow / Hereford House Captain
  - Green / Brangus House Captain
  - Drama / Debate Society Head
  - Sports Society Head
  - Media Society Head
- Candidate cards with:
  - Name
  - Class
  - Picture
  - Voting symbol
- One ballot per browser session until an authorized administrator opens the next ballot.
- Refreshing the page does NOT reopen a submitted ballot.
- Results are hidden until the configured vote threshold is reached.
- Results are displayed as vote-count bars.
- Demo admin area for adding candidates and changing the results threshold.
- Demo reset button.

## Important for a real school election

This demo stores everything in browser localStorage. That is useful for showing the design and interaction, but it is NOT secure enough for an actual election.

For a real deployment, votes should be stored on a server/database and each student should be authenticated with a school-controlled identifier. The server should enforce one ballot per student and the administrator action should be protected by a server-side staff account/session. The results threshold must also be enforced server-side.

## Run it

Open `index.html` in a browser.

Demo admin PIN: `2468`

The PIN is intentionally visible in this demo and must NOT be used in production.
