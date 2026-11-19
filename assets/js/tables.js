/* Builds the headline results table from data.js; bold marks the best judge per column and release. */
(function () {
  "use strict";
  const A = window.ALIK, body = document.getElementById("tbl-headline");
  if (!body) return;
  const cols = ["acc", "macro_f1", "f1_hallu", "f1_faith", "prauc_faith", "prauc_hallu", "rocauc", "ece"];
  const order = ["Majority-class", "Qwen2.5-32B", "TigerLLM-9B-it", "Gemma-2-9B", "Llama-3.1-8B"];
  const rel = { phase1: "Phase 1 test · 2,516 items", phase2: "Phase 2 full · 5,000 items" };
  let html = "";
  ["phase1", "phase2"].forEach((r, i) => {
    const rows = order.map((s) => A.headline.find((x) => x.release === r && x.system === s));
    const best = {};
    cols.forEach((c) => {
      const v = rows.filter((x) => x.system !== "Majority-class" && x[c] != null).map((x) => x[c]);
      best[c] = c === "ece" ? Math.min(...v) : Math.max(...v);
    });
    html += `<tr class="${i ? "sep" : ""}"><td colspan="9" style="font-weight:600;color:var(--ink);background:#fff">${rel[r]}</td></tr>`;
    rows.forEach((x) => {
      const maj = x.system === "Majority-class";
      html += `<tr${maj ? ' class="muted"' : ""}><td>${maj ? "Majority class" : x.system}</td>` +
        cols.map((c) => `<td class="r${!maj && x[c] === best[c] ? " best" : ""}">${x[c] == null ? "—" : x[c].toFixed(3)}</td>`).join("") + "</tr>";
    });
  });
  body.innerHTML = html;
})();
