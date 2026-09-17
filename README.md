# homepage-fablefix

A design pass over the ReLeaf homepage. It is a **proposal, held apart from the
wiki**: this repository contains `index.html` and only the files that page
loads, so the changes can be read, argued with and merged one at a time.

- The live wiki homepage: <https://timmy97-tw.github.io/releaf-wiki/>
- This version: <https://timmy97-tw.github.io/homepage-fablefix/>

The first commit is the homepage exactly as it stood on the wiki
(`releaf-wiki@c4408d0`). Everything after it is this pass, so
`git diff 50c8ce2..HEAD` is the whole proposal and nothing else.

## What this pass was trying to fix

The homepage already argues its case better than most iGEM wikis: three beats of
problem, a reveal, the evidence, the map. Read cold, on a clock, four things got
in the way.

1. **A visitor had to read jargon before plain words.** The hero said
   "a stress-responsive optogenetic bioreactor for precision plant protection",
   which is the right sentence for a judge and the wrong one for a parent.
2. **There was no way to see how long the page was, or to jump.** It is about
   twenty-five screens. A judge on a two-minute pass had a scrollbar and hope.
3. **The vision section, which is where the future impact lives, was two grey
   boxes reading "Render pending".** The single weakest thing on a public page,
   sitting exactly where a judge looks for ambition.
4. **The big picture, which is the answer to "how do the parts come together",
   was titled "The whole ReLeaf project." and came with no instructions.** The
   figure is excellent and it was asking the reader to work out its own rules.

## The changes

Grouped by why, not by file. Every number and claim added is one the page or its
sub-pages already carry; nothing new is asserted anywhere.

### 1. The hero says what it is in plain words

- Added one line of credentials above the mark: GEMS Taiwan, iGEM 2026,
  Biomanufacturing Village. A judge should not have to reach the footer for it.
- Rewrote the sub-heading in plain language: *Sealed bacteria in a small reactor
  make plant protectants beside the field, on the day they are needed.*
- Moved the technical name (stress-responsive, optogenetic, perfusion) down into
  the dark act, where the machine it describes is on screen.
- Added one way in at the bottom right: **Start with the problem**.

The hero's composition contract is intact. The head is still short, the crop is
untouched, and the type still clears Farmer Chen's face at 1280 and 1366 (the
sub finishes about 140px above her hair; measured, not assumed).

### 2. A chapter rail, so the page can be navigated

A dot rail in the right margin, from 1180px up. The chapter you are in names
itself **while the page moves** and the name fades when you stop, so it never
sits on the figure beside it; the others name themselves on hover and on focus.
It carries no content of its own, only headings already on the page, and it
re-colours itself over the dark sections by asking what is painted behind it.

The big picture's wing arithmetic now subtracts the rail's margin, so the outer
column of cut-outs no longer runs under the dots.

### 3. The vision section does its job now

- The two "Render pending" boxes hold **drawn schematics** instead: a hydroponic
  loop and an irrigation line, in the same line language as the three routes in
  section 02, with the protectant travelling in water the farm already moves.
  Each is labelled *Schematic. No reactor has run on this system.*
  **The renders are still expected.** The moment
  `assets/img/home/vision-hydroponics-1200.jpg` and `vision-field-1200.jpg`
  exist, the drawing is replaced by the render and the caption label swaps with
  it. Nothing needs editing.
- Added **"One box, and three ways it grows"**: the output position is a socket,
  the drawings are open and the parts are catalogue, and containment is what
  lets engineered cells stand beside a crop. That last one is the answer to
  section 02, and it is the biggest claim the project can honestly make.
- Added **"Four things stand between the bench and a farm"**: the light-to-dose
  curve, transfer and fouling, field temperature, and a contained-use route.
  All four were already declared open elsewhere on the page. Collected in one
  place they read as a team that knows what it has not measured.

### 4. The order of the closing act

Was: product → vision → big picture → reach.
Now: product → big picture → reach → vision.

The year of work is no longer interrupted by a section about the future, and the
two "where this goes" sections run together at the end. The big picture and the
map stay adjacent, because the trunk's tail line runs out of the last step and
into the map; they are one figure in two parts and must not be separated.

### 5. Smaller things

- The big picture is titled **"Five steps carry one dose from the weather to the
  crop."** and has a lede that names the five steps and says how to read the
  figure. Its label said twenty-eight pieces of work; there are twenty-nine.
- The eight chips under the ReLeaf name now carry a visible label: *Designed for
  the eight needs in 01–03*. They are the eight tags the reader collected on the
  way down, and without the label they read as decoration. It says "designed
  for" and not "meets", because on-demand and right-amount are still intent.
- Human practices said "the timeline below is ordered by what moved", with the
  timeline hidden until its artwork lands. It now says the cards name what moved.
- **Bug, pre-existing:** the reach dial's autoplay block sits outside its file's
  closure in `big-picture-v2.js`, so it threw `ReferenceError: reduced is not
  defined` on every load and the dial never played its first move. Fixed where
  it broke. Worth taking back to the wiki on its own.

## What was deliberately not touched

The problem section's argument and its sources, the dark act and its WebGL
stage, the synbio figure, the product ring, the map and the dial, the outro, the
doors, the palette, the type, and every photograph and crop. This is a pass over
the seams, not a redesign.

## Two things for the team, not for the code

- **Farmer Chen's image consent is still marked outstanding** in the project
  brief, and she is on this page twice, including the closing photograph. That
  needs settling before the wiki goes live, whichever version of the homepage
  ships.
- The iHP timeline artwork is still missing (`assets/img/home/ihp-timeline.png`).
  The figure hides itself until the file exists, so nothing is broken meanwhile.

## Running it

```bash
python3 -m http.server 8874
```

Then open <http://localhost:8874/>. There is no build step.

## Merging back into the wiki

Copy these five files over the wiki's own and delete one line:

| File | What changed |
| --- | --- |
| `index.html` | hero, chapter rail, spec label, iHP line, big-picture heading and lede, vision section rebuilt and moved |
| `assets/css/home.css` | hero credentials and cue, chapter rail, vision drawings, levers, gates |
| `assets/css/home-problem.css` | the spec label under the ReLeaf name |
| `assets/css/big-picture-v2.css` | heading and lede spacing, the rail's margin in the wing arithmetic |
| `assets/js/home.js` | chapters (piece 6) and the dose animation (piece 7) |
| `assets/js/big-picture-v2.js` | the `reduced` fix |

Then delete `assets/js/preview-links.js` and the one `<script>` line that loads
it in `index.html`. That file exists only because this repository has no
sub-pages: it sends links to pages that are not here to the published wiki, so a
reviewer does not spend the review clicking 404s. It is marked as preview-only in
both places.

## Licence

Same as the wiki: content under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
