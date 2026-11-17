# Visual parity report

```json
{
  "prototypeBaseline": "http://127.0.0.1:5174/prototype/index.html",
  "prototypeCandidate": "http://127.0.0.1:5191/parity/index.html",
  "fixtureBaseline": "http://127.0.0.1:5175/index.html",
  "fixtureCandidate": "http://127.0.0.1:5191/parity/fixture/index.html",
  "browser": "Chromium 153.0.8010.12",
  "playwright": "1.56.1",
  "viewportHeight": 900,
  "deviceScaleFactor": 1,
  "reducedMotion": "reduce",
  "fullPage": true,
  "animations": "disabled",
  "control": "second browser launch, same settings",
  "icons": "injected into candidates at run time from the frontend checkout (25 names)"
}
```

| Screen | Mode | Width | Sizes | Differing pixels | Max delta | Clusters (x0,y0–x1,y1: pixels) | Base vs base | Cand vs cand | 2nd launch |
|---|---|---|---|---|---|---|---|---|---|
| collection | light | 360 | 360×3161 | 0 | 0 |  | 0 | 0 | 0 |
| collection | light | 768 | 768×1615 | 0 | 0 |  | 0 | 0 | 0 |
| collection | light | 1024 | 1024×1603 | 0 | 0 |  | 0 | 0 | 0 |
| collection | light | 1440 | 1440×1444 | 0 | 0 |  | 0 | 0 | 0 |
| collection | dark | 360 | 360×3161 | 0 | 0 |  | 0 | 0 | 0 |
| collection | dark | 768 | 768×1615 | 0 | 0 |  | 0 | 0 | 0 |
| collection | dark | 1024 | 1024×1603 | 0 | 0 |  | 0 | 0 | 0 |
| collection | dark | 1440 | 1440×1444 | 0 | 0 |  | 0 | 0 | 0 |
| detail | light | 360 | 360×1113 | 0 | 0 |  | 0 | 0 | 0 |
| detail | light | 768 | 768×924 | 0 | 0 |  | 0 | 0 | 0 |
| detail | light | 1024 | 1024×905 | 0 | 0 |  | 0 | 0 | 0 |
| detail | light | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| detail | dark | 360 | 360×1113 | 0 | 0 |  | 0 | 0 | 0 |
| detail | dark | 768 | 768×924 | 0 | 0 |  | 0 | 0 | 0 |
| detail | dark | 1024 | 1024×905 | 14 | 1 | 990,676–991,680: 9; 990,813–991,816: 5 | 0 | 0 | 14 |
| detail | dark | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | light | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | light | 768 | 768×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | light | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | light | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | dark | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | dark | 768 | 768×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | dark | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| notFound | dark | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | light | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | light | 768 | 768×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | light | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | light | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | dark | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | dark | 768 | 768×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | dark | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| message | dark | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| loading | light | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| loading | light | 768 | 768×900 | 0 | 0 |  | 108 | 0 | 108 |
| loading | light | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| loading | light | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| loading | dark | 360 | 360×900 | 59 | 2 | 16,321–16,322: 2; 16,351–17,353: 4; 16,388–18,405: 21; 16,440–18,457: 31; 109,457–109,457: 1 | 0 | 0 | 59 |
| loading | dark | 768 | 768×900 | 41 | 2 | 24,325–25,327: 4; 304,349–319,359: 5; 376,349–380,350: 8; 24,362–26,379: 21; 290,375–302,379: 3 | 0 | 0 | 41 |
| loading | dark | 1024 | 1024×900 | 31 | 7 | 329,304–333,305: 5; 45,365–45,365: 1; 93,365–106,404: 16; 298,393–298,393: 1; 45,404–45,417: 3; 125,429–127,445: 5 | 0 | 0 | 31 |
| loading | dark | 1440 | 1440×900 | 31 | 2 | 392,364–407,374: 5; 464,364–468,365: 8; 125,366–125,366: 1; 173,366–186,394: 12; 378,390–390,394: 3; 254,394–255,394: 2 | 0 | 0 | 31 |
| unavailable | light | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| unavailable | light | 768 | 768×900 | 30 | 2 | 24,325–25,326: 4; 24,362–26,379: 26 | 0 | 0 | 30 |
| unavailable | light | 1024 | 1024×900 | 5 | 1 | 328,303–330,304: 5 | 0 | 0 | 5 |
| unavailable | light | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| unavailable | dark | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| unavailable | dark | 768 | 768×900 | 25 | 2 | 24,325–25,327: 4; 24,362–26,379: 21 | 0 | 0 | 25 |
| unavailable | dark | 1024 | 1024×900 | 29 | 7 | 328,303–330,304: 4; 45,365–45,365: 1; 93,365–106,404: 16; 45,404–45,417: 3; 125,429–127,445: 5 | 0 | 0 | 29 |
| unavailable | dark | 1440 | 1440×900 | 14 | 2 | 125,366–125,366: 1; 173,366–186,394: 12; 254,394–254,394: 1 | 0 | 0 | 14 |
| dialog | light | 360 | 360×3161 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | light | 768 | 768×1615 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | light | 1024 | 1024×1603 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | light | 1440 | 1440×1444 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | dark | 360 | 360×3161 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | dark | 768 | 768×1615 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | dark | 1024 | 1024×1603 | 0 | 0 |  | 0 | 0 | 0 |
| dialog | dark | 1440 | 1440×1444 | 0 | 0 |  | 0 | 0 | 0 |
| form | light | 360 | 360×1362 | 0 | 0 |  | 0 | 0 | 0 |
| form | light | 768 | 768×1164 | 0 | 0 |  | 0 | 0 | 0 |
| form | light | 1024 | 1024×1174 | 0 | 0 |  | 0 | 0 | 0 |
| form | light | 1440 | 1440×1174 | 0 | 0 |  | 0 | 0 | 0 |
| form | dark | 360 | 360×1362 | 0 | 0 |  | 0 | 0 | 0 |
| form | dark | 768 | 768×1164 | 0 | 0 |  | 0 | 0 | 0 |
| form | dark | 1024 | 1024×1174 | 0 | 0 |  | 0 | 0 | 0 |
| form | dark | 1440 | 1440×1174 | 0 | 0 |  | 0 | 0 | 0 |
| components | light | 360 | 360×2438 | 0 | 0 |  | 0 | 0 | 0 |
| components | light | 768 | 768×2278 | 0 | 0 |  | 0 | 0 | 0 |
| components | light | 1024 | 1024×2278 | 0 | 0 |  | 0 | 0 | 0 |
| components | light | 1440 | 1440×2278 | 0 | 0 |  | 0 | 0 | 0 |
| components | dark | 360 | 360×2438 | 0 | 0 |  | 0 | 0 | 0 |
| components | dark | 768 | 768×2278 | 0 | 0 |  | 0 | 0 | 0 |
| components | dark | 1024 | 1024×2278 | 0 | 0 |  | 0 | 0 | 0 |
| components | dark | 1440 | 1440×2278 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | light | 360 | 360×2438 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | light | 768 | 768×2278 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | light | 1024 | 1024×2278 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | light | 1440 | 1440×2278 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | dark | 360 | 360×2438 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | dark | 768 | 768×2278 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | dark | 1024 | 1024×2278 | 0 | 0 |  | 0 | 0 | 0 |
| confirm | dark | 1440 | 1440×2278 | 0 | 0 |  | 0 | 0 | 0 |
| registration | light | 360 | 360×1293 | 0 | 0 |  | 0 | 0 | 0 |
| registration | light | 768 | 768×998 | 0 | 0 |  | 0 | 0 | 0 |
| registration | light | 1024 | 1024×1115 | 0 | 0 |  | 0 | 0 | 0 |
| registration | light | 1440 | 1440×1150 | 0 | 0 |  | 0 | 0 | 0 |
| registration | dark | 360 | 360×1293 | 0 | 0 |  | 0 | 0 | 0 |
| registration | dark | 768 | 768×998 | 0 | 0 |  | 0 | 0 | 0 |
| registration | dark | 1024 | 1024×1115 | 0 | 0 |  | 0 | 0 | 0 |
| registration | dark | 1440 | 1440×1150 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | light | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | light | 768 | 768×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | light | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | light | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | dark | 360 | 360×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | dark | 768 | 768×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | dark | 1024 | 1024×900 | 0 | 0 |  | 0 | 0 | 0 |
| overlays | dark | 1440 | 1440×900 | 0 | 0 |  | 0 | 0 | 0 |
