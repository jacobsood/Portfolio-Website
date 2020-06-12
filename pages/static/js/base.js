/* Script related to the landing page */
const landing_div = document.getElementById("landing_div");
const body = document.body;

// On hover of text, flip background and foreground colour
landing_div.addEventListener("mouseenter", e => {
  landing_div.style.color = "black";
  body.style.backgroundColor = "white";
});

landing_div.addEventListener("mouseleave", e => {
  landing_div.style.color = "white";
  body.style.backgroundColor = "black";
})

// Using typed.js for the landing page name.
var typed = new Typed("#name_typed", {
  strings: ["Hrithvik S", "Jacob Sood^5000", "Hrithvik Sood"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: false,
  startDelay: 1000,
  backDelay: 0,
  showCursor: [true, "HELLO", true]
});
