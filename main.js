(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Mark active nav link based on current path (works on GitHub Pages too)
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-link").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("is-active");
  });
})();
