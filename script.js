const links = [...document.querySelectorAll('.quick-nav a')];
const sections = [...document.querySelectorAll('.slide')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sections.forEach((section) => section.classList.toggle('is-active', section === entry.target));
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));
sections[0]?.classList.add('is-active');
