/* Functionality for toggling navbar menu in responsive design */
let menuList = document.querySelector('#menuList');
menuList.style.maxHeight = "0px";

function menuToggle(){
if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "200px";
  }
  else{
  menuList.style.maxHeight = "0px";
}
}


let slider = document.querySelectorAll(".nftCollectionBoxSlider");
let output = document.querySelectorAll(".nftCollectionValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var swiper = new Swiper(".profile_slider1_swiper", {
slidesPerView: 5,
spaceBetween: 30,
loop:true,
freeMode:true,
autoplay: {
delay: 1,
disableOnInteraction: true
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
freeMode: true,
speed: 5000,
freeModeMomentum: false,

breakpoints :{
  0:{
    slidesPerView:1,
    spaceBetween:30,
  },
  400:{
    slidesPerView:2,
    spaceBetween:30,
  },
  599:{
    slidesPerView: 2,
    spaceBetweenSlides: 20,
  },
  600:{
    slideaPerView: 3,
    spaceBetweenSlides: 20,
  },
  900:{
    slidesPerView: 5,
    spaceBetweenSlides: 20,
  }
}
});