/* Numbers from the camera-ready paper (paper/camera_ready/figures/src/data). */
window.ALIK = {
 "headline": [
  {
   "release": "phase1",
   "system": "Majority-class",
   "acc": 0.531,
   "macro_f1": 0.347,
   "f1_hallu": 0.0,
   "f1_faith": 0.693,
   "prauc_faith": 0.531,
   "prauc_hallu": 0.469,
   "rocauc": 0.5,
   "ece": null
  },
  {
   "release": "phase1",
   "system": "Qwen2.5-32B",
   "acc": 0.77,
   "macro_f1": 0.77,
   "f1_hallu": 0.781,
   "f1_faith": 0.758,
   "prauc_faith": 0.894,
   "prauc_hallu": 0.851,
   "rocauc": 0.87,
   "ece": 0.212
  },
  {
   "release": "phase1",
   "system": "Gemma-2-9B",
   "acc": 0.733,
   "macro_f1": 0.731,
   "f1_hallu": 0.711,
   "f1_faith": 0.751,
   "prauc_faith": 0.851,
   "prauc_hallu": 0.81,
   "rocauc": 0.827,
   "ece": 0.227
  },
  {
   "release": "phase1",
   "system": "Llama-3.1-8B",
   "acc": 0.631,
   "macro_f1": 0.557,
   "f1_hallu": 0.376,
   "f1_faith": 0.738,
   "prauc_faith": 0.81,
   "prauc_hallu": 0.761,
   "rocauc": 0.776,
   "ece": 0.285
  },
  {
   "release": "phase1",
   "system": "TigerLLM-9B-it",
   "acc": 0.741,
   "macro_f1": 0.734,
   "f1_hallu": 0.694,
   "f1_faith": 0.775,
   "prauc_faith": 0.871,
   "prauc_hallu": 0.832,
   "rocauc": 0.847,
   "ece": 0.061
  },
  {
   "release": "phase2",
   "system": "Majority-class",
   "acc": 0.543,
   "macro_f1": 0.352,
   "f1_hallu": 0.704,
   "f1_faith": 0.0,
   "prauc_faith": 0.457,
   "prauc_hallu": 0.543,
   "rocauc": 0.5,
   "ece": null
  },
  {
   "release": "phase2",
   "system": "Qwen2.5-32B",
   "acc": 0.883,
   "macro_f1": 0.882,
   "f1_hallu": 0.893,
   "f1_faith": 0.871,
   "prauc_faith": 0.936,
   "prauc_hallu": 0.962,
   "rocauc": 0.951,
   "ece": 0.108
  },
  {
   "release": "phase2",
   "system": "Gemma-2-9B",
   "acc": 0.829,
   "macro_f1": 0.829,
   "f1_hallu": 0.834,
   "f1_faith": 0.824,
   "prauc_faith": 0.873,
   "prauc_hallu": 0.934,
   "rocauc": 0.91,
   "ece": 0.147
  },
  {
   "release": "phase2",
   "system": "Llama-3.1-8B",
   "acc": 0.682,
   "macro_f1": 0.673,
   "f1_hallu": 0.619,
   "f1_faith": 0.727,
   "prauc_faith": 0.627,
   "prauc_hallu": 0.817,
   "rocauc": 0.741,
   "ece": 0.206
  },
  {
   "release": "phase2",
   "system": "TigerLLM-9B-it",
   "acc": 0.84,
   "macro_f1": 0.84,
   "f1_hallu": 0.836,
   "f1_faith": 0.844,
   "prauc_faith": 0.887,
   "prauc_hallu": 0.937,
   "rocauc": 0.919,
   "ece": 0.042
  }
 ],
 "heatmap": [
  {
   "group": "band",
   "stratum": "C0",
   "Qwen2.5-32B": 0.93,
   "Gemma-2-9B": 0.87,
   "Llama-3.1-8B": 0.71,
   "TigerLLM-9B-it": 0.88
  },
  {
   "group": "band",
   "stratum": "C1",
   "Qwen2.5-32B": 0.9,
   "Gemma-2-9B": 0.84,
   "Llama-3.1-8B": 0.68,
   "TigerLLM-9B-it": 0.85
  },
  {
   "group": "band",
   "stratum": "C2",
   "Qwen2.5-32B": 0.76,
   "Gemma-2-9B": 0.73,
   "Llama-3.1-8B": 0.6,
   "TigerLLM-9B-it": 0.76
  },
  {
   "group": "family",
   "stratum": "A Content/Parametric",
   "Qwen2.5-32B": 0.85,
   "Gemma-2-9B": 0.78,
   "Llama-3.1-8B": 0.66,
   "TigerLLM-9B-it": 0.84
  },
  {
   "group": "family",
   "stratum": "B Context/Intrinsic",
   "Qwen2.5-32B": 0.87,
   "Gemma-2-9B": 0.88,
   "Llama-3.1-8B": 0.62,
   "TigerLLM-9B-it": 0.79
  },
  {
   "group": "family",
   "stratum": "C Linguistic/Cultural",
   "Qwen2.5-32B": 0.91,
   "Gemma-2-9B": 0.84,
   "Llama-3.1-8B": 0.59,
   "TigerLLM-9B-it": 0.8
  },
  {
   "group": "family",
   "stratum": "D Adversarial/Robust.",
   "Qwen2.5-32B": 0.8,
   "Gemma-2-9B": 0.67,
   "Llama-3.1-8B": 0.43,
   "TigerLLM-9B-it": 0.66
  },
  {
   "group": "family",
   "stratum": "E Meta/Pipeline",
   "Qwen2.5-32B": 0.74,
   "Gemma-2-9B": 0.64,
   "Llama-3.1-8B": 0.54,
   "TigerLLM-9B-it": 0.75
  },
  {
   "group": "task",
   "stratum": "translation",
   "Qwen2.5-32B": 0.89,
   "Gemma-2-9B": 0.84,
   "Llama-3.1-8B": 0.62,
   "TigerLLM-9B-it": 0.83
  },
  {
   "group": "task",
   "stratum": "short-ob-qa",
   "Qwen2.5-32B": 0.98,
   "Gemma-2-9B": 0.95,
   "Llama-3.1-8B": 0.82,
   "TigerLLM-9B-it": 0.95
  },
  {
   "group": "task",
   "stratum": "summarization",
   "Qwen2.5-32B": 0.89,
   "Gemma-2-9B": 0.89,
   "Llama-3.1-8B": 0.65,
   "TigerLLM-9B-it": 0.82
  },
  {
   "group": "task",
   "stratum": "long-ob-qa",
   "Qwen2.5-32B": 0.86,
   "Gemma-2-9B": 0.84,
   "Llama-3.1-8B": 0.66,
   "TigerLLM-9B-it": 0.8
  },
  {
   "group": "task",
   "stratum": "short-cb-qa",
   "Qwen2.5-32B": 0.79,
   "Gemma-2-9B": 0.67,
   "Llama-3.1-8B": 0.43,
   "TigerLLM-9B-it": 0.74
  },
  {
   "group": "task",
   "stratum": "adversarial",
   "Qwen2.5-32B": 0.76,
   "Gemma-2-9B": 0.69,
   "Llama-3.1-8B": 0.49,
   "TigerLLM-9B-it": 0.62
  }
 ],
 "modes": [
  {
   "mode": "cultural-default-substitution",
   "family": "A",
   "n": 400.0,
   "pct_faithful": 31.5,
   "majority": 0.407,
   "mf1_Qwen2.5-32B": 0.858,
   "mf1_Gemma-2-9B": 0.764,
   "mf1_Llama-3.1-8B": 0.529,
   "mf1_TigerLLM-9B-it": 0.82,
   "ff_Qwen2.5-32B": 12.7,
   "miss_Qwen2.5-32B": 12.8,
   "ff_Gemma-2-9B": 4.0,
   "miss_Gemma-2-9B": 31.8,
   "ff_Llama-3.1-8B": 1.6,
   "miss_Llama-3.1-8B": 67.5,
   "ff_TigerLLM-9B-it": 1.6,
   "miss_TigerLLM-9B-it": 24.5
  },
  {
   "mode": "temporal-confusion",
   "family": "A",
   "n": 350.0,
   "pct_faithful": 46.6,
   "majority": 0.348,
   "mf1_Qwen2.5-32B": 0.612,
   "mf1_Gemma-2-9B": 0.595,
   "mf1_Llama-3.1-8B": 0.591,
   "mf1_TigerLLM-9B-it": 0.681,
   "ff_Qwen2.5-32B": 52.8,
   "miss_Qwen2.5-32B": 24.1,
   "ff_Gemma-2-9B": 43.6,
   "miss_Gemma-2-9B": 37.4,
   "ff_Llama-3.1-8B": 4.9,
   "miss_Llama-3.1-8B": 66.8,
   "ff_TigerLLM-9B-it": 13.5,
   "miss_TigerLLM-9B-it": 47.1
  },
  {
   "mode": "entity-substitution",
   "family": "A",
   "n": 300.0,
   "pct_faithful": 26.0,
   "majority": 0.425,
   "mf1_Qwen2.5-32B": 0.859,
   "mf1_Gemma-2-9B": 0.676,
   "mf1_Llama-3.1-8B": 0.5,
   "mf1_TigerLLM-9B-it": 0.822,
   "ff_Qwen2.5-32B": 19.2,
   "miss_Qwen2.5-32B": 8.1,
   "ff_Gemma-2-9B": 20.5,
   "miss_Gemma-2-9B": 32.9,
   "ff_Llama-3.1-8B": 1.3,
   "miss_Llama-3.1-8B": 67.1,
   "ff_TigerLLM-9B-it": 9.0,
   "miss_TigerLLM-9B-it": 17.6
  },
  {
   "mode": "numerical-precision-drift",
   "family": "A",
   "n": 250.0,
   "pct_faithful": 31.2,
   "majority": 0.408,
   "mf1_Qwen2.5-32B": 0.9,
   "mf1_Gemma-2-9B": 0.83,
   "mf1_Llama-3.1-8B": 0.687,
   "mf1_TigerLLM-9B-it": 0.824,
   "ff_Qwen2.5-32B": 9.0,
   "miss_Qwen2.5-32B": 8.7,
   "ff_Gemma-2-9B": 3.8,
   "miss_Gemma-2-9B": 21.5,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 45.3,
   "ff_TigerLLM-9B-it": 1.3,
   "miss_TigerLLM-9B-it": 23.8
  },
  {
   "mode": "negative-control",
   "family": "A",
   "n": 200.0,
   "pct_faithful": 100.0,
   "majority": 1.0,
   "mf1_Qwen2.5-32B": 0.465,
   "mf1_Gemma-2-9B": 0.481,
   "mf1_Llama-3.1-8B": 0.497,
   "mf1_TigerLLM-9B-it": 0.481,
   "ff_Qwen2.5-32B": 13.0,
   "miss_Qwen2.5-32B": null,
   "ff_Gemma-2-9B": 7.5,
   "miss_Gemma-2-9B": null,
   "ff_Llama-3.1-8B": 1.0,
   "miss_Llama-3.1-8B": null,
   "ff_TigerLLM-9B-it": 7.5,
   "miss_TigerLLM-9B-it": null
  },
  {
   "mode": "wrong-attribution",
   "family": "A",
   "n": 200.0,
   "pct_faithful": 26.0,
   "majority": 0.425,
   "mf1_Qwen2.5-32B": 0.918,
   "mf1_Gemma-2-9B": 0.821,
   "mf1_Llama-3.1-8B": 0.681,
   "mf1_TigerLLM-9B-it": 0.88,
   "ff_Qwen2.5-32B": 7.7,
   "miss_Qwen2.5-32B": 6.1,
   "ff_Gemma-2-9B": 7.7,
   "miss_Gemma-2-9B": 18.2,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 41.9,
   "ff_TigerLLM-9B-it": 5.8,
   "miss_TigerLLM-9B-it": 11.5
  },
  {
   "mode": "definitional-categorical",
   "family": "A",
   "n": 150.0,
   "pct_faithful": 54.0,
   "majority": 0.351,
   "mf1_Qwen2.5-32B": 0.973,
   "mf1_Gemma-2-9B": 0.96,
   "mf1_Llama-3.1-8B": 0.801,
   "mf1_TigerLLM-9B-it": 0.946,
   "ff_Qwen2.5-32B": 1.2,
   "miss_Qwen2.5-32B": 4.3,
   "ff_Gemma-2-9B": 1.2,
   "miss_Gemma-2-9B": 7.2,
   "ff_Llama-3.1-8B": 1.2,
   "miss_Llama-3.1-8B": 39.1,
   "ff_TigerLLM-9B-it": 1.2,
   "miss_TigerLLM-9B-it": 10.1
  },
  {
   "mode": "diaspora-migration",
   "family": "A",
   "n": 80.0,
   "pct_faithful": 81.2,
   "majority": 0.448,
   "mf1_Qwen2.5-32B": 0.9,
   "mf1_Gemma-2-9B": 0.862,
   "mf1_Llama-3.1-8B": 0.822,
   "mf1_TigerLLM-9B-it": 0.853,
   "ff_Qwen2.5-32B": 4.6,
   "miss_Qwen2.5-32B": 13.3,
   "ff_Gemma-2-9B": 1.5,
   "miss_Gemma-2-9B": 33.3,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 46.7,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 40.0
  },
  {
   "mode": "time-anchored-admin-shift",
   "family": "A",
   "n": 70.0,
   "pct_faithful": 55.7,
   "majority": 0.358,
   "mf1_Qwen2.5-32B": 0.827,
   "mf1_Gemma-2-9B": 0.799,
   "mf1_Llama-3.1-8B": 0.83,
   "mf1_TigerLLM-9B-it": 0.821,
   "ff_Qwen2.5-32B": 17.9,
   "miss_Qwen2.5-32B": 16.1,
   "ff_Gemma-2-9B": 20.5,
   "miss_Gemma-2-9B": 19.4,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 35.5,
   "ff_TigerLLM-9B-it": 7.7,
   "miss_TigerLLM-9B-it": 29.0
  },
  {
   "mode": "direct-contradiction",
   "family": "B",
   "n": 350.0,
   "pct_faithful": 12.3,
   "majority": 0.467,
   "mf1_Qwen2.5-32B": 1.0,
   "mf1_Gemma-2-9B": 0.987,
   "mf1_Llama-3.1-8B": 0.929,
   "mf1_TigerLLM-9B-it": 0.993,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 2.3,
   "miss_Gemma-2-9B": 0.3,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 3.9,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 0.3
  },
  {
   "mode": "extrapolation-fabricated-detail",
   "family": "B",
   "n": 300.0,
   "pct_faithful": 15.3,
   "majority": 0.458,
   "mf1_Qwen2.5-32B": 1.0,
   "mf1_Gemma-2-9B": 0.987,
   "mf1_Llama-3.1-8B": 0.404,
   "mf1_TigerLLM-9B-it": 0.773,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 0.0,
   "miss_Gemma-2-9B": 0.8,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 69.7,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 19.3
  },
  {
   "mode": "contextual-entity-swap",
   "family": "B",
   "n": 250.0,
   "pct_faithful": 10.0,
   "majority": 0.474,
   "mf1_Qwen2.5-32B": 1.0,
   "mf1_Gemma-2-9B": 0.958,
   "mf1_Llama-3.1-8B": 0.633,
   "mf1_TigerLLM-9B-it": 0.94,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 0.0,
   "miss_Gemma-2-9B": 1.8,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 28.9,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 2.7
  },
  {
   "mode": "ignoring-context-for-parametric",
   "family": "B",
   "n": 200.0,
   "pct_faithful": 14.5,
   "majority": 0.461,
   "mf1_Qwen2.5-32B": 0.98,
   "mf1_Gemma-2-9B": 0.934,
   "mf1_Llama-3.1-8B": 0.821,
   "mf1_TigerLLM-9B-it": 0.927,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 1.2,
   "ff_Gemma-2-9B": 3.4,
   "miss_Gemma-2-9B": 3.5,
   "ff_Llama-3.1-8B": 6.9,
   "miss_Llama-3.1-8B": 11.7,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 4.7
  },
  {
   "mode": "discourse-level-omission",
   "family": "B",
   "n": 100.0,
   "pct_faithful": 5.0,
   "majority": 0.487,
   "mf1_Qwen2.5-32B": 0.209,
   "mf1_Gemma-2-9B": 0.341,
   "mf1_Llama-3.1-8B": 0.175,
   "mf1_TigerLLM-9B-it": 0.129,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 82.1,
   "ff_Gemma-2-9B": 0.0,
   "miss_Gemma-2-9B": 63.2,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 86.3,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 91.6
  },
  {
   "mode": "bangla-linguistic-content",
   "family": "C",
   "n": 240.0,
   "pct_faithful": 62.5,
   "majority": 0.385,
   "mf1_Qwen2.5-32B": 0.883,
   "mf1_Gemma-2-9B": 0.851,
   "mf1_Llama-3.1-8B": 0.613,
   "mf1_TigerLLM-9B-it": 0.839,
   "ff_Qwen2.5-32B": 12.7,
   "miss_Qwen2.5-32B": 8.9,
   "ff_Gemma-2-9B": 1.3,
   "miss_Gemma-2-9B": 32.2,
   "ff_Llama-3.1-8B": 1.3,
   "miss_Llama-3.1-8B": 73.3,
   "ff_TigerLLM-9B-it": 0.7,
   "miss_TigerLLM-9B-it": 35.6
  },
  {
   "mode": "sociopragmatic-register",
   "family": "C",
   "n": 120.0,
   "pct_faithful": 65.0,
   "majority": 0.394,
   "mf1_Qwen2.5-32B": 0.982,
   "mf1_Gemma-2-9B": 0.803,
   "mf1_Llama-3.1-8B": 0.589,
   "mf1_TigerLLM-9B-it": 0.8,
   "ff_Qwen2.5-32B": 2.6,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 1.3,
   "miss_Gemma-2-9B": 42.9,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 78.6,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 45.2
  },
  {
   "mode": "numeral-measure-word-errors",
   "family": "C",
   "n": 95.0,
   "pct_faithful": 58.9,
   "majority": 0.371,
   "mf1_Qwen2.5-32B": 0.811,
   "mf1_Gemma-2-9B": 0.804,
   "mf1_Llama-3.1-8B": 0.601,
   "mf1_TigerLLM-9B-it": 0.629,
   "ff_Qwen2.5-32B": 10.7,
   "miss_Qwen2.5-32B": 28.2,
   "ff_Gemma-2-9B": 5.4,
   "miss_Gemma-2-9B": 35.9,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 74.4,
   "ff_TigerLLM-9B-it": 1.8,
   "miss_TigerLLM-9B-it": 69.2
  },
  {
   "mode": "script-attention-traps",
   "family": "C",
   "n": 95.0,
   "pct_faithful": 40.0,
   "majority": 0.375,
   "mf1_Qwen2.5-32B": 0.945,
   "mf1_Gemma-2-9B": 0.851,
   "mf1_Llama-3.1-8B": 0.596,
   "mf1_TigerLLM-9B-it": 0.821,
   "ff_Qwen2.5-32B": 5.3,
   "miss_Qwen2.5-32B": 5.3,
   "ff_Gemma-2-9B": 5.3,
   "miss_Gemma-2-9B": 21.1,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 64.9,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 29.8
  },
  {
   "mode": "reasoning-language-inconsistency",
   "family": "C",
   "n": 85.0,
   "pct_faithful": 35.3,
   "majority": 0.393,
   "mf1_Qwen2.5-32B": 0.877,
   "mf1_Gemma-2-9B": 0.863,
   "mf1_Llama-3.1-8B": 0.671,
   "mf1_TigerLLM-9B-it": 0.886,
   "ff_Qwen2.5-32B": 26.7,
   "miss_Qwen2.5-32B": 1.8,
   "ff_Gemma-2-9B": 10.0,
   "miss_Gemma-2-9B": 14.5,
   "ff_Llama-3.1-8B": 3.3,
   "miss_Llama-3.1-8B": 49.1,
   "ff_TigerLLM-9B-it": 10.0,
   "miss_TigerLLM-9B-it": 10.9
  },
  {
   "mode": "culturally-loaded-mistranslation",
   "family": "C",
   "n": 65.0,
   "pct_faithful": 16.9,
   "majority": 0.454,
   "mf1_Qwen2.5-32B": 0.856,
   "mf1_Gemma-2-9B": 0.639,
   "mf1_Llama-3.1-8B": 0.222,
   "mf1_TigerLLM-9B-it": 0.519,
   "ff_Qwen2.5-32B": 9.1,
   "miss_Qwen2.5-32B": 9.3,
   "ff_Gemma-2-9B": 9.1,
   "miss_Gemma-2-9B": 35.2,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 92.6,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 55.6
  },
  {
   "mode": "adversarial-context-reality-injection",
   "family": "D",
   "n": 200.0,
   "pct_faithful": 95.5,
   "majority": 0.488,
   "mf1_Qwen2.5-32B": 0.904,
   "mf1_Gemma-2-9B": 0.702,
   "mf1_Llama-3.1-8B": 0.626,
   "mf1_TigerLLM-9B-it": 0.925,
   "ff_Qwen2.5-32B": 2.1,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 11.0,
   "miss_Gemma-2-9B": 0.0,
   "ff_Llama-3.1-8B": 15.7,
   "miss_Llama-3.1-8B": 11.1,
   "ff_TigerLLM-9B-it": 1.6,
   "miss_TigerLLM-9B-it": 0.0
  },
  {
   "mode": "zero-error-horizon",
   "family": "D",
   "n": 150.0,
   "pct_faithful": 78.0,
   "majority": 0.438,
   "mf1_Qwen2.5-32B": 0.656,
   "mf1_Gemma-2-9B": 0.506,
   "mf1_Llama-3.1-8B": 0.312,
   "mf1_TigerLLM-9B-it": 0.446,
   "ff_Qwen2.5-32B": 39.3,
   "miss_Qwen2.5-32B": 6.1,
   "ff_Gemma-2-9B": 35.0,
   "miss_Gemma-2-9B": 60.6,
   "ff_Llama-3.1-8B": 41.9,
   "miss_Llama-3.1-8B": 100.0,
   "ff_TigerLLM-9B-it": 32.5,
   "miss_TigerLLM-9B-it": 78.8
  },
  {
   "mode": "instruction-adherence-bypass",
   "family": "D",
   "n": 100.0,
   "pct_faithful": 33.0,
   "majority": 0.401,
   "mf1_Qwen2.5-32B": 0.741,
   "mf1_Gemma-2-9B": 0.52,
   "mf1_Llama-3.1-8B": 0.312,
   "mf1_TigerLLM-9B-it": 0.429,
   "ff_Qwen2.5-32B": 15.2,
   "miss_Qwen2.5-32B": 29.9,
   "ff_Gemma-2-9B": 18.2,
   "miss_Gemma-2-9B": 62.7,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 94.0,
   "ff_TigerLLM-9B-it": 12.1,
   "miss_TigerLLM-9B-it": 77.6
  },
  {
   "mode": "prompt-injection-resistance",
   "family": "D",
   "n": 80.0,
   "pct_faithful": 91.2,
   "majority": 0.477,
   "mf1_Qwen2.5-32B": 0.606,
   "mf1_Gemma-2-9B": 0.368,
   "mf1_Llama-3.1-8B": 0.414,
   "mf1_TigerLLM-9B-it": 0.851,
   "ff_Qwen2.5-32B": 30.1,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 65.8,
   "miss_Gemma-2-9B": 0.0,
   "ff_Llama-3.1-8B": 32.9,
   "miss_Llama-3.1-8B": 85.7,
   "ff_TigerLLM-9B-it": 6.8,
   "miss_TigerLLM-9B-it": 0.0
  },
  {
   "mode": "parenthesis-structural-completion",
   "family": "D",
   "n": 60.0,
   "pct_faithful": 50.0,
   "majority": 0.333,
   "mf1_Qwen2.5-32B": 0.672,
   "mf1_Gemma-2-9B": 0.718,
   "mf1_Llama-3.1-8B": 0.333,
   "mf1_TigerLLM-9B-it": 0.369,
   "ff_Qwen2.5-32B": 13.3,
   "miss_Qwen2.5-32B": 50.0,
   "ff_Gemma-2-9B": 3.3,
   "miss_Gemma-2-9B": 50.0,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 100.0,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 96.7
  },
  {
   "mode": "refusal-vs-fabrication",
   "family": "D",
   "n": 60.0,
   "pct_faithful": 71.7,
   "majority": 0.417,
   "mf1_Qwen2.5-32B": 1.0,
   "mf1_Gemma-2-9B": 1.0,
   "mf1_Llama-3.1-8B": 0.381,
   "mf1_TigerLLM-9B-it": 0.804,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 0.0,
   "miss_Gemma-2-9B": 0.0,
   "ff_Llama-3.1-8B": 14.0,
   "miss_Llama-3.1-8B": 100.0,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 47.1
  },
  {
   "mode": "confidence-miscalibration",
   "family": "D",
   "n": 50.0,
   "pct_faithful": 32.0,
   "majority": 0.405,
   "mf1_Qwen2.5-32B": 1.0,
   "mf1_Gemma-2-9B": 0.908,
   "mf1_Llama-3.1-8B": 0.49,
   "mf1_TigerLLM-9B-it": 0.893,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 12.5,
   "miss_Gemma-2-9B": 5.9,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 73.5,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 14.7
  },
  {
   "mode": "harness-sensitive-tokenization",
   "family": "E",
   "n": 120.0,
   "pct_faithful": 97.5,
   "majority": 0.494,
   "mf1_Qwen2.5-32B": 0.652,
   "mf1_Gemma-2-9B": 0.509,
   "mf1_Llama-3.1-8B": 0.485,
   "mf1_TigerLLM-9B-it": 0.596,
   "ff_Qwen2.5-32B": 9.4,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 13.7,
   "miss_Gemma-2-9B": 66.7,
   "ff_Llama-3.1-8B": 3.4,
   "miss_Llama-3.1-8B": 100.0,
   "ff_TigerLLM-9B-it": 4.3,
   "miss_TigerLLM-9B-it": 66.7
  },
  {
   "mode": "deliberately-ambiguous-gold",
   "family": "E",
   "n": 80.0,
   "pct_faithful": 98.8,
   "majority": 0.497,
   "mf1_Qwen2.5-32B": 1.0,
   "mf1_Gemma-2-9B": 0.83,
   "mf1_Llama-3.1-8B": 0.467,
   "mf1_TigerLLM-9B-it": 1.0,
   "ff_Qwen2.5-32B": 0.0,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 1.3,
   "miss_Gemma-2-9B": 0.0,
   "ff_Llama-3.1-8B": 11.4,
   "miss_Llama-3.1-8B": 100.0,
   "ff_TigerLLM-9B-it": 0.0,
   "miss_TigerLLM-9B-it": 0.0
  },
  {
   "mode": "encoding-unicode-variation",
   "family": "E",
   "n": 80.0,
   "pct_faithful": 96.2,
   "majority": 0.49,
   "mf1_Qwen2.5-32B": 0.756,
   "mf1_Gemma-2-9B": 0.706,
   "mf1_Llama-3.1-8B": 0.744,
   "mf1_TigerLLM-9B-it": 0.925,
   "ff_Qwen2.5-32B": 6.5,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 5.2,
   "miss_Gemma-2-9B": 33.3,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 66.7,
   "ff_TigerLLM-9B-it": 1.3,
   "miss_TigerLLM-9B-it": 0.0
  },
  {
   "mode": "data-artifact-detection",
   "family": "E",
   "n": 60.0,
   "pct_faithful": 96.7,
   "majority": 0.492,
   "mf1_Qwen2.5-32B": 0.7,
   "mf1_Gemma-2-9B": 0.598,
   "mf1_Llama-3.1-8B": 0.829,
   "mf1_TigerLLM-9B-it": 0.687,
   "ff_Qwen2.5-32B": 8.6,
   "miss_Qwen2.5-32B": 0.0,
   "ff_Gemma-2-9B": 8.6,
   "miss_Gemma-2-9B": 50.0,
   "ff_Llama-3.1-8B": 0.0,
   "miss_Llama-3.1-8B": 50.0,
   "ff_TigerLLM-9B-it": 3.4,
   "miss_TigerLLM-9B-it": 50.0
  },
  {
   "mode": "known-imperfect-source",
   "family": "E",
   "n": 60.0,
   "pct_faithful": 93.3,
   "majority": 0.483,
   "mf1_Qwen2.5-32B": 0.866,
   "mf1_Gemma-2-9B": 0.782,
   "mf1_Llama-3.1-8B": 0.422,
   "mf1_TigerLLM-9B-it": 0.732,
   "ff_Qwen2.5-32B": 1.8,
   "miss_Qwen2.5-32B": 25.0,
   "ff_Gemma-2-9B": 5.4,
   "miss_Gemma-2-9B": 25.0,
   "ff_Llama-3.1-8B": 42.9,
   "miss_Llama-3.1-8B": 50.0,
   "ff_TigerLLM-9B-it": 3.6,
   "miss_TigerLLM-9B-it": 50.0
  }
 ],
 "overlap": [
  {
   "team": "ExtremeAI",
   "p1": 0.983,
   "p2": 0.812
  },
  {
   "team": "Huntrix",
   "p1": 0.983,
   "p2": 0.901
  },
  {
   "team": "BUET_NeuralX",
   "p1": 0.962,
   "p2": 0.954
  },
  {
   "team": "IUFree",
   "p1": 0.959,
   "p2": 0.891
  },
  {
   "team": "Ain't No Way",
   "p1": 0.959,
   "p2": 0.381
  },
  {
   "team": "Bitwiz",
   "p1": 0.936,
   "p2": 0.921
  },
  {
   "team": "DataDriven",
   "p1": 0.933,
   "p2": 0.603
  },
  {
   "team": "sudo_rm_-rf",
   "p1": 0.93,
   "p2": 0.71
  },
  {
   "team": "r=0",
   "p1": 0.928,
   "p2": 0.786
  },
  {
   "team": "ArektaGenericTeam",
   "p1": 0.927,
   "p2": 0.833
  },
  {
   "team": "CUET cURL-marx",
   "p1": 0.926,
   "p2": 0.673
  },
  {
   "team": "4ier",
   "p1": 0.923,
   "p2": 0.905
  },
  {
   "team": "CUET_AL_Masaar",
   "p1": 0.923,
   "p2": 0.83
  },
  {
   "team": "zero_shot",
   "p1": 0.919,
   "p2": 0.822
  },
  {
   "team": "CutiePookieUrza",
   "p1": 0.912,
   "p2": 0.898
  },
  {
   "team": "Reverse_Attention",
   "p1": 0.912,
   "p2": 0.887
  },
  {
   "team": "watermelon",
   "p1": 0.91,
   "p2": 0.704
  },
  {
   "team": "The Hallucinators",
   "p1": 0.902,
   "p2": 0.749
  },
  {
   "team": "wrongCha",
   "p1": 0.898,
   "p2": 0.897
  },
  {
   "team": "The Hunting Party",
   "p1": 0.897,
   "p2": 0.37
  },
  {
   "team": "Labyrinth",
   "p1": 0.886,
   "p2": 0.805
  },
  {
   "team": "SUST_Nabajatra",
   "p1": 0.874,
   "p2": 0.477
  },
  {
   "team": "DU_Outliers",
   "p1": 0.872,
   "p2": 0.902
  },
  {
   "team": "GTA8",
   "p1": 0.837,
   "p2": 0.429
  },
  {
   "team": "byte_the_dust",
   "p1": 0.824,
   "p2": 0.371
  }
 ],
 "percentiles": [
  {
   "judge": "Qwen2.5-32B",
   "f1": 0.77,
   "pct": 57.3
  },
  {
   "judge": "Gemma-2-9B",
   "f1": 0.731,
   "pct": 40.7
  },
  {
   "judge": "Llama-3.1-8B",
   "f1": 0.557,
   "pct": 8.1
  },
  {
   "judge": "TigerLLM-9B-it",
   "f1": 0.734,
   "pct": 42.0
  }
 ],
 "tiers": [
  {
   "tier": "<0.60",
   "p1": 18,
   "p2": 6
  },
  {
   "tier": "0.60--0.70",
   "p1": 53,
   "p2": 2
  },
  {
   "tier": "0.70--0.80",
   "p1": 77,
   "p2": 5
  },
  {
   "tier": "0.80--0.90",
   "p1": 42,
   "p2": 12
  },
  {
   "tier": ">= 0.90",
   "p1": 32,
   "p2": 7
  }
 ],
 "logprob": [
  {
   "release": "phase1",
   "model": "Qwen2.5-32B",
   "context": "with",
   "d": 0.489,
   "d_lo": 0.37,
   "d_hi": 0.62,
   "auroc": 0.692,
   "auroc_lo": 0.66,
   "auroc_hi": 0.72
  },
  {
   "release": "phase1",
   "model": "Gemma-2-9B",
   "context": "with",
   "d": 0.755,
   "d_lo": 0.65,
   "d_hi": 0.87,
   "auroc": 0.775,
   "auroc_lo": 0.75,
   "auroc_hi": 0.8
  },
  {
   "release": "phase1",
   "model": "Llama-3.1-8B",
   "context": "with",
   "d": 0.645,
   "d_lo": 0.53,
   "d_hi": 0.78,
   "auroc": 0.773,
   "auroc_lo": 0.75,
   "auroc_hi": 0.79
  },
  {
   "release": "phase1",
   "model": "Gemma-4-12B",
   "context": "with",
   "d": 0.031,
   "d_lo": -0.08,
   "d_hi": 0.13,
   "auroc": 0.505,
   "auroc_lo": 0.47,
   "auroc_hi": 0.53
  },
  {
   "release": "phase2",
   "model": "Qwen2.5-32B",
   "context": "with",
   "d": 0.201,
   "d_lo": 0.12,
   "d_hi": 0.28,
   "auroc": 0.559,
   "auroc_lo": 0.54,
   "auroc_hi": 0.58
  },
  {
   "release": "phase2",
   "model": "Gemma-2-9B",
   "context": "with",
   "d": 0.149,
   "d_lo": 0.07,
   "d_hi": 0.23,
   "auroc": 0.547,
   "auroc_lo": 0.52,
   "auroc_hi": 0.57
  },
  {
   "release": "phase2",
   "model": "Llama-3.1-8B",
   "context": "with",
   "d": 0.158,
   "d_lo": 0.08,
   "d_hi": 0.24,
   "auroc": 0.549,
   "auroc_lo": 0.53,
   "auroc_hi": 0.57
  },
  {
   "release": "phase2",
   "model": "Gemma-4-12B",
   "context": "with",
   "d": 0.012,
   "d_lo": -0.06,
   "d_hi": 0.1,
   "auroc": 0.502,
   "auroc_lo": 0.48,
   "auroc_hi": 0.53
  },
  {
   "release": "phase1",
   "model": "Qwen2.5-32B",
   "context": "without",
   "d": 0.051,
   "d_lo": -0.05,
   "d_hi": 0.17,
   "auroc": 0.52,
   "auroc_lo": 0.48,
   "auroc_hi": 0.55
  },
  {
   "release": "phase1",
   "model": "Gemma-2-9B",
   "context": "without",
   "d": 0.063,
   "d_lo": -0.06,
   "d_hi": 0.18,
   "auroc": 0.521,
   "auroc_lo": 0.49,
   "auroc_hi": 0.55
  },
  {
   "release": "phase1",
   "model": "Llama-3.1-8B",
   "context": "without",
   "d": 0.052,
   "d_lo": -0.06,
   "d_hi": 0.15,
   "auroc": 0.5,
   "auroc_lo": 0.47,
   "auroc_hi": 0.53
  },
  {
   "release": "phase1",
   "model": "Gemma-4-12B",
   "context": "without",
   "d": 0.066,
   "d_lo": -0.04,
   "d_hi": 0.18,
   "auroc": 0.517,
   "auroc_lo": 0.49,
   "auroc_hi": 0.55
  },
  {
   "release": "phase2",
   "model": "Qwen2.5-32B",
   "context": "without",
   "d": 0.153,
   "d_lo": 0.07,
   "d_hi": 0.23,
   "auroc": 0.525,
   "auroc_lo": 0.5,
   "auroc_hi": 0.55
  },
  {
   "release": "phase2",
   "model": "Gemma-2-9B",
   "context": "without",
   "d": 0.114,
   "d_lo": 0.03,
   "d_hi": 0.18,
   "auroc": 0.517,
   "auroc_lo": 0.49,
   "auroc_hi": 0.54
  },
  {
   "release": "phase2",
   "model": "Llama-3.1-8B",
   "context": "without",
   "d": 0.117,
   "d_lo": 0.04,
   "d_hi": 0.2,
   "auroc": 0.507,
   "auroc_lo": 0.49,
   "auroc_hi": 0.53
  },
  {
   "release": "phase2",
   "model": "Gemma-4-12B",
   "context": "without",
   "d": -0.022,
   "d_lo": -0.1,
   "d_hi": 0.06,
   "auroc": 0.503,
   "auroc_lo": 0.48,
   "auroc_hi": 0.53
  }
 ],
 "split": [
  {
   "dim": "family",
   "value": "A",
   "n": 2000,
   "pub": 590
  },
  {
   "dim": "family",
   "value": "B",
   "n": 1200,
   "pub": 365
  },
  {
   "dim": "family",
   "value": "C",
   "n": 700,
   "pub": 211
  },
  {
   "dim": "family",
   "value": "D",
   "n": 700,
   "pub": 213
  },
  {
   "dim": "family",
   "value": "E",
   "n": 400,
   "pub": 121
  },
  {
   "dim": "failure_mode",
   "value": "adversarial_context_reality_injection",
   "n": 200,
   "pub": 61
  },
  {
   "dim": "failure_mode",
   "value": "bangla_linguistic_content",
   "n": 240,
   "pub": 72
  },
  {
   "dim": "failure_mode",
   "value": "confidence_miscalibration",
   "n": 50,
   "pub": 15
  },
  {
   "dim": "failure_mode",
   "value": "contextual_entity_swap",
   "n": 250,
   "pub": 76
  },
  {
   "dim": "failure_mode",
   "value": "cultural_default_substitution",
   "n": 400,
   "pub": 117
  },
  {
   "dim": "failure_mode",
   "value": "culturally_loaded_mistranslation",
   "n": 65,
   "pub": 20
  },
  {
   "dim": "failure_mode",
   "value": "data_artifact_detection",
   "n": 60,
   "pub": 18
  },
  {
   "dim": "failure_mode",
   "value": "definitional_categorical",
   "n": 150,
   "pub": 45
  },
  {
   "dim": "failure_mode",
   "value": "deliberately_ambiguous_gold",
   "n": 80,
   "pub": 25
  },
  {
   "dim": "failure_mode",
   "value": "diaspora_migration",
   "n": 80,
   "pub": 24
  },
  {
   "dim": "failure_mode",
   "value": "direct_contradiction",
   "n": 350,
   "pub": 107
  },
  {
   "dim": "failure_mode",
   "value": "discourse_level_omission",
   "n": 100,
   "pub": 30
  },
  {
   "dim": "failure_mode",
   "value": "encoding_unicode_variation",
   "n": 80,
   "pub": 24
  },
  {
   "dim": "failure_mode",
   "value": "entity_substitution",
   "n": 300,
   "pub": 86
  },
  {
   "dim": "failure_mode",
   "value": "extrapolation_fabricated_detail",
   "n": 300,
   "pub": 91
  },
  {
   "dim": "failure_mode",
   "value": "harness_sensitive_tokenization",
   "n": 120,
   "pub": 35
  },
  {
   "dim": "failure_mode",
   "value": "ignoring_context_for_parametric",
   "n": 200,
   "pub": 61
  },
  {
   "dim": "failure_mode",
   "value": "instruction_adherence_bypass",
   "n": 100,
   "pub": 31
  },
  {
   "dim": "failure_mode",
   "value": "known_imperfect_source",
   "n": 60,
   "pub": 19
  },
  {
   "dim": "failure_mode",
   "value": "negative_control",
   "n": 200,
   "pub": 61
  },
  {
   "dim": "failure_mode",
   "value": "numeral_measure_word_errors",
   "n": 95,
   "pub": 29
  },
  {
   "dim": "failure_mode",
   "value": "numerical_precision_drift",
   "n": 250,
   "pub": 71
  },
  {
   "dim": "failure_mode",
   "value": "parenthesis_structural_completion",
   "n": 60,
   "pub": 18
  },
  {
   "dim": "failure_mode",
   "value": "prompt_injection_resistance",
   "n": 80,
   "pub": 24
  },
  {
   "dim": "failure_mode",
   "value": "reasoning_language_inconsistency",
   "n": 85,
   "pub": 26
  },
  {
   "dim": "failure_mode",
   "value": "refusal_vs_fabrication",
   "n": 60,
   "pub": 19
  },
  {
   "dim": "failure_mode",
   "value": "script_attention_traps",
   "n": 95,
   "pub": 28
  },
  {
   "dim": "failure_mode",
   "value": "sociopragmatic_register",
   "n": 120,
   "pub": 36
  },
  {
   "dim": "failure_mode",
   "value": "temporal_confusion",
   "n": 350,
   "pub": 104
  },
  {
   "dim": "failure_mode",
   "value": "time_anchored_admin_shift",
   "n": 70,
   "pub": 21
  },
  {
   "dim": "failure_mode",
   "value": "wrong_attribution",
   "n": 200,
   "pub": 61
  },
  {
   "dim": "failure_mode",
   "value": "zero_error_horizon",
   "n": 150,
   "pub": 45
  },
  {
   "dim": "task_type",
   "value": "adversarial",
   "n": 500,
   "pub": 153
  },
  {
   "dim": "task_type",
   "value": "long_ob_qa",
   "n": 500,
   "pub": 153
  },
  {
   "dim": "task_type",
   "value": "short_cb_qa",
   "n": 1600,
   "pub": 473
  },
  {
   "dim": "task_type",
   "value": "short_ob_qa",
   "n": 1300,
   "pub": 389
  },
  {
   "dim": "task_type",
   "value": "summarization",
   "n": 600,
   "pub": 182
  },
  {
   "dim": "task_type",
   "value": "translation",
   "n": 500,
   "pub": 150
  },
  {
   "dim": "cultural_band",
   "value": "C0",
   "n": 750,
   "pub": 225
  },
  {
   "dim": "cultural_band",
   "value": "C1",
   "n": 3500,
   "pub": 1050
  },
  {
   "dim": "cultural_band",
   "value": "C2",
   "n": 750,
   "pub": 225
  },
  {
   "dim": "provenance",
   "value": "theory_authored",
   "n": 3250,
   "pub": 985
  },
  {
   "dim": "provenance",
   "value": "theory_confirmed",
   "n": 1750,
   "pub": 515
  },
  {
   "dim": "source",
   "value": "bdlaws",
   "n": 700,
   "pub": 198
  },
  {
   "dim": "source",
   "value": "common_crawl",
   "n": 350,
   "pub": 112
  },
  {
   "dim": "source",
   "value": "ebanglalibrary",
   "n": 550,
   "pub": 165
  },
  {
   "dim": "source",
   "value": "government",
   "n": 900,
   "pub": 273
  },
  {
   "dim": "source",
   "value": "nctb",
   "n": 700,
   "pub": 218
  },
  {
   "dim": "source",
   "value": "newspapers",
   "n": 700,
   "pub": 211
  },
  {
   "dim": "source",
   "value": "wikipedia_banglapedia",
   "n": 1100,
   "pub": 323
  },
  {
   "dim": "label",
   "value": "0",
   "n": 2717,
   "pub": 802
  },
  {
   "dim": "label",
   "value": "1",
   "n": 2283,
   "pub": 698
  }
 ],
 "example": {
  "id": "P2-00040",
  "source": "wikipedia_banglapedia",
  "task_type": "short_cb_qa",
  "family": "A",
  "failure_mode": "cultural_default_substitution",
  "cultural_band": "C1",
  "provenance": "theory_authored",
  "context": "[NULL]",
  "prompt_bn": "'বিদ্রোহী' কবিতাটি কে রচনা করেন?",
  "response_bn": "'বিদ্রোহী' কবিতাটি রচনা করেন রবীন্দ্রনাথ ঠাকুর।",
  "label": 0,
  "rationale": "'বিদ্রোহী' (The Rebel) was written by Kazi Nazrul Islam; the response substitutes Rabindranath Tagore, the more globally famous Bengali laureate — precisely the cultural-default substitution failure the competition's own overview names as its headline example."
 }
};
