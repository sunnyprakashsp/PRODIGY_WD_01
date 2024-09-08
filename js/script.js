// SHOW HEADER MENU
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.addEventListener("click", () => {
      menu.classList.add("show-menu");
    });
    close.addEventListener("click", () => {
      menu.classList.remove("show-menu");
    });
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// STICKY HEADER
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.header__menu a[href*= ${sectionId} ]`)
        .classList.add("section-active");
    } else {
      document
        .querySelector(`.header__menu a[href*= ${sectionId} ]`)
        .classList.remove("section-active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//Timer
var countDownDate = new Date("Jan 30, 2025 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
  + minutes + "Minutes " + seconds + "Seconds "; 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function myFunction() {
  document.getElementById("btn").innerHTML = "<textarea cols = '50' rows = '20' name='text' id='text_id' class='form-control' style='resize:vertical' ></textarea>";
  document.getElementById("text_id").focus();
}

// SCROLLUP
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
