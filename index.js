// const { default: Typed } = require("./node_modules/typed.js");



var toggled = false;

document.getElementById("toggle").onclick = function togggleFun(){
    toggled = !toggled
    console.log(toggled)
    if (toggled){
        document.getElementById("toggle").classList.add("onColor")
        document.getElementById("ball").classList.add("move")
        document.querySelector(".light").classList.remove("hide-light")
        document.querySelector(".profile-photo").classList.remove("hide-photo")
    }
    else{
        document.getElementById("toggle").classList.remove("onColor")
        document.getElementById("ball").classList.remove("move")
        document.querySelector(".light").classList.add("hide-light")
        document.querySelector(".profile-photo").classList.add("hide-photo")
    }
}

// var type = new Typed(".softwares", {
//     strings: ["Front End Developer", "Designer", "Java Developer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });


// Get all tabs and content sections
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Attach click event listeners to tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Deactivate all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Hide all tab content
    tabContents.forEach((content) => (content.style.display = "none"));
    // Activate the clicked tab
    tab.classList.add("active");
    // Show the corresponding tab content
    const tabId = tab.getAttribute("data-tab");
    const content = document.getElementById(tabId);
    content.style.display = "block";
  });
});


