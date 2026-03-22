const navLinks = [...document.querySelectorAll(".site-header nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealTargets = [...document.querySelectorAll(".reveal")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index * 30, 320)}ms`;
  revealObserver.observe(target);
});
