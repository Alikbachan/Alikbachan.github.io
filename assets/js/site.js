/* Page chrome: sticky bar, reading progress, table-of-contents scrollspy, reveal-on-scroll, copy buttons. */
(function () {
  "use strict";
  const bar = document.querySelector(".topbar"), prog = document.querySelector(".progress");
  function onScroll() {
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    bar.classList.toggle("scrolled", y > 8);
    prog.style.width = (h > 0 ? (100 * y) / h : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // scrollspy for side TOC and top nav
  const links = [...document.querySelectorAll('.toc a, .topnav a')];
  const secs = [...new Set(links.map((a) => a.getAttribute("href")))].map((h) => document.querySelector(h)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-35% 0px -60% 0px" });
    secs.forEach((s) => spy.observe(s));

    const rv = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => rv.observe(el));
  } else document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));

  // copy buttons
  document.querySelectorAll(".copy").forEach((b) => b.addEventListener("click", async () => {
    const txt = document.getElementById(b.dataset.target).innerText;
    try { await navigator.clipboard.writeText(txt); b.textContent = "Copied"; }
    catch (e) { b.textContent = "Select & copy"; }
    setTimeout(() => (b.textContent = "Copy"), 1600);
  }));
})();
