const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// The source brief does not provide a live property-search API.
// This makes the search UI useful without pretending it searches a real database.
document.querySelector("#property-search").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    "Hello Marci, I'm interested in finding a property.",
    "",
    `Location: ${data.get("location") || "Not specified"}`,
    `Property type: ${data.get("type")}`,
    `Bedrooms: ${data.get("bedrooms")}`,
    `Bathrooms: ${data.get("bathrooms")}`,
    `Minimum price: ${data.get("minPrice") || "No minimum"}`,
    `Maximum price: ${data.get("maxPrice") || "No maximum"}`,
    "",
    "Please let me know what options may be available."
  ];
  const subject = encodeURIComponent("Property search inquiry");
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:marcimetzger@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Interested in: ${data.get("interest")}`,
    "",
    data.get("message") || "I'd like to discuss real estate options."
  ].join("\n");
  const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
  const mailto = `mailto:marcimetzger@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  document.querySelector("#form-status").textContent = "Opening your email application with your message prepared.";
  window.location.href = mailto;
});

// If an image URL fails, use its declared fallback where available.
document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => {
    if (img.dataset.fallback && img.src !== img.dataset.fallback) {
      img.src = img.dataset.fallback;
    }
  }, { once: true });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function scrollToTop(duration = 1000) {
  const start = window.scrollY;
  const startTime = performance.now();
  const root = document.documentElement;
  root.style.scrollBehavior = "auto"; // stop CSS smooth scroll fighting the animation

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    window.scrollTo(0, start * (1 - eased));
    if (progress < 1) requestAnimationFrame(step);
    else root.style.scrollBehavior = "";
  }
  requestAnimationFrame(step);
}

document.querySelector(".back-to-top").addEventListener("click", (event) => {
  event.preventDefault();
  if (reduceMotion.matches) window.scrollTo(0, 0);
  else scrollToTop();
});