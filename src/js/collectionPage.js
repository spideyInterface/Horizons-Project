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


//Functionality for side bar toggle display on collections page.
const collectionMenu = () => {

  const dropDown1 = 
  document.querySelector('#nftCollection_bottom_box1');
  const dropDown2 = 
  document.querySelector('#nftCollection_bottom_box2');
  const dropDown3 = 
  document.querySelector('#nftCollection_bottom_box3');
  const dropDown4 = 
  document.querySelector('#nftCollection_bottom_box4');
  const dropDown5 = 
  document.querySelector('#nftCollection_bottom_box5');
  const dropDown6 = 
  document.querySelector('#nftCollection_bottom_box6');
  const dropDown7 = 
  document.querySelector('#nftCollection_bottom_box7');
  const dropDown8 = 
  document.querySelector('#nftCollection_bottom_box8');

  const dropDownArray = [
    dropDown1,
    dropDown2,
    dropDown3,
    dropDown4,
    dropDown5,
    dropDown6,
    dropDown7,
    dropDown8
  ];

  const arrow1 = 
  document.querySelector('#nftCollection_dropDown_arrow1');
  const arrow2 = 
  document.querySelector('#nftCollection_dropDown_arrow2');
  const arrow3 = 
  document.querySelector('#nftCollection_dropDown_arrow3');
  const arrow4 = 
  document.querySelector('#nftCollection_dropDown_arrow4');
  const arrow5 = 
  document.querySelector('#nftCollection_dropDown_arrow5');
  const arrow6 = 
  document.querySelector('#nftCollection_dropDown_arrow6');
  const arrow7 = 
  document.querySelector('#nftCollection_dropDown_arrow7');
  const arrow8 = 
  document.querySelector('#nftCollection_dropDown_arrow8');

  const arrowArray = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7, arrow8];

  arrowArray.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      const dropDown = dropDownArray[index];
      if(dropDown.style.display === 'none' || dropDown.style.display === ''){
        dropDown.style.display = 'block';
      } else {
        dropDown.style.display = 'none';
      }
    })
  });

};

collectionMenu();