(function () {
  const menuBtn = document.querySelector("[data-menu]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach(function (el) { observer.observe(el); });
})();
