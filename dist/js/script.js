window.onload = function () {
  document.getElementById("hero-left").classList.remove("slide-in-right");
  document.getElementById("hero-left").classList.add("slide-in-right-active");
  document.getElementById("hero-right").classList.remove("slide-in-left");
  document.getElementById("hero-right").classList.add("slide-in-left-active");
};
window.onscroll = function () {
  const header = document.getElementById("headers");
  const fixedNav = header.offsetTop;
  const about = document.getElementById("about");
  const skill = document.getElementById("skill");
  const contact = document.getElementById("contact");
  const photograph = document.getElementById("photograph");
  const todolist = document.getElementById("todolist");
  const nizamart = document.getElementById("nizamart");

  if (window.scrollY > 0) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
  if (window.scrollY > about.offsetTop - 350) {
    about.classList.remove("slide-in-bottom");
    about.classList.add("slide-in-bottom-active");
  }
  if (window.scrollY > skill.offsetTop - 350) {
    document
      .getElementById("skill-left-side")
      .classList.remove("slide-in-right");
    document
      .getElementById("skill-right-side")
      .classList.remove("slide-in-left");
    document
      .getElementById("skill-left-side")
      .classList.add("slide-in-right-active");
    document
      .getElementById("skill-right-side")
      .classList.add("slide-in-left-active");
  }
  if (window.scrollY > contact.offsetTop - 450) {
    document
      .getElementById("contact-section")
      .classList.remove("slide-in-bottom");
    document
      .getElementById("contact-section")
      .classList.add("slide-in-bottom-active");
  }
  if (window.scrollY > photograph.offsetTop - 350) {
    photograph.classList.remove("scale-small");
    photograph.classList.add("scale-small-active");
  }
  if (window.scrollY > todolist.offsetTop - 350) {
    todolist.classList.remove("scale-small");
    todolist.classList.add("scale-small-active");
  }
  if (window.scrollY > nizamart.offsetTop - 350) {
    nizamart.classList.remove("scale-small");
    nizamart.classList.add("scale-small-active");
  }
};

const hamburg = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
hamburg.addEventListener("click", function () {
  hamburg.classList.toggle("hamburger-active");
  navbar.classList.toggle("hidden");
});
const navlink = document.querySelectorAll(".nav-link");
navlink.forEach(function (e) {
  e.addEventListener("click", function () {
    hamburg.classList.toggle("hamburger-active");
    navbar.classList.toggle("hidden");
  });
});
