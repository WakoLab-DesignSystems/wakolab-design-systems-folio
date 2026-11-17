# wakolab-design-systems-folio
Folio: an editorial design system with expressive typography and configurable light/dark colors, fonts and logos.

## Status

**Extraction candidate** for [#1](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio/issues/1), under review, not released.

- **What was extracted:** Folio's components, styles, fonts and neutral compositions, from the WakoLab frontend at `e492bec`.
- **Mechanisms:** copied, with attribution, from the Console design system at `018fe32`, following the [standard](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-standard) at `c2ca848`. Provenance is in [docs/PROVENANCE.md](docs/PROVENANCE.md) and parity evidence in [docs/PARITY.md](docs/PARITY.md).
- **How to use it:** the package is `private`; use it from a clone or a Git dependency.

**The kit is not complete yet.**

| Kit element | State |
|---|---|
| Library, configuration contract, design rules, demo with a menu, checks | In this repository |
| Single offline HTML file (`folio-kit.html`) | **Not delivered yet**: later batch (standard#6) |
| Docker start | **Not delivered yet**: later batch |
| Figma companion (`.fig`) | **Not delivered yet**: after the standard's Figma spike |
| README screenshots | Not delivered yet |
| Icon artwork | **Excluded**: see [Icons](#icons) |

## About Folio

Folio is an editorial system:
- sans interface type with a serif display face;
- a grouped index under group titles, with sticky filters;
- articles with a sticky side card;
- a centered form column;
- a deep-green editorial panel;
- 56px rows, softer radii, a subtle card shadow in light mode only, and 150ms motion.

Default fonts are DM Sans, Source Serif 4, Noto Sans SC and Noto Sans Devanagari, each under its own licence. Design rules are in [docs/rules/](docs/rules/README.md).

## Independent use

This repository is **self-contained**: it needs no other WakoLab or WakoLab-DesignSystems repository, submodule or sibling checkout. It requires Node.js 24 or later, and React and React DOM 19.2.0 in the consuming app.

**Clone and build:**

```bash
git clone https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio.git
```

```bash
cd wakolab-design-systems-folio && npm ci
```

`npm ci` builds `dist/` through `prepare`; `npm pack` then makes a tarball an app can install.

**Or use a Git dependency** (`prepare` builds it; pin a commit):

```json
"wakolab-design-systems-folio": "git+https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio.git#<commit>"
```

## Usage

```tsx
import "wakolab-design-systems-folio/folio.css";
import { FolioRoot, FolioShell, FolioHeader, LogoSlot, Page, Button } from "wakolab-design-systems-folio";

export function App({ config }) {
  return (
    <FolioRoot config={config} assetBase="/design/" defaultMode="system">
      <FolioShell header={<FolioHeader logo={<LogoSlot label="My App" />} />}>
        <Page><h1>Journal</h1><Button>New entry</Button></Page>
      </FolioShell>
    </FolioRoot>
  );
}
```

**The root.** Everything renders inside `FolioRoot`, which outputs `<div data-wds="folio" data-mode="light|dark">`.
- The stylesheet is prebuilt and scoped to that root: it styles nothing outside it, including `html` and `body`.
- Its cascade layers, keyframes, registered properties and font families carry the `wds-folio-` prefix.
- Several roots can coexist on one page.

**`FolioRoot` props:**
- `mode` (controlled) or `defaultMode`;
- `onModeChange`;
- `storageKey` (nothing is stored without it);
- `config`, `assetBase`, `icons`, `onDiagnostic`;
- `className`, `style`, `id`.

**Exports:**
- **Components:** Button, IconButton, the fields, SearchField, ToggleChip, Popover, Dialog, ConfirmDialog, Tabs, Toast, Alert, Badge, Card, Stepper, ConnectionRow, EmptyState, Skeleton.
- **Parts:** FilterChips, Cover, ItemLink, CollectionStatus, LoadMore, KeyValueList, MessageBlock, BackLink, LoadingState, ProblemState, LogoSlot, ToolButton, ModeMenu.
- **Compositions:** FolioHeader, FolioShell, Page, CollectionLayout, CollectionGroup, EntryContent, Shortlist, ShortlistContent, DetailLayout, DetailSection, Panel, FormPage, MessagePage, RegistrationFrame, EditorialPanel.
- **Package files:** `folio.css`, `config.default.json`, `config.schema.json`.

Folio has no keyboard shortcuts layer; the source had none.

## Configuration

Pass a parsed `design-config.json` as `config` (see the [schema](config.schema.json), the [defaults](config.default.json), the [example](examples/config/design-config.json) and the [specification](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-standard/blob/c2ca848d0b44c62a2864f1c23d99b7ec7d34bdc1/docs/CONFIGURATION.md)).

**How values are applied:**
- Every key except `system` and `systemVersion` is optional.
- Every value is used **exactly as written**; omitted keys keep Folio's defaults.
- Folio derives nothing and judges nothing. It only reports structural problems through `onDiagnostic`.

**Colours.** Set per mode (`light`, `dark`), by role:
- **Common roles:** `bg`, `surface`, `surface-2`, `ink`, `muted`, `border`, `control`, `action`, `action-hover`, `action-pressed`, `on-action`, `link`, `focus`, `accent`, `success`, `success-soft`, `warning`, `warning-soft`, `danger`, `danger-soft`, `info`, `info-soft`, `on-danger`, `scrim`, `shadow-card`, `shadow-pop`.
- **Folio-declared roles:** `panel`, `on-panel` and `panel-accent`, for the editorial panel. Each defaults to `#152e37`, `#edf6ee` and `#cef1c5` respectively, in both modes.
- **Omitted roles** keep their own same-mode defaults. The only exception is `action-pressed`, which follows the effective `action-hover`.
- **No effect in Folio:** `accent`; no element uses it.

**Fonts.** Roles are `ui`, `display`, `prose` and `code`, each with your own files (`src`, plus optional `weight`, `style`, `stretch`, `unicodeRange`).
- Files are registered under an internal family name, so your `family` label never collides with other fonts.
- Each role keeps its own default when omitted or removed.
- A file that fails to load restores that role's default and is reported.
- `code` has no visible effect in Folio.

**Logo.**
- Set `mark` and/or `wordmark` (one file, or one per mode), plus `alt`.
- Without logo files, the logo slot shows the label in the serif display face.
- A logo file that fails to load is reported and treated as omitted.

**Paths.** Relative paths resolve against `assetBase`.

## Icons

Folio ships **no icon artwork**. The provenance of the frontend's icon paths is unresolved (standard EXTRACTION_MATRIX §10, E4), so they were not copied, and the documentation and package are checked for it (`scripts/check-artwork.mjs`).

**Supplying icons:**
- Components keep their icon slots, under the names exported as `iconNames`.
- Supply your own set through `FolioRoot icons`: an object of name → SVG path data you are entitled to use, drawn for a 24×24 view box. Keep it in your own project.
- A name without a path renders an empty box of the same size, marked `data-icon-missing`; nothing is substituted.

## Demo

```bash
npm run build && npm run example
```

Open `http://127.0.0.1:5191/demo/`.
- **Menu:** reaches the presentation page and every screen: collection, article, form, message, states, components and the editorial frame.
- **State:** the screen, the mode and the configuration choice (shipped defaults, or the example in `examples/config/`) are kept in the URL hash, so they survive navigation and a reload.
- **Not in the demo yet:** editing values in the page and choosing local font and logo files. They belong to the later HTML-file kit target.

## Checks

| Command | What it checks |
|---|---|
| `npm run check` | Type check |
| `npm test` | Package closure (`check-dist`), icon artwork exclusion (`check-artwork`), contrast of the shipped defaults (`theme-tokens`, 52 pairs), and the Playwright suites: defaults (axe, reflow, identity, menu, panel, overlays, motion), configuration (including the panel roles) and isolation |
| `npm run consumer` | Clones this repository into an empty folder, installs and checks it there, packs it, then builds and checks two neutral consumer apps (tarball and Git dependency) |
| `npm run parity` | Visual parity with the frontend's Folio baselines (needs a separate frontend checkout; see [docs/PARITY.md](docs/PARITY.md)) |

## Design directions

General directions for WakoLab design systems live in the [standard repository](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-standard). That link is documentation only: this repository does not depend on it to build or run.

## Licence

MIT (see [LICENSE](LICENSE)) covers original code and documentation, including the code adapted from the WakoLab frontend and the Console design system (WakoLab H3 decision).

Fonts, Tailwind CSS output and other third-party material keep their own licences: see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and [licenses/](licenses/).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Agents also read [AGENTS.md](AGENTS.md) and [AGENTS-SYNC.md](AGENTS-SYNC.md).
