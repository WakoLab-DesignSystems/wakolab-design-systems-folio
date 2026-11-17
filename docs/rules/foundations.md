# Foundations

## Colour roles
- The common roles of the standard's CONFIGURATION §2: `bg`, `surface`, `surface-2`, `ink`, `muted`, `border`, `control`, `action`, `action-hover`, `action-pressed`, `on-action`, `link`, `focus`, `accent`, status pairs, `on-danger`, `scrim`, `shadow-card`, `shadow-pop`. Defaults are in [config.default.json](../../config.default.json); `action-pressed` defaults to the effective `action-hover`.
- **Folio-declared roles** (CONFIGURATION §2.1), same default in both modes:
  - `panel` `#152e37` — background of the editorial panel;
  - `on-panel` `#edf6ee` — text on it;
  - `panel-accent` `#cef1c5` — eyebrow, decorative ring and focus outline inside it.
- Each omitted role keeps its own default; nothing follows another role.
- `accent` has **no visible effect** in Folio (no element uses it); `code` font role likewise.

## Typography
- `ui` and `prose`: DM Sans, then the shared fallback (Noto Sans SC, Noto Sans Devanagari, system-ui, sans-serif).
- `display`: Source Serif 4, then "Noto Serif", Georgia and the shared fallback.
- `code`: DM Sans (no visible consumer).
- Interface size 16 px; leads in prose with a 1.6–1.65 line height and a 62–68 character measure.

## Spacing, radius, elevation, density
- Radii: controls 8 px, cards 12 px, chips pill (999 px), covers 8 px.
- Card shadow `0 1px 2px` at 6 % in light mode, none in dark; overlays `0 24px 64px`.
- Row-height token 56 px; interactive controls at least 44 px high.
- Page content up to 1280 px wide, with 16 / 24 / 32 px side padding at 0 / 40rem / 64rem.

## Focus
- 2 px outline in `focus`, offset 2 px; inside the editorial panel the outline uses `panel-accent`.

## Icons
- Components keep icon slots; Folio ships **no icon artwork**. Supply your own icon set (see the README).
