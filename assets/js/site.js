const nodes = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  { threshold: 0.18 }
);

nodes.forEach((node, index) => {
  node.style.transitionDelay = `${index * 80}ms`;
  observer.observe(node);
});