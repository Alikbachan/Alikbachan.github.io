/* Alikbachan project page — interactive figures (Plotly). Data: assets/js/data.js */
(function () {
  "use strict";
  const A = window.ALIK;
  const JUDGES = ["Qwen2.5-32B", "TigerLLM-9B-it", "Gemma-2-9B", "Llama-3.1-8B"];
  const JC = { "Qwen2.5-32B": "#211cbf", "TigerLLM-9B-it": "#7a4dff", "Gemma-2-9B": "#1f94cc", "Llama-3.1-8B": "#bc45d8" };
  const JM = { "Qwen2.5-32B": "circle", "TigerLLM-9B-it": "diamond", "Gemma-2-9B": "square", "Llama-3.1-8B": "triangle-up" };
  const FAM = { A: "Content / parametric", B: "Context / intrinsic", C: "Linguistic / cultural", D: "Adversarial / robustness", E: "Meta / pipeline" };
  const FC = { A: "#211cbf", B: "#1f94cc", C: "#7a4dff", D: "#bc45d8", E: "#8a8fa0" };
  const INK = "#14161f", MUTED = "#5b6474", FAINT = "#9aa1ae", GRID = "#eceef5", MAJ = "#b8bccb";
  const SANS = "Inter, system-ui, sans-serif";

  const narrow = () => window.innerWidth < 640;
  const fmt = (v, d = 3) => (v == null ? "—" : v.toFixed(d));

  function base(extra) {
    const n = narrow();
    const L = {
      font: { family: SANS, size: n ? 11 : 12.5, color: INK },
      paper_bgcolor: "#fff", plot_bgcolor: "#fff",
      margin: { l: n ? 48 : 64, r: n ? 10 : 24, t: n ? 16 : 20, b: n ? 48 : 56 },
      hoverlabel: { bgcolor: "#fff", bordercolor: "#d9d9f0", font: { family: SANS, size: 12.5, color: INK }, align: "left" },
      legend: { orientation: "h", x: 0, y: 1.02, yanchor: "bottom", font: { size: n ? 10.5 : 12 }, bgcolor: "rgba(0,0,0,0)" },
      xaxis: { gridcolor: GRID, zeroline: false, linecolor: "#d9d9f0", tickcolor: "#d9d9f0", ticks: "outside", ticklen: 4, automargin: true, title: { font: { size: n ? 11 : 12.5, color: MUTED } } },
      yaxis: { gridcolor: GRID, zeroline: false, linecolor: "#d9d9f0", automargin: true, title: { font: { size: n ? 11 : 12.5, color: MUTED } } },
      hovermode: "closest",
      dragmode: false,
      transition: { duration: 450, easing: "cubic-in-out" },
    };
    return deepMerge(L, extra || {});
  }
  function deepMerge(a, b) {
    for (const k in b) {
      if (b[k] && typeof b[k] === "object" && !Array.isArray(b[k]) && a[k] && typeof a[k] === "object") a[k] = deepMerge({ ...a[k] }, b[k]);
      else a[k] = b[k];
    }
    return a;
  }
  const CONFIG = { responsive: true, displaylogo: false, scrollZoom: false,
    modeBarButtonsToRemove: ["zoom2d", "pan2d", "select2d", "lasso2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d", "hoverClosestCartesian", "hoverCompareCartesian", "toggleSpikelines"],
    toImageButtonOptions: { format: "svg", scale: 1 } };
  function draw(id, traces, layout) { const el = document.getElementById(id); if (el) Plotly.react(el, traces, layout, { ...CONFIG, toImageButtonOptions: { format: "svg", filename: "alikbachan_" + id } }); }

  /* segmented control helper: <div class="seg" data-for="id"> <button data-v=..> */
  function seg(name, onChange) {
    const box = document.querySelector(`.seg[data-seg="${name}"]`);
    if (!box) return () => null;
    const btns = [...box.querySelectorAll("button")];
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      onChange(b.dataset.v);
    }));
    return () => (btns.find((b) => b.getAttribute("aria-pressed") === "true") || btns[0]).dataset.v;
  }

  const head = (rel, sys) => A.headline.find((r) => r.release === rel && r.system === sys);

  /* ---------------------------------------------------------------- 1. headline metrics */
  const METRICS = {
    macro_f1: { t: "Macro-F1", hi: true }, acc: { t: "Accuracy", hi: true }, rocauc: { t: "ROC-AUC", hi: true },
    ece: { t: "ECE (lower is better)", hi: false },
  };
  let headlineMetric = "macro_f1";
  function headline() {
    const m = headlineMetric, sys = [...JUDGES, "Majority-class"];
    const SH = { "Qwen2.5-32B": "Qwen", "TigerLLM-9B-it": "Tiger", "Gemma-2-9B": "Gemma", "Llama-3.1-8B": "Llama", "Majority-class": "Maj." };
    const lab = sys.map((s) => (narrow() ? SH[s] : s === "Majority-class" ? "Majority" : s));
    const tr = ["phase1", "phase2"].map((rel, i) => ({
      type: "bar", name: rel === "phase1" ? "Phase 1 test (2,516)" : "Phase 2 full (5,000)",
      x: lab, y: sys.map((s) => head(rel, s)[m]),
      marker: { color: sys.map((s) => (s === "Majority-class" ? (i ? "#cfd2dd" : "#e3e5ec") : i ? JC[s] : hexA(JC[s], 0.38))), line: { width: 0 } },
      text: sys.map((s) => (head(rel, s)[m] == null ? "n/a" : fmt(head(rel, s)[m]))), textposition: narrow() ? "none" : "outside", cliponaxis: false,
      textfont: { size: 11.5, color: MUTED },
      hovertemplate: "<b>%{x}</b><br>" + (rel === "phase1" ? "Phase 1" : "Phase 2") + ": %{y:.3f}<extra></extra>",
    }));
    const max = m === "ece" ? 0.33 : 1.08;
    draw("ch-headline", tr, base({ barmode: "group", bargap: 0.28, bargroupgap: 0.06,
      yaxis: { range: [0, max], title: { text: METRICS[m].t }, tickformat: ".1f" },
      xaxis: { tickfont: { size: narrow() ? 10 : 12.5 }, ticks: "" },
      legend: { y: 1.04 }, margin: { t: 30 } }));
  }
  function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }

  /* ---------------------------------------------------------------- 2. ranking vs calibration */
  function calib() {
    const tr = [];
    JUDGES.forEach((j) => {
      const a = head("phase1", j), b = head("phase2", j);
      tr.push({ type: "scatter", mode: "lines", x: [a.rocauc, b.rocauc], y: [a.ece, b.ece], line: { color: hexA(JC[j], 0.35), width: 2, dash: "dot" }, hoverinfo: "skip", showlegend: false });
      tr.push({ type: "scatter", mode: "markers+text", name: j, x: [a.rocauc, b.rocauc], y: [a.ece, b.ece],
        marker: { symbol: JM[j], size: [11, 15], color: ["#fff", JC[j]], line: { color: JC[j], width: 2 } },
        text: ["P1", "P2"], textposition: ["bottom center", "top center"], textfont: { size: 10, color: MUTED },
        customdata: [["Phase 1", a.macro_f1], ["Phase 2", b.macro_f1]],
        hovertemplate: `<b>${j}</b> · %{customdata[0]}<br>ROC-AUC %{x:.3f}<br>ECE %{y:.3f}<br>Macro-F1 %{customdata[1]:.3f}<extra></extra>` });
    });
    draw("ch-calib", tr, base({
      xaxis: { title: { text: "ROC-AUC  (ranking → better)" }, range: [0.72, 0.98], tickformat: ".2f" },
      yaxis: { title: { text: "ECE  (← better calibrated)" }, range: [0, 0.31], tickformat: ".2f" },
      shapes: [{ type: "rect", xref: "x", yref: "y", x0: 0.9, x1: 0.98, y0: 0, y1: 0.07, fillcolor: "rgba(33,28,191,.05)", line: { width: 0 }, layer: "below" }],
      annotations: [{ x: 0.94, y: 0.072, text: "well-ranked and calibrated", showarrow: false, font: { size: 10.5, color: FAINT }, yanchor: "bottom" }],
      legend: { y: 1.02 }, margin: { t: narrow() ? 52 : 34 } }));
  }

  /* ---------------------------------------------------------------- 3. diagnostic heatmap */
  let heatGroup = "all";
  function heatmap() {
    const groups = heatGroup === "all" ? ["band", "family", "task"] : [heatGroup];
    const GN = { band: "Band", family: "Family", task: "Task" };
    const rows = [];
    rows.push({ label: "<b>All 5,000 items</b>", vals: JUDGES.map((j) => head("phase2", j).macro_f1), g: "overall" });
    groups.forEach((g) => A.heatmap.filter((r) => r.group === g).forEach((r) =>
      rows.push({ label: (narrow() ? "" : `<span style="color:${FAINT}">${GN[g]} · </span>`) + r.stratum.replace(/_/g, "-"), vals: JUDGES.map((j) => r[j]), g })));
    rows.reverse();
    const z = rows.map((r) => r.vals);
    const xl = narrow() ? ["Qwen2.5", "TigerLLM", "Gemma-2", "Llama-3.1"] : JUDGES;
    const tr = [{
      type: "heatmap", z, x: xl, y: rows.map((r, i) => i), zmin: 0.4, zmax: 1.0, xgap: 3, ygap: 3,
      colorscale: [[0, "#ffffff"], [0.2, "#ecebfb"], [0.45, "#b9b9f0"], [0.7, "#7f7bdc"], [0.88, "#4637b8"], [1, "#211cbf"]],
      colorbar: { thickness: 10, len: 0.6, outlinewidth: 0, tickfont: { size: 10, color: MUTED }, title: { text: "macro-F1", side: "right", font: { size: 10.5, color: MUTED } } },
      text: z.map((r) => r.map((v) => v.toFixed(2))), texttemplate: "%{text}", textfont: { size: narrow() ? 10 : 12 },
      customdata: rows.map((r) => JUDGES.map(() => r.label.replace(/<[^>]+>/g, ""))),
      hovertemplate: "<b>%{x}</b><br>%{customdata}<br>macro-F1 %{z:.3f}<extra></extra>",
    }];
    // text colour per cell for contrast
    tr[0].textfont.color = z.map((r) => r.map((v) => (v > 0.78 ? "#fff" : INK)));
    const shapes = [];
    for (let i = 1; i < rows.length; i++) if (rows[i].g !== rows[i - 1].g) shapes.push({ type: "line", xref: "paper", x0: 0, x1: 1, yref: "y", y0: i - 0.5, y1: i - 0.5, line: { color: "#fff", width: 6 } });
    draw("ch-heatmap", tr, base({
      yaxis: { tickvals: rows.map((r, i) => i), ticktext: rows.map((r) => r.label), gridcolor: "rgba(0,0,0,0)", ticks: "", linecolor: "rgba(0,0,0,0)" },
      xaxis: { side: "top", ticks: "", linecolor: "rgba(0,0,0,0)", tickfont: { size: narrow() ? 10.5 : 12.5 } },
      margin: { t: 36, b: 10, r: narrow() ? 4 : 20 }, shapes, transition: { duration: 0 } }));
    document.getElementById("ch-heatmap").style.height = (rows.length * (narrow() ? 30 : 34) + 70) + "px";
    Plotly.Plots.resize("ch-heatmap");
  }

  /* ---------------------------------------------------------------- 4. blind spot (dumbbell) */
  function blind() {
    const om = A.modes.find((m) => m.mode === "discourse-level-omission");
    const ys = JUDGES.slice().reverse();
    const tr = [{
      type: "scatter", mode: "lines", hoverinfo: "skip", showlegend: false,
      x: ys.flatMap((j) => [om["mf1_" + j], head("phase2", j).macro_f1, null]), y: ys.flatMap((j) => [j, j, null]),
      line: { color: "#d9d9f0", width: 6 },
    }, {
      type: "scatter", mode: "markers", name: "All Phase-2 items", showlegend: false, x: ys.map((j) => head("phase2", j).macro_f1), y: ys,
      marker: { size: 15, color: ys.map((j) => JC[j]), symbol: ys.map((j) => JM[j]), line: { color: "#fff", width: 1.5 } },
      hovertemplate: "<b>%{y}</b><br>All Phase 2: %{x:.3f}<extra></extra>",
    }, {
      type: "scatter", mode: "markers", name: "Discourse-level omission", showlegend: false, x: ys.map((j) => om["mf1_" + j]), y: ys,
      marker: { size: 15, color: "#ec8dff", symbol: ys.map((j) => JM[j]), line: { color: "#bc45d8", width: 1.5 } },
      customdata: ys.map((j) => om["miss_" + j]),
      hovertemplate: "<b>%{y}</b><br>Omission: %{x:.3f}<br>misses %{customdata:.1f}% of omissions<extra></extra>",
    }, { type: "scatter", mode: "markers", name: "All Phase-2 items (judge colour)", x: [null], y: [null], marker: { size: 12, color: "#211cbf" } },
       { type: "scatter", mode: "markers", name: "Discourse-level omission", x: [null], y: [null], marker: { size: 12, color: "#ec8dff", line: { color: "#bc45d8", width: 1.5 } } }];
    draw("ch-blind", tr, base({
      xaxis: { range: [0, 1], title: { text: "Macro-F1" }, tickformat: ".1f" },
      yaxis: { ticks: "", gridcolor: "rgba(0,0,0,0)", tickfont: { size: narrow() ? 10.5 : 12.5 } },
      shapes: [{ type: "line", x0: om.majority, x1: om.majority, yref: "paper", y0: 0, y1: 1, line: { color: MAJ, dash: "dash", width: 1.5 } }],
      annotations: [{ x: om.majority, y: 1, yref: "paper", text: "majority ref. " + om.majority.toFixed(3), showarrow: false, xanchor: "left", yanchor: "bottom", xshift: 4, font: { size: 10.5, color: MUTED } }],
      legend: { y: 1.1 }, margin: { t: 54, l: narrow() ? 86 : 110 } }));
  }

  /* ---------------------------------------------------------------- 5. 32 failure modes */
  let modeMetric = "mf1", modeSort = "family";
  function modes() {
    let rows = A.modes.slice();
    const val = (r, j) => r[modeMetric + "_" + j];
    const mean = (r) => JUDGES.reduce((s, j) => s + (val(r, j) ?? 0), 0) / JUDGES.length;
    if (modeSort === "mean") rows.sort((a, b) => mean(a) - mean(b));
    else rows.reverse();                                   // family order, top to bottom
    if (modeMetric !== "mf1") rows = rows.filter((r) => val(r, JUDGES[0]) != null);
    const n = narrow();
    const lab = rows.map((r) => `<span style="color:${FC[r.family]}">●</span> ` + (n ? r.mode.replace(/-/g, " ").replace(/^(.{24}).+$/, "$1…") : r.mode));
    const y = rows.map((r, i) => i);
    const tr = [];
    tr.push({ type: "scatter", mode: "lines", x: rows.flatMap((r) => { const v = JUDGES.map((j) => val(r, j)).filter((x) => x != null); return [Math.min(...v), Math.max(...v), null]; }),
      y: y.flatMap((i) => [i, i, null]), line: { color: "#e6e7f0", width: 2 }, hoverinfo: "skip", showlegend: false });
    if (modeMetric === "mf1") tr.push({ type: "scatter", mode: "markers", name: "Per-mode majority", x: rows.map((r) => r.majority), y,
      marker: { symbol: "line-ns", size: 13, line: { color: "#9aa1ae", width: 2.2 } },
      customdata: rows.map((r) => r.mode), hovertemplate: "<b>%{customdata}</b><br>majority reference %{x:.3f}<extra></extra>" });
    JUDGES.forEach((j) => tr.push({ type: "scatter", mode: "markers", name: j, x: rows.map((r) => val(r, j)), y,
      marker: { symbol: JM[j], size: n ? 8 : 10, color: JC[j], opacity: 0.92, line: { color: "#fff", width: 1 } },
      customdata: rows.map((r) => [r.mode, FAM[r.family], r.n, r.pct_faithful]),
      hovertemplate: `<b>%{customdata[0]}</b><br>Family %{customdata[1]} · n=%{customdata[2]} · %{customdata[3]}% faithful<br>${j}: %{x:.3f}<extra></extra>`.replace("%{x:.3f}", modeMetric === "mf1" ? "%{x:.3f}" : "%{x:.1f}%") }));
    const xt = { mf1: "Macro-F1 (Phase 2)", miss: "Miss rate, % of hallucinated items passed as faithful", ff: "False-flag rate, % of faithful items flagged" }[modeMetric];
    const el = document.getElementById("ch-modes");
    el.style.height = (rows.length * (n ? 27 : 24) + 120) + "px";
    draw("ch-modes", tr, base({
      xaxis: { title: { text: xt }, range: modeMetric === "mf1" ? [0, 1.03] : [-3, 103], side: "bottom" },
      yaxis: { tickvals: y, ticktext: lab, ticks: "", gridcolor: "#f4f5f9", tickfont: { size: n ? 10 : 11.5 }, range: [-0.8, rows.length - 0.2] },
      legend: { y: 1.0, yanchor: "bottom" }, margin: { t: n ? 60 : 40, l: n ? 10 : 20 }, hovermode: "closest", transition: { duration: 0 } }));
    Plotly.Plots.resize(el);
  }

  /* ---------------------------------------------------------------- 6. team histogram */
  let histPhase = "p1";
  function hist() {
    const edges = [0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
    const counts = A.tiers.map((t) => t[histPhase]);
    const total = counts.reduce((a, b) => a + b, 0);
    const tr = [{
      type: "bar", x: edges.slice(0, -1).map((e, i) => (e + edges[i + 1]) / 2), y: counts, width: 0.094, showlegend: false,
      marker: { color: histPhase === "p1" ? "#c9c9f3" : "#b8e2f5" }, text: counts.map(String), textposition: "outside", textfont: { color: MUTED, size: 11.5 }, cliponaxis: false,
      customdata: A.tiers.map((t) => t.tier.replace("--", "–").replace(">=", "≥")),
      hovertemplate: "<b>%{customdata}</b><br>%{y} teams<extra></extra>",
    }];
    const top = Math.max(...counts) * 1.25;
    JUDGES.forEach((j, k) => {
      const p = A.percentiles.find((r) => r.judge === j);
      const x = histPhase === "p1" ? p.f1 : head("phase2", j).macro_f1;
      const h = top * (0.93 - k * 0.055);
      tr.push({ type: "scatter", mode: "lines+markers", name: histPhase === "p1" ? `${j} · ${x.toFixed(3)} · ${ord(Math.round(p.pct))} pct.` : `${j} · ${x.toFixed(3)}`,
        x: [x, x], y: [0, h], line: { color: JC[j], width: 2 }, marker: { symbol: JM[j], size: [0, 10], color: JC[j], line: { color: "#fff", width: 1 } },
        hovertemplate: `<b>${j}</b><br>macro-F1 ${x.toFixed(3)}` + (histPhase === "p1" ? `<br>${p.pct.toFixed(1)}th percentile of 222 teams` : "") + "<extra></extra>" });
    });
    draw("ch-hist", tr, base({
      xaxis: { range: [0.5, 1.0], tickvals: edges, ticktext: ["<0.6", "0.6", "0.7", "0.8", "0.9", "1.0"], title: { text: `Best macro-F1 per team (n = ${total})` } },
      yaxis: { range: [0, top], title: { text: "Teams" } },
      legend: { y: 1.02, font: { size: narrow() ? 9.5 : 11.5 } }, margin: { t: narrow() ? 96 : 64 } }));
  }
  function ord(k) { const s = k % 100 >= 11 && k % 100 <= 13 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[k % 10] || "th"; return k + s; }

  /* ---------------------------------------------------------------- 7. phase 1 vs phase 2 */
  let phaseView = "scatter";
  function phases() {
    const T = A.overlap, tr = [];
    const flag = { ExtremeAI: "best Phase-1 score", BUET_NeuralX: "Phase-2 leader", DU_Outliers: "one of two teams to improve" };
    if (phaseView === "scatter") {
      tr.push({ type: "scatter", mode: "lines", x: [0.3, 1], y: [0.3, 1], line: { color: FAINT, dash: "dot", width: 1.3 }, hoverinfo: "skip", showlegend: false });
      tr.push({ type: "scatter", mode: "markers", name: "32 teams in both phases", x: T.map((t) => t.p1), y: T.map((t) => t.p2),
        marker: { size: 11, color: T.map((t) => (t.p2 > t.p1 ? "#15803d" : hexA("#c2410c", 0.15 + 0.85 * Math.min(1, (t.p1 - t.p2) / 0.6)))), line: { color: "#fff", width: 1 } },
        customdata: T.map((t) => [t.team, ((t.p2 - t.p1) * 100).toFixed(1)]),
        hovertemplate: "<b>%{customdata[0]}</b><br>Phase 1 %{x:.3f} → Phase 2 %{y:.3f}<br>Δ %{customdata[1]} pts<extra></extra>" });
      JUDGES.forEach((j) => { const a = head("phase1", j).macro_f1, b = head("phase2", j).macro_f1;
        tr.push({ type: "scatter", mode: "markers", name: j, x: [a], y: [b], marker: { symbol: JM[j], size: 14, color: JC[j], line: { color: "#fff", width: 1.5 } },
          hovertemplate: `<b>${j}</b> (zero-shot)<br>Phase 1 %{x:.3f} → Phase 2 %{y:.3f}<extra></extra>` }); });
      const OFF = narrow() ? { ExtremeAI: [-8, 44], BUET_NeuralX: [-46, -26], DU_Outliers: [20, 46] } : { ExtremeAI: [-20, 48], BUET_NeuralX: [-70, -34], DU_Outliers: [-80, 10] };
      const ann = T.filter((t) => flag[t.team]).map((t) => ({ x: t.p1, y: t.p2, text: narrow() ? t.team : `${t.team}<br><span style="color:${FAINT}">${flag[t.team]}</span>`, showarrow: true, arrowhead: 0, arrowcolor: FAINT, ax: OFF[t.team][0], ay: OFF[t.team][1], font: { size: narrow() ? 9.5 : 10.5, color: INK }, align: "right", bgcolor: "rgba(255,255,255,.85)" }));
      ann.push({ x: 0.62, y: 0.42, text: "below the diagonal:<br>worse on Phase 2", showarrow: false, xanchor: "left", font: { size: 10.5, color: FAINT }, align: "left" });
      draw("ch-phases", tr, base({
        xaxis: { range: [0.5, 1.0], title: { text: "Phase-1 macro-F1 (public leaderboard)" }, tickformat: ".1f", dtick: 0.1 },
        yaxis: { range: [0.33, 1.0], title: { text: "Phase-2 macro-F1 (held-out)" }, tickformat: ".1f", dtick: 0.1, scaleanchor: narrow() ? undefined : undefined },
        annotations: ann, legend: { y: 1.02, font: { size: narrow() ? 9.5 : 11.5 } }, margin: { t: narrow() ? 80 : 56 } }));
    } else {
      T.forEach((t) => tr.push({ type: "scatter", mode: "lines+markers", x: ["Phase 1", "Phase 2"], y: [t.p1, t.p2], showlegend: false,
        line: { color: t.p2 > t.p1 ? "#15803d" : hexA("#c2410c", 0.22 + 0.7 * Math.min(1, (t.p1 - t.p2) / 0.6)), width: 1.4 }, marker: { size: 5 },
        hovertemplate: `<b>${t.team}</b><br>%{x}: %{y:.3f}<extra></extra>` }));
      JUDGES.forEach((j) => tr.push({ type: "scatter", mode: "lines+markers", name: j, x: ["Phase 1", "Phase 2"], y: [head("phase1", j).macro_f1, head("phase2", j).macro_f1],
        line: { color: JC[j], width: 4 }, marker: { symbol: JM[j], size: 11, color: JC[j] }, hovertemplate: `<b>${j}</b><br>%{x}: %{y:.3f}<extra></extra>` }));
      draw("ch-phases", tr, base({ xaxis: { range: [-0.15, 1.15], ticks: "", gridcolor: "rgba(0,0,0,0)" }, yaxis: { range: [0.33, 1.0], title: { text: "Macro-F1" }, tickformat: ".1f" },
        legend: { y: 1.02, font: { size: narrow() ? 9.5 : 11.5 } }, margin: { t: narrow() ? 80 : 56 }, hovermode: "closest" }));
    }
  }

  /* ---------------------------------------------------------------- 8. taxonomy sunburst */
  function taxonomy() {
    const ids = [], labels = [], parents = [], values = [], colors = [], hover = [];
    ids.push("root"); labels.push("Phase 2<br>5,000"); parents.push(""); values.push(5000); colors.push("#fff"); hover.push("All Phase-2 items");
    Object.keys(FAM).forEach((f) => {
      const n = A.modes.filter((m) => m.family === f).reduce((s, m) => s + m.n, 0);
      ids.push(f); labels.push(`<b>${f}</b>`); parents.push("root"); values.push(n); colors.push(FC[f]); hover.push(`Family ${f}: ${FAM[f]}`);
      A.modes.filter((m) => m.family === f).forEach((m) => {
        ids.push(m.mode); labels.push(m.mode.replace(/-/g, " ")); parents.push(f); values.push(m.n); colors.push(hexA(FC[f], 0.25 + 0.5 * (m.n / 400))); hover.push(`${m.mode}<br>${m.pct_faithful}% faithful`);
      });
    });
    draw("ch-taxonomy", [{ type: "sunburst", ids, labels, parents, values, branchvalues: "total", customdata: hover,
      marker: { colors, line: { color: "#fff", width: 1.5 } }, insidetextorientation: "radial", leaf: { opacity: 1 },
      hovertemplate: "%{customdata}<br><b>%{value}</b> items · %{percentRoot:.1%}<extra></extra>",
      textfont: { family: SANS, size: 11 }, maxdepth: narrow() ? 2 : 3 }],
      base({ margin: { t: 6, b: 6, l: 6, r: 6 } }));
  }

  /* ---------------------------------------------------------------- 9. Phase 2 composition */
  let compDim = "task_type";
  function composition() {
    const NM = { bdlaws: "Bangladeshi statutes", common_crawl: "Common Crawl", ebanglalibrary: "e-Bangla Library", government: "Government publications", nctb: "NCTB textbooks", newspapers: "Newspapers", wikipedia_banglapedia: "Wikipedia & Banglapedia",
      short_cb_qa: "short closed-book QA", short_ob_qa: "short open-book QA", long_ob_qa: "long open-book QA", summarization: "summarization", translation: "translation", adversarial: "adversarial",
      C0: "C0 · globally stable", C1: "C1 · culturally situated", C2: "C2 · contested / time-sensitive", theory_authored: "theory-authored", theory_confirmed: "theory-confirmed" };
    const rows = A.split.filter((r) => r.dim === compDim).sort((a, b) => a.n - b.n);
    const lab = rows.map((r) => NM[r.value] || r.value);
    draw("ch-comp", [
      { type: "bar", orientation: "h", name: "Public (released)", y: lab, x: rows.map((r) => r.pub), marker: { color: "#211cbf" }, hovertemplate: "<b>%{y}</b><br>public %{x}<extra></extra>" },
      { type: "bar", orientation: "h", name: "Held out", y: lab, x: rows.map((r) => r.n - r.pub), marker: { color: "#c9c9f3" }, text: rows.map((r) => r.n.toLocaleString()), textposition: "outside", cliponaxis: false, textfont: { color: MUTED, size: 11 }, hovertemplate: "<b>%{y}</b><br>held out %{x}<extra></extra>" },
    ], base({ barmode: "stack", bargap: 0.35, xaxis: { title: { text: "Items" }, range: [0, Math.max(...rows.map((r) => r.n)) * 1.15] }, yaxis: { ticks: "", gridcolor: "rgba(0,0,0,0)" }, legend: { y: 1.02 }, margin: { t: 34 } }));
  }

  /* ---------------------------------------------------------------- 10. Phase 1 strata */
  const P1 = {
    task: [["Closed-book QA", 1155, [0.624, 0.592, 0.586, 0.389], 0.335], ["Context-grounded QA", 1361, [0.880, 0.858, 0.854, 0.687], 0.359]],
    domain: [["Bengali language & lexicon", 401, [0.590, 0.680, 0.613, 0.343], 0.346], ["Math & logical reasoning", 141, [0.616, 0.590, 0.562, 0.344], 0.350],
      ["Geography, science & current affairs", 1151, [0.764, 0.775, 0.735, 0.491], 0.347], ["History, literature & culture", 823, [0.837, 0.875, 0.830, 0.616], 0.346]],
    band: [["C0 · globally stable", 2014, [0.739, 0.775, 0.720, 0.504], 0.345], ["C1 · culturally situated", 483, [0.809, 0.850, 0.811, 0.510], 0.350], ["C2 · contested (n=19)", 19, [0.892, 0.895, 0.784, 0.729], 0.387]],
  };
  let p1Dim = "task";
  function phase1() {
    const rows = P1[p1Dim];
    const lab = rows.map((r) => (narrow() ? r[0].replace(/ & .*/, "…") : r[0]) + `<br><span style="color:${FAINT};font-size:10.5px">n = ${r[1].toLocaleString()}</span>`);
    const tr = JUDGES.map((j, k) => ({ type: "bar", name: j, x: lab, y: rows.map((r) => r[2][k]), marker: { color: JC[j] },
      hovertemplate: `<b>${j}</b><br>%{y:.3f}<extra></extra>` }));
    tr.push({ type: "scatter", mode: "lines", name: "Majority reference", x: [null], y: [null], line: { color: "#7d8394", width: 2, dash: "dash" } });
    const shapes = rows.map((r, i) => ({ type: "line", xref: "x", yref: "y", x0: i - 0.42, x1: i + 0.42, y0: r[3], y1: r[3], line: { color: "#7d8394", width: 2, dash: "dash" }, layer: "above" }));
    draw("ch-p1", tr, base({ shapes, barmode: "group", bargap: 0.3, yaxis: { range: [0, 1], title: { text: "Macro-F1 (Phase-1 test)" }, tickformat: ".1f" }, xaxis: { ticks: "" }, legend: { y: 1.02 }, margin: { t: narrow() ? 52 : 34 } }));
  }

  /* ---------------------------------------------------------------- 11. log-prob AUROC */
  function logprob() {
    const models = ["Qwen2.5-32B", "Gemma-2-9B", "Llama-3.1-8B", "TigerLLM-9B-it", "Gemma-4-12B"];
    const SER = [["phase1", "with", "Phase 1 · with context", "#211cbf", "circle"], ["phase1", "without", "Phase 1 · closed-book", "#9194e4", "circle-open"],
      ["phase2", "with", "Phase 2 · with context", "#bc45d8", "diamond"], ["phase2", "without", "Phase 2 · closed-book", "#ec8dff", "diamond-open"]];
    const tr = SER.map(([rel, ctx, name, c, sym], k) => {
      const rs = models.map((m) => A.logprob.find((r) => r.release === rel && r.model === m && r.context === ctx));
      return { type: "scatter", mode: "markers", name, x: models.map((m) => m), y: rs.map((r) => r.auroc), offsetgroup: k,
        error_y: { type: "data", symmetric: false, array: rs.map((r) => r.auroc_hi - r.auroc), arrayminus: rs.map((r) => r.auroc - r.auroc_lo), color: c, thickness: 1.4, width: 3 },
        marker: { color: c, size: 10, symbol: sym, line: { color: c, width: 2 } },
        customdata: rs.map((r) => [r.auroc_lo, r.auroc_hi]),
        hovertemplate: `<b>%{x}</b> · ${name}<br>AUROC %{y:.3f} [%{customdata[0]:.2f}, %{customdata[1]:.2f}]<extra></extra>` };
    });
    draw("ch-logprob", tr, base({ scattermode: "group", scattergap: 0.5, yaxis: { range: [0.44, 0.83], title: { text: "AUROC of mean token log-likelihood" }, tickformat: ".2f" },
      xaxis: { ticks: "" }, shapes: [{ type: "line", xref: "paper", x0: 0, x1: 1, y0: 0.5, y1: 0.5, line: { color: MAJ, dash: "dash", width: 1.3 } }],
      annotations: [{ xref: "paper", x: 1, y: 0.5, text: "chance", showarrow: false, xanchor: "right", yanchor: "bottom", font: { size: 10.5, color: MUTED } }],
      legend: { y: 1.02, font: { size: narrow() ? 10 : 11.5 } }, margin: { t: narrow() ? 70 : 52 } }));
  }

  /* ---------------------------------------------------------------- wiring */
  const RENDER = { "ch-headline": headline, "ch-calib": calib, "ch-heatmap": heatmap, "ch-blind": blind, "ch-modes": modes, "ch-hist": hist,
    "ch-phases": phases, "ch-taxonomy": taxonomy, "ch-comp": composition, "ch-p1": phase1, "ch-logprob": logprob };
  const drawn = new Set();
  function render(id) { if (RENDER[id] && document.getElementById(id)) { RENDER[id](); drawn.add(id); } }

  seg("headline", (v) => { headlineMetric = v; headline(); });
  seg("heat", (v) => { heatGroup = v; heatmap(); });
  seg("modemetric", (v) => { modeMetric = v; modes(); });
  seg("modesort", (v) => { modeSort = v; modes(); });
  seg("hist", (v) => { histPhase = v; hist(); });
  seg("phases", (v) => { phaseView = v; Plotly.purge("ch-phases"); phases(); });
  seg("comp", (v) => { compDim = v; composition(); });
  seg("p1", (v) => { p1Dim = v; phase1(); });

  // lazy first render
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { render(e.target.id); io.unobserve(e.target); } }), { rootMargin: "300px 0px" }) : null;
  Object.keys(RENDER).forEach((id) => { const el = document.getElementById(id); if (!el) return; io ? io.observe(el) : render(id); });

  // re-layout when crossing the mobile breakpoint (fonts, labels, margins change)
  let wasNarrow = narrow(), t;
  window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(() => { if (narrow() !== wasNarrow) { wasNarrow = narrow(); drawn.forEach(render); } }, 180); });
})();
