const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});
// Changing Gallery
var image = document.getElementById("image")


var images = ["./images/img7.jpg", "./images/img8.jpg", "./images/img5.jpg"];

var index = 0;

function updateImage() {

image.src = images[index];

index = (index + 1) % images.length ;

}

setInterval(updateImage,2000);
// Add this JavaScript code to your script.js file

const navLinks = document.querySelectorAll('nav .navigation ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const checkBox = document.getElementById('check');
    checkBox.checked = false;
  });
});
const navbarToggle = document.querySelector('.navbar-toggle');
const navigation = document.querySelector('.navigation');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navigation.classList.toggle('active');
});
const navbarToggler = document.querySelector('.navbar-toggler');
const body1= document.querySelector('body1');

navbarToggler.addEventListener('click', () => {
    body1.classList.toggle('menu-open');
});
