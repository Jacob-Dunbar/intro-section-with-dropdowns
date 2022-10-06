// mobile menu

const menuMobile = document.getElementById("menu-mobile");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const screenFade = document.getElementById("screen-fade");

const featuresMob = document.getElementById("features-mob");
const featuresDDMob = document.getElementById("features-dd-mob");
const featuresChevMob = document.getElementById("features-chev-mob");

const companyMob = document.getElementById("company-mob");
const companyDDMob = document.getElementById("company-dd-mob");
const companyChevMob = document.getElementById("company-chev-mob");

hamburger.addEventListener("click", () => {
  menuMobile.classList.add("in");
});

cross.addEventListener("click", () => {
  menuMobile.classList.remove("in");
});

hamburger.addEventListener("click", () => {
  screenFade.classList.add("active");
});

cross.addEventListener("click", () => {
  screenFade.classList.remove("active");
});

hamburger.addEventListener("click", () => {
  menuMobile.classList.add("in");
});

cross.addEventListener("click", () => {
  menuMobile.classList.remove("in");
});

featuresMob.addEventListener("click", () => {
  featuresDDMob.classList.toggle("show");
});

featuresMob.addEventListener("click", () => {
  featuresDDMob.classList.toggle("fade-in");
});

featuresMob.addEventListener("click", () => {
  featuresChevMob.classList.toggle("rotate");
});

companyMob.addEventListener("click", () => {
  companyDDMob.classList.toggle("show");
});

companyMob.addEventListener("click", () => {
  companyChevMob.classList.toggle("rotate");
});

//Desktop menu

const featuresDesk = document.getElementById("features-desk");
const featuresDDDesk = document.getElementById("features-dd-desk");
const featuresChevDesk = document.getElementById("features-chev-desk");

const companyDesk = document.getElementById("company-desk");
const companyDDDesk = document.getElementById("company-dd-desk");
const companyChevDesk = document.getElementById("company-chev-desk");

featuresDesk.addEventListener("mouseenter", () => {
  featuresDDDesk.classList.add("show");
});

featuresDesk.addEventListener("mouseleave", () => {
  featuresDDDesk.classList.remove("show");
});

featuresDesk.addEventListener("mouseenter", () => {
  featuresChevDesk.classList.add("rotate");
});

featuresDesk.addEventListener("mouseleave", () => {
  featuresChevDesk.classList.remove("rotate");
});

companyDesk.addEventListener("mouseenter", () => {
  companyDDDesk.classList.add("show");
});

companyDesk.addEventListener("mouseleave", () => {
  companyDDDesk.classList.remove("show");
});

companyDesk.addEventListener("mouseenter", () => {
  companyChevDesk.classList.add("rotate");
});

companyDesk.addEventListener("mouseleave", () => {
  companyChevDesk.classList.remove("rotate");
});
