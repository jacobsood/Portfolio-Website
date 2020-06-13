/* Script relating to the header */
// Change to enum when using typescript (or vue)
const bgColours = ["#F0EBF4", "#B39BC8", "#FFD8CE", "#F76C6C",
  "#F0DEFF", "#FEADB9"];
const bwColour = ["white", "black"];
var bgSize = 2;
var bgIndex = 0;

const pageHeader = document.getElementById("page_header");

// update background colour
// parameter: element
function updateBg(element) {
  element.style.backgroundColor = bwColour[bgIndex];
  bgIndex = (++bgIndex >= bgSize ? 0 : bgIndex);
}

/* Script related to the landing page */
const landingDiv = document.getElementById("landing_div");
const typedJsDiv = document.getElementById("typed_js");
const body = document.body;

// On hover, flip background and foreground colour
typedJsDiv.addEventListener("mouseenter", e => {
  updateBg(landingDiv);
  landingDiv.style.color = "black";
});

typedJsDiv.addEventListener("mouseleave", e => {
  updateBg(landingDiv);
  landingDiv.style.color = "white";
});

// Using typed.js for the landing page name.
var typed = new Typed("#name_typed", {
  strings: ["Hrithvik S", "Jacob Sood^4000", "Hrithvik Sood"],
  typeSpeed: 85,
  backSpeed: 100,
  loop: false,
  startDelay: 1000,
  backDelay: 0,
  showCursor: [true, "HELLO", true]
});

// Move down from landing page into the index
landingDiv.addEventListener("click", e => {
  pageHeader.scrollIntoView({behavior: "smooth"});
});
