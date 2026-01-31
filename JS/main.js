window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelectorAll(".parallax").forEach(el => {
    const speed = el.getAttribute("data-speed");
    el.style.transform = `translateY(${scrolled / speed}px)`;
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

