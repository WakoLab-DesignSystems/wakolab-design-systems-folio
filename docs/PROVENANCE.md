# Provenance: source → destination

Folio was extracted for [#1](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-folio/issues/1) following the standard at `c2ca848d0b44c62a2864f1c23d99b7ec7d34bdc1` ([KIT_PROPOSAL §8](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-standard/blob/c2ca848d0b44c62a2864f1c23d99b7ec7d34bdc1/docs/KIT_PROPOSAL.md), [CONFIGURATION](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-standard/blob/c2ca848d0b44c62a2864f1c23d99b7ec7d34bdc1/docs/CONFIGURATION.md), [CHECKLIST](https://github.com/WakoLab-DesignSystems/wakolab-design-systems-standard/blob/c2ca848d0b44c62a2864f1c23d99b7ec7d34bdc1/docs/CHECKLIST.md)).

**Sources**
- **Design source:** WakoLab/wakolab-front at `e492bec9ced8893d6940879aa8186ac75a48a272`, read only. Nothing in the frontend was changed.
- **Mechanisms:** WakoLab-DesignSystems/wakolab-design-systems-console at `018fe3214e0a118162d202c2f39f1236f37b1936`. They are copied with attribution, never imported, as KIT_PROPOSAL §8 requires.
- **History:** commit `bfd4eff` is the verbatim copy from Console; the later commits are the Folio adaptations, so they can be reviewed as a diff.

**Kinds of file**
- **Copied:** the source's code, with only the listed changes.
- **Adapted:** markup, class names and behaviour are kept, while product inputs become props.
- **Original:** new code for standalone use.

## Identity and panel roles (confirmed against the source)

**Identity.** Checked against the `[data-direction="folio"]` blocks of `design-system/themes.css` (lines 82–160) and the Folio rules of `catalog.css` and `compositions.css`. Each item matches KIT_PROPOSAL §8:
- DM Sans for the interface;
- Source Serif 4 for display, at weight 600 with −0.01em tracking;
- radii 8/12/999 px;
- a 56 px row token;
- a light-mode card shadow and none in dark mode;
- 150 ms motion (`--wl-dur-base`);
- a grouped index under uppercase group titles;
- sticky filters and a sticky article side card from 64rem;
- a figure only when an image exists;
- a centered form column with a serif title.

**Panel roles.** `panel`, `on-panel` and `panel-accent` cover every use of the source's shared literals:

| Role | Default (both modes) | Source |
|---|---|---|
| `panel` | `#152e37` | `theme.css` line 18; background of `.registration-editorial` (`data-surface="dark"`), `compositions.css` lines 63–65 |
| `on-panel` | `#edf6ee` | `theme.css` line 19; text of the same panel |
| `panel-accent` | `#cef1c5` | `theme.css` line 17 (`--color-accent`); `.editorial-eyebrow` (lines 67–68), `.editorial-art` border (line 110), `[data-surface="dark"] :focus-visible` outline (`theme.css` lines 66–67) |

No other use exists in the source. The common `accent` role (`#cef1c5` light, `#2f5c4c` dark) is used only by Console's `.wl-prompt`, `.wl-marker` and row marker, so it has no visible consumer in Folio and is not reused for the panel.

## Components (`src/components/`)

Copied from `web/src/components/ui/*` of the frontend, through Console, where they are unchanged except for:
- Dialog: the dead `backdrop:bg-panel/60` utility is removed (E2);
- Popover: event and focus ownership (R3).

Each file notes both sources. The icons file (`icons.tsx`) keeps the wrapper and the icon names only; **no path data** (E4).

## Parts (`src/parts/`)

| Destination | Source | Kind | Changes |
|---|---|---|---|
| `collection.tsx` | `web/src/features/catalog/parts.tsx` (CategoryChips, Cover, ProjectLink, CatalogStatus, LoadMore), via Console | Adapted | FilterChips, Cover, ItemLink, CollectionStatus, LoadMore; Console's FilterTree (rail) removed |
| `page.tsx` | `project-parts.tsx` (Facts, MessageBlock, BackToProjects, ProjectLoading, ProjectProblem), via Console | Adapted | Unchanged from Console |
| `shell.tsx` | `parts.tsx` (Brand, tool triggers, mode part of AppearanceMenu), via Console | Adapted | LogoSlot uses the source's **serif** brand variant (`wl-brand--serif`, label only); ToolButton, ModeMenu |

## Compositions

| Destination | Source | Kind | Changes |
|---|---|---|---|
| `src/compositions/index.tsx` | `compositions/shells.tsx` (FolioHeader, FolioShell), `shared.tsx` (Page), `FolioHome.tsx` (FolioHome, FolioEntry, FolioMineEntry), `projects.tsx` (FolioProject), `pages.tsx` (form framing, MessagePage) | Adapted | FolioHeader, FolioShell, Page, CollectionLayout, CollectionGroup, EntryContent, Shortlist, ShortlistContent, DetailLayout, DetailSection, Panel, FormPage, MessagePage. Same DOM, classes and order; content is supplied through slots. No keyboard layer (none in the source) |
| `src/compositions/registration.tsx` | `web/src/features/RegistrationShell.tsx`, via Console's RegistrationFrame | Adapted | Editorial side keeps `data-surface="dark"`. EditorialPanel adds the source's editorial structure as slots; the hard-coded **"W" monogram (WakoLab branding) becomes a `monogram` slot** whose default is the first letter of `label` |

## Root and configuration

| Destination | Source | Kind | Changes |
|---|---|---|---|
| `src/root/FolioRoot.tsx`, `context.ts` | Console `ConsoleRoot.tsx`, `context.ts` | Copied | Folio names; root `data-wds="folio"`; font fallback stacks from Folio's tokens (serif for display) |
| `src/root/config.ts` | Console `config.ts` | Copied | System `folio`; declared roles `panel`, `on-panel`, `panel-accent` (CONFIGURATION §2.1) |
| `src/root/fonts.ts` | Console `fonts.ts` | Copied | Family prefix `wds-folio-font-` |

## Styles (`src/styles/`)

| Destination | Source | Kind | Changes |
|---|---|---|---|
| `tokens.css` | `design-system/themes.css` lines 82–160; `:root` block of `theme.css` | Copied | Root selector; WakoLab `--wl-agent*` removed; default font aliases; `--wl-action-pressed`; `--wl-font-code` (own default); the three panel roles |
| `theme.css` | `design-system/theme.css`, via Console | Copied | Panel literals → panel roles; focus outline inside the panel → `panel-accent`; agent roles removed |
| `base.css`, `global-rules.css`, `root.css` | `web/src/style.css`, `compositions.css`, via Console | Copied | Console → Folio in comments |
| `folio-parts.css` | `design-system/catalog.css` | Copied | Shared parts, the Folio block, Folio responsive and page rules; removed source lines are listed in the file |
| `registration.css` | `design-system/compositions.css` lines 2–28, 63–68, 98–117 | Copied | Folio prefixes dropped; panel literals → panel roles |
| `folio.css` | Composition of `web/src/style.css`, via Console | Adapted | Entry for the build |

The build (`scripts/build.mjs`, copied from Console) prefixes every selector with `[data-wds="folio"]`, maps `:root`/`html`/`body` to the root, and renames layers, keyframes and `@property` names with `wds-folio-`.

## Not extracted

- **Product content** that the frontend composes into Folio's slots: JoinPanel, Access, membership, roles, stages, repositories, members, tools, rewards, catalog contracts, API ports, i18n, the appearance preference key, and the profile-page rules (`.home-composition`, `.home-profile`).
- **Console- and Marquee-specific rules** and the development gallery.
- **Icon artwork** (E4).

## Examples and checks

**Original, or adapted from Console with attribution:**
- `examples/demo`: presentation page and screens with a menu.
- `examples/config`: example configuration.
- `examples/harness`: test harness.
- `examples/parity`: parity candidates, with the fixture texts copied from what the frontend renders.
- `tests/*.spec.ts`.
- `scripts/*`, including `check-artwork.mjs` with the same one-way icon hashes.
