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

/* The following is related to the "home" button */
// if button pressed in home page, change theme. Background = black, foreground = white
// and vice versa

class span_cycle {
  constructor(list, tag) {
    this.tag = tag;
    this.list = list;
    this.index = 0;
    this.size = list.length;
  }
  
  // Not used 
  start_cycle() {
    setTimeout(() => this.cycle(), 6000);
  }
  
  cycle() {
    let b = baffle(this.tag)
      .start()
      .text(currentText => this.list[this.index])
      .set({
        characters: "░▉╳▓⧚╳⦀⧛▒▐╳ ▓⦚▒▊╸┻▓▒▛╮▂┆┉▞╳",
        speed: 200,
      })
      .reveal(1500, 800);
      this.index = ++this.index >= this.size ? 0: this.index;
      setTimeout(() => this.cycle(), 6000);
  }
}

/* The following is related to the about page */
var span_tags = ["#name", "#year", "#passion", "#interest"];
var span_lists = [
  ["Hrithvik.", "Jacob."], 
  ["fourth year", "4th year"], 
  ["Web Development.", "Artificial Intelligence.", "Machine Learning.", "Algorithmic Trading."],
  ["trading the market.", "making photographs.", "conquering the hiking trails.", "spicing up the kitchen."]
  ];

if (window.location.pathname === "/") {
  for (var i = 0; i < span_lists.length; i++) {
    let span_obj = new span_cycle(span_lists[i], span_tags[i]);
    span_obj.cycle();
  }
}