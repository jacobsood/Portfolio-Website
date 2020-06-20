/* Global */

const body = document.body;
const pageHeader = document.getElementById("page_header");

/* Script relating to the header */

// Change to enum when using typescript (or vue)
const bgColours = ["#F0EBF4", "#B39BC8", "#FFD8CE", "#F76C6C",
  "#F0DEFF", "#FEADB9"];
const bwColour = ["white", "black"];
var bgSize = 2;
var bgIndex = 0;

// update background colour
// parameter: element
function updateBg(elements) {
  for (var i = 0; i < elements.length; i++)
    elements[i].style.backgroundColor = bwColour[bgIndex];
  bgIndex = (++bgIndex >= bgSize ? 0 : bgIndex);
}

/* Script related to the landing page */

const typedJsContainer = document.getElementById("typedjs_container");
const typedJsDiv = document.getElementById("typed_js");
const comingSoon = document.getElementById("coming_soon");

// On hover, flip background and foreground colour
typedJsDiv.addEventListener("mouseenter", e => {
  updateBg([typedJsContainer]);
  typedJsContainer.style.color = "black";
});

typedJsDiv.addEventListener("mouseleave", e => {
  updateBg([typedJsContainer]);
  typedJsContainer.style.color = "white";
});

// Using typed.js for the landing page name.
var typed = new Typed("#name_typed", {
  strings: ["Hrithvik S", "Jacob Sood^4000", "Hrithvik Sood"],
  typeSpeed: 85,
  backSpeed: 100,
  loop: false,
  startDelay: 1000,
  backDelay: 0,
  showCursor: true,
  cursorChar: "|",
  onTypingResumed: function(pos, typed) { 
    document.getElementById("coming_soon").addClass("fade_in");
  }
});

// Coming soon baffle
let b = baffle('#coming_soon')
  .start()
  .set({
    characters: '█<█ ▒▓/▓▓ ▒>▓<▓ ░█▓ ▒█>░▓ ▓██░ ▒▓░ ▓/█▒ >/░▒',
    speed: 200,
  });

// Move down from landing page into the index
typedJsContainer.addEventListener("click", e => {
  pageHeader.scrollIntoView({behavior: "smooth"});
});

const content = document.getElementById("content");
const footer = document.getElementById("page_footer");
const header = document.getElementById("page_header");
const footLinks = document.getElementsByClassName("sm");

const len = footLinks.length;
for (var i = 0; i < len; i++) {
  footLinks[i].addEventListener("mouseenter", e => {
    updateBg([content, footer, header]);
  });
}
for (var i = 0; i < len; i++) {
  footLinks[i].addEventListener("mouseleave", e => {
    updateBg([content, footer, header]);
  });
}