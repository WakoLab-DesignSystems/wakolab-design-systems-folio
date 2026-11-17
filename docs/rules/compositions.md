# Compositions

| Composition | Slots | Invariants |
| --- | --- | --- |
| `FolioShell` + `FolioHeader` | logo, tools | Header with a bottom border inside the 1280 px column; no header search |
| `CollectionLayout` | title, lead, action, shortlist, filters, count, children | Intro (serif title up to 3.25rem, lead), optional shortlist, then a 4/8 split from 64rem with sticky filters |
| `CollectionGroup` + `EntryContent` | group title; cover, title, summary, meta | Uppercase group titles; entries separated by top borders; 180 px cover column from 48rem |
| `Shortlist` + `ShortlistContent` | heading, status, items, more | Up to three columns of compact entries with a 96 px cover |
| `DetailLayout` + `DetailSection` | back, eyebrow, title, lead, side, figure, sections | 12-column grid from 64rem: head and body over 8 columns, side over 4, sticky; figure only with an image |
| `FormPage` | back, title, lead, form | Centered 46rem column with a serif title |
| `MessagePage` | icon, title, body, action | Left-aligned message in the form frame |
| `RegistrationFrame` + `EditorialPanel` | brand, tools, heading texts, editorial content (eyebrow, title, text, monogram, footer), steps, form, status, footnote | 5/7 split from 64rem; the editorial side uses the panel roles; the monogram defaults to the first letter of the label |
