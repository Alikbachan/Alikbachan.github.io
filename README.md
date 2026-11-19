# Alikbachan project page

A self-contained static site for the paper *One Framework to Diagnose Them All: A Stratified Benchmark
for Bengali LLM Hallucination* (Findings of EACL 2027). Nothing here reads from the rest of the
repository, and the page makes no external requests: fonts, Plotly and the paper PDF are vendored.

```
docs/
├── index.html                 the page
├── .nojekyll                  serve files as-is on GitHub Pages
└── assets/
    ├── alikbachan_eacl2027.pdf    camera-ready paper
    ├── css/style.css
    ├── js/data.js             every plotted number (from paper/camera_ready/figures/src/data)
    ├── js/charts.js           interactive Plotly figures
    ├── js/tables.js           headline results table
    ├── js/site.js             nav, scrollspy, reveal, copy button
    ├── img/teaser.svg|png     Figure 1 of the paper (vector) and a social-preview image
    ├── fonts/                 Source Serif 4, Inter, JetBrains Mono, Noto Serif Bengali (OFL)
    └── vendor/plotly.min.js   Plotly 4.3 (MIT)
```

**Preview locally:** `cd docs && python3 -m http.server` then open http://localhost:8000.

**Publish:** GitHub → Settings → Pages → Deploy from a branch → `main`, folder `/docs`.

**Update numbers:** edit `assets/js/data.js`; every chart and the headline table read from it.
