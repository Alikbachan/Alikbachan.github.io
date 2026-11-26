# Alikbachan project page

A self-contained static site for the paper *One Framework to Diagnose Them All: A Stratified Benchmark
for Bengali LLM Hallucination* (Findings of EACL 2027), served at https://alikbachan.github.io/.
The paper itself is on arXiv: https://arxiv.org/abs/2611.26336. Apart from the links to the paper, code,
dataset and competition, the page makes no external requests: fonts and Plotly are vendored.

```
.
├── index.html                 the page
├── .nojekyll                  serve files as-is on GitHub Pages
└── assets/
    ├── css/style.css
    ├── js/data.js             every plotted number (from camera_ready/figures/src/data in the paper sources)
    ├── js/charts.js           interactive Plotly figures
    ├── js/tables.js           headline results table
    ├── js/site.js             nav, scrollspy, reveal, copy button
    ├── img/teaser.svg|png     Figure 1 of the paper (vector) and a social-preview image
    ├── fonts/                 Source Serif 4, Inter, JetBrains Mono, Noto Serif Bengali (OFL)
    └── vendor/plotly.min.js   Plotly (MIT)
```

**Preview locally:** `python3 -m http.server` in the repository root, then open http://localhost:8000.

**Publish:** GitHub → Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`.

**Update numbers:** edit `assets/js/data.js`; every chart and the headline table read from it.
