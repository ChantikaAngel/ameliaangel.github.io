// Preloader
window.addEventListener("load", function () {
  var preloader = document.querySelector(".center-body");
  preloader.style.display = "none";
});

// Sticky navbar
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

// Get all navigation links
const navbarLinks = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('div[id]');

navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
};

// Add click event to navbar links for smooth scrolling
navbarlinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href'); // Get the target section id
    const targetSection = document.querySelector(targetId);
    
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// scrollup-btn
window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var clientHeight = 2000;
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition >= clientHeight) {
    document.querySelector(".scroll-up-button").style.display = "block";
  } else {
    document.querySelector(".scroll-up-button").style.display = "none";
  }
});

// Fungsi untuk me-redirect ke halaman atas ketika tombol scroll up di klik
document
  .querySelector(".scroll-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
