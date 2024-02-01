const storitveBtn = document.querySelector(".storitve");
const cenikBtn = document.querySelector(".cenik");
const naročanjeBtn = document.querySelector(".naročanje");
const kontaktBtn = document.querySelector(".kontakt");
const logoBtn = document.querySelector(".logo-image");

const storitveSection = document.querySelector(".storitve-section");
const kontaktSection = document.querySelector(".kontakt-section");

storitveBtn.addEventListener("click", () => {
  storitveSection.scrollIntoView({ behavior: "smooth" });
  window.scrollBy(0, -55);
});

kontaktBtn.addEventListener("click", () => {
  kontaktSection.scrollIntoView({ behavior: "smooth" });
  window.scrollBy(0, -55);
});

logoBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
