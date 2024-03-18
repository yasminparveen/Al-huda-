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


const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('show');
});
