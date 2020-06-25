/* Global */
const body = document.body;
const navBar = document.getElementById("nav_bar");

/* Script relating to the header */

// Change to enum when using typescript (or vue)
const bwColour = ["white", "black"];
const whiteShades = ["#FFFAFA", "#F0FFF0", "#F5FFFA", "#F0F8FF", "#F8F8FF", "#F5F5F5"];
const landingBgSize = bwColour.length;
const bgSize = whiteShades.length;
var landingIndex = 0;
var bgIndex = 0;

// update background colour
// parameter: element
function updateBg(element, colourScheme) {
  if (colourScheme === "bw") 
    element.style.backgroundColor = bwColour[landingIndex];
  else if (colourScheme === "whiteShades") 
    element.style.backgroundColor = whiteShades[bgIndex];
}

function updateIndex(index) {
  if (index === "bw")
    landingIndex = (++landingIndex >= landingBgSize ? 0 : landingIndex);
  else if (index === "whiteShades")
    bgIndex = (++bgIndex >= bgSize ? 0 : bgIndex);
}

function bgReset() {
  body.style.backgroundColor = "white";
  navBar.style.backgroundColor = "white";
}

/* Script related to the landing page */
const typedJsContainer = document.getElementById("typedjs_container");
const typedJsText = document.getElementsByClassName("hover_state");
const comingSoon = document.getElementById("coming_soon");

// if on the home page
if (window.location.pathname === "/") {
  // On hover, flip background and foreground colour
  for (var i = 0; i < 2; i++) {
    typedJsText[i].addEventListener("mouseenter", e => {
      updateBg(typedJsContainer, "bw");
      typedJsContainer.style.color = "black";
      updateIndex("bw");
    });
  
    typedJsText[i].addEventListener("mouseleave", e => {
      updateBg(typedJsContainer, "bw");
      typedJsContainer.style.color = "white";
      updateIndex("bw");
    });
  }
  
  // Using typed.js for the landing page name.
  var typed = new Typed("#name_typed", {
    strings: ["Hrithvik S", "^20Jacob Sood^4000", "^20Hrithvik Sood"],
    typeSpeed: 85,
    backSpeed: 100,
    loop: false,
    startDelay: 1000,
    showCursor: true,
    cursorChar: "|",
    onTypingResumed: function(pos, typed) { 
      if (pos === 2) {
        setTimeout(function() {
          comingSoon.classList.add("fade_in");
          b.reveal(10000, 2000);
        }, 1000);
      }
    }
  });
  
  // Coming soon baffle
  let b = baffle("#coming_soon")
    .start()
    .set({
      characters: "█<█ ▒▓/▓▓ ▒>▓<▓ ░█▓ ▒█>░▓ ▓██░ ▒▓░ ▓/█▒ >/░▒",
      speed: 200,
    });

  // Move down from landing page into the home page and hide typed js
  typedJsContainer.addEventListener("click", e => {
    navBar.scrollIntoView({behavior: "smooth"});
    setTimeout(function() {
      typedJsContainer.style.display = "none";
    }, 600);
  });
}

/* Script related to the header and footer */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const menu = document.getElementsByClassName("menu");
const menuLen = menu.length;

for (var i = 0; i < menuLen; i++) {
  menu[i].addEventListener("mouseenter", e => {
    updateBg(body, "whiteShades");
    updateBg(navBar, "whiteShades");
    updateIndex("whiteShades");
  });
}

for (var i = 0; i < menuLen; i++) {
  menu[i].addEventListener("mouseleave", bgReset);
}