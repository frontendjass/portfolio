// BURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// PROJECTS SECTION
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  maxDelta = window.innerWidth / 2;

  const percentage = mouseDelta / maxDelta * -100,
  nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
  nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)` },
  { duration: 1200, fill: "forwards" });

  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center` },
    { duration: 1200, fill: "forwards" });
  }
  
};



window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
});

// MAKE SENTENCE SHORTER WHEN SMALLER DEVICE

function changeTextOnScreenSize() {
  const paragraph = document.getElementsByClassName("home-p")[0];
  if (window.innerWidth <= 830) { 
    paragraph.textContent = "I design digital frameworks and websites, akin to architects creating physical spaces.";
  } 
}

// Add an event listener to respond to window resize
window.addEventListener("resize", changeTextOnScreenSize);

// Run the function on page load
window.addEventListener("load", changeTextOnScreenSize);

