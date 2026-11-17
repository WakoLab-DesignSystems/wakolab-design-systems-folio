# Components and states

All components are the frontend's, unchanged except where noted in [PROVENANCE](../PROVENANCE.md). Every one appears in the demo's *Components* screen.

| Component | Variants and states |
| --- | --- |
| Button | primary, secondary, ghost, destructive; sm, md, lg; busy (keeps its name, `aria-busy`); disabled |
| IconButton | labelled icon-only button |
| TextField, CodeField | label, hint, error (`aria-invalid`, described by the message), disabled, read-only |
| Select, ChoiceGroup, Checkbox | labelled; checked and focus states |
| SearchField | visible or hidden label; clear button when filled |
| ToggleChip, FilterChips | pressed with a check mark; optional note; two-level filters |
| Tabs, TabPanel | arrow keys move between tabs |
| Popover | opens from a trigger; Escape inside closes it and returns focus; an outside press closes it without moving focus |
| Dialog, ConfirmDialog | modal; focus moves inside and returns to the trigger; backdrop uses `scrim` |
| Toast | polite live region; never takes focus |
| Alert, Badge, Card, Stepper, ConnectionRow, EmptyState, Skeleton | static states as shown |
| Cover | image when given; otherwise initials on a dotted ground |
| LogoSlot | configured mark/wordmark, or the serif text fallback |
| ModeMenu, ToolButton | header tools |
