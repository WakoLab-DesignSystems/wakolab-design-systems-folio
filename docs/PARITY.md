# Visual parity with the frontend (EXTRACTION_MATRIX §8)

Evidence for review of [#1](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio/issues/1); not an acceptance decision.

**The strict gate (no difference except listed deliberate ones) does not pass**, and the script still reports every nonzero pixel as a failure. Ten cases keep small stable differences whose cause is not identified.

**Bounded exception (Orc, [decision 6952533664](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio/issues/1#issuecomment-6952533664), after Revex's [review 5941336931](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio/pull/5#pullrequestreview-5941336931)).**
- **What it covers:** only the ten case/coordinate/cluster/amplitude sets recorded in `docs/parity/run-1` (5–59 pixels, per-case maximum delta at most 7/255), at the reviewed source.
- **What it accepts:** the documented edge residue for this extraction; it does not explain its cause.
- **What it does not do:**
  - change any threshold;
  - extend to other screens, states, browsers or later rendering changes;
  - import the exception granted to Console (console#5), which is not transposed.
- **Reference-variable case:** loading / light / 768 (0 → 108) is not part of the exception. It is attributed to variation on the reference side.

> **Correction note (after review 5941336931).** The first account gave "86 of 96" without qualification, both here and in the PR and issue summaries. That figure is the **first launch only**:
> - first launch: **86/96** pixel-identical;
> - second launch: **85/96**;
> - identical in both launches: **85** cases.
>
> The ten stable cases and the one reference-variable case (loading / light / 768) are disjoint. Raw data and crops are unchanged.

## Run 1 — Des, candidate built from the sources at `0588fbd`

**Code.** Package sources unchanged since `0588fbd`; later commits change examples, tests, scripts and documentation only.

**Environment.** The capture settings of `scripts/parity.mjs`, copied from Console with attribution:
- Chromium 153.0.8010.12 with Playwright 1.56.1;
- 360/768/1024/1440 px wide, 900 px high, full page;
- device scale factor 1, reduced motion;
- fonts awaited, and native selects laid out again after the fonts load, on both sides;
- animations disabled.

**Second-launch controls.** Every case was captured again in a second browser launch, to compare baseline against baseline and candidate against candidate.

**Baselines.** WakoLab/wakolab-front at `e492bec`, read only, from a separate checkout; nothing was written into it.
- Prototype screens (Folio direction): collection, article (detail), not-found, message (the MVP "propose" page), loading, unavailable, and the session dialog open over the collection.
- Fixture screens: `examples/parity/fixture` rendered with the frontend's own modules, through `examples/parity/front-baseline`:
  - a real neutral form;
  - the component sheet;
  - a destructive confirmation dialog;
  - the registration frame (the frontend's real `RegistrationShell`);
  - an open popover with a visible toast.

**Candidates.**
- `examples/parity`, with the same synthetic texts as the prototype (`examples/parity/fixtures.ts`);
- the same fixture rendered with the built package (`folio-sys.tsx`).

**Product content in slots.** The article's side panel holds the frontend's JoinPanel and Access markup, styled by `examples/parity/parity.css`. Those rules stay in the frontend and are not part of the package.

**Registration frame.** It uses `EditorialPanel` with the label "WakoLab". Its default monogram, the first letter, therefore renders the same "W" as the source's hard-coded letter.

**Icons.**
- The frontend's icon paths are read from the separate checkout at run time and injected into the candidates only. Nothing is written to this repository.
- Crops of differing areas are masked wherever an icon `<svg>` lies. **No crop intersected an icon in this run**, so nothing was masked.
- Full-page images are not committed, because they contain the icon artwork.

### Result

96 comparisons (12 screens × 4 widths × 2 modes). Page sizes are equal in all of them. Cells: differing pixels in the first launch, with the largest per-channel difference out of 255.

| Screen | Light 360 | Light 768 | Light 1024 | Light 1440 | Dark 360 | Dark 768 | Dark 1024 | Dark 1440 |
|---|---|---|---|---|---|---|---|---|
| collection | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| detail | 0 | 0 | 0 | 0 | 0 | 0 | 14 (≤1) | 0 |
| notFound | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| message | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| loading | 0 | 0 → 108¹ | 0 | 0 | 59 (≤2) | 41 (≤2) | 31 (≤7) | 31 (≤2) |
| unavailable | 0 | 30 (≤2) | 5 (≤1) | 0 | 0 | 25 (≤2) | 29 (≤7) | 14 (≤2) |
| dialog | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| form | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| components | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| confirm | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| registration | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| overlays | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

¹ Loading / light / 768: 0 in the first launch and 108 in the second. The baseline differs from itself by 108 pixels across launches; the candidate self-control is 0. This is variability on the baseline side; the candidate matches the first baseline exactly.

- **Counts:**
  - **86 of 96** comparisons are pixel-identical in the first launch;
  - **85 of 96** in the second launch;
  - **85** are identical in both launches.
- **Form, component sheet, confirmation dialog, registration frame, open popover with visible toast, collection, not-found, message and dialog:** identical in every case, in both launches.
- **10 cases with stable differences:**
  - loading in dark at all widths;
  - unavailable at light 768 and 1024, and in dark at 768, 1024 and 1440;
  - article in dark at 1024.
- **Size of these differences:** 5 to 59 pixels per case, at most 7/255 per channel, and none above 16/255.
- **Stability:** each case gives the same count in the second launch, with baseline and candidate self-controls both at 0. They are **not capture noise**.
- **Localization** (`docs/parity/run-1/differences/*.json` lists every pixel with both colours; `docs/parity/run-1/evidence/` holds 8× crops). Only anti-aliased pixels on the edges of rounded shapes differ:
  - the pill borders of the filter chips;
  - the corners of the search field;
  - a corner of the article's facts card or panel.
  - There is no displacement or content difference in the crops.
- **Cause not identified.** The collection screen shows the same filters column without any difference, and the same components are pixel-identical on the fixture screens. No further investigation was done, as instructed (bounded evidence instead of open-ended investigation).

Deliberate differences: none. Bounded exception: the ten stable cases above, as recorded (see the top of this page).

### Applicability after the correction delta (`a19fa95..ea4ce28`)

The F-R1/F-R2 corrections change:
- `src/root/config.ts`: only invalid font declarations, which no parity screen uses;
- the end-of-file blank line of `src/styles/theme.css`: the built `dist/folio.css` is **byte-identical** to the reviewed build (same SHA-256 `d9c84a35…`);
- the demo, tests and documentation.

No rendering or capture input of the parity screens changed, so run 1 was **not re-captured**. Its evidence is reused as recorded (Des, Chromium 153.0.8010.12). Revex reviews the continued applicability of the exception.

### Coverage and limits

- **Captured states:**
  - the prototype screens and fixture screens listed above, in the static states shown;
  - the session dialog and the destructive confirmation dialog open;
  - one popover open;
  - one toast visible.
- **Not captured:**
  - hover, focus and pressed states;
  - popover alignment to the end;
  - the frontend's signed-in "mine" section, so `Shortlist` has no baseline;
  - the article's bounded figure (no prototype project has an approved cover);
  - Folio parts outside these screens.
- **Not re-run** in the Chromium version used by other reviewers.

## Reproduce

```bash
npm ci
```

```bash
npm run build
```

```bash
npx vite --config examples/vite.config.ts
```

With the frontend prototype at `e492bec` served on `http://127.0.0.1:5174/prototype/index.html`, and the fixture baseline built from the same checkout and served on `http://127.0.0.1:5175/index.html`:

```bash
FRONT=<frontend checkout> OUT=<folder> node <frontend checkout>/node_modules/vite/bin/vite.js build --config examples/parity/front-baseline/vite.config.mjs
```

```bash
node scripts/parity.mjs --control --icons <frontend checkout>/web/src/components/ui/icons.tsx
```
