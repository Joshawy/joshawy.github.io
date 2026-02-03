(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && header && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    // Close menu when a nav link is clicked (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (header.classList.contains("open")) {
          header.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        }
      });
    });
  }

  // Smooth-ish anchor behavior without overriding user prefs
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", id);
      }
    });
  });
})();
