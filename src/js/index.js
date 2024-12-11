
//Swiper slider for articles section of Horizons home page
var swiper = new Swiper(".home_news_swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
          slidesPerView:1,
          spaceBetween:39,
        },
        499:{
          slidesPerView:1,
          spaceBetween:30,
        },
        799:{
          slidesPerView:2,
          spaceBetween:30,
        },
        1099:{
          slidesPerView:3,
          spaceBetween:30,
        }
      }
    });


//Swiepr slider for gallery display on Horizons home page
var swiper = new Swiper(".gallery_box_swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
          slidesPerView:2,
          spaceBetween:30,
        },
        499:{
          slidesPerView:2,
          spaceBetween:30,
        },
        799:{
          slidesPerView:3,
          spaceBetween:30,
        },
        1099:{
          slidesPerView:5,
          spaceBetween:30,
        }
      }
    });
  

//Swiper for browse by categoreis section
var swiper = new Swiper(".browse_swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".browse_swiper_pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
          slidesPerView:1,
          spaceBetween:30,
        },
        699:{
          slidesPerView:2,
          spaceBetween:30,
        },
        899:{
          slidesPerView:4,
          spaceBetween:30,
        },
        1099:{
          slidesPerView:4,
          spaceBetween:30,
        }
      }
    });


//Swiper for trending sldier section 
var swiper = new Swiper(".trending_display_swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
          slidesPerView:3,
          spaceBetween:30,
        },
        499:{
          slidesPerView:3,
          spaceBetween:30,
        },
        799:{
          slidesPerView:4,
          spaceBetween:30,
        },
        899:{
          slidesPerView:5,
          spaceBetween:30,
        }
      }
    });


//Swiper for membership selection section
var swiper = new Swiper(".membership_box_right_swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
          slidesPerView:2,
          spaceBetween:30,
        },
        499:{
          slidesPerView:1,
          spaceBetween:30,
        },
        799:{
          slidesPerView:1,
          spaceBetween:30,
        },
        899:{
          slidesPerView:4,
          spaceBetween:30,
        }
      }
    });


const gall1 = document.querySelector('#gallImage1');
const gall2 = document.querySelector('#gallImage2');
const gall3 = document.querySelector('#gallImage3');
const gall4 = document.querySelector('#gallImage4');
const gall5 = document.querySelector('#gallImage5');

const changeGalleryArray = [gall1, gall2, gall3, gall4, gall5];

changeGalleryArray.forEach((image) => {
  image.addEventListener('click', () => {
    document.querySelector('#mainImage').src = image.src;
  })
});


//Variables for display box elements
let trendingSlider = document.querySelector("trending_display_swiper_slider");
let displayBoxImage = document.querySelector("#artMainImage");
let displayTitle = document.querySelector("#artMainTitle");
let displayPara = document.querySelector("#artMainPara");
let displayPrice = document.querySelector("#artPriceTitle");
let displayAuthor = document.querySelector("#artAuthorTitle");

//Object constructor function for trending slider objects
class Trending{
  constructor(displayTitle, displayPara, displayPrice, displayAuthor, imageUrl){
    this.displayTitle = displayTitle;
    this.displayPara = displayPara;
    this.displayPrice = displayPrice;
    this.displayAuthor = displayAuthor;
    this.imageUrl = imageUrl;
  }
};

//new objects for first slider in trending section
const trendingSlider1 = new Trending(
  "LIBERATED PUNKS",
  "In a world of oppression and violation by the rich and powerful, a group of misfits strive to rebel against those that bring them down.",
  "FLOOR PRICE: 3.5ETH",
  "CREATED BY: JINX EKKO",
  "https://i.pinimg.com/originals/45/df/82/45df82b13b747404087c04a64240893c.jpg"
);

const trendingSlider2 = new Trending(
  "TOXIC UNDERKEEP",
  "Every city needds their golden girl, and here she is.",
  "FLOOR PRICE: 2.8ETH",
  "CREATED BY: VIOLET KIRAMANN",
  "https://wallpapers.com/images/hd/arcane-vi-from-prison-w3y59q9vwijsuz4o.jpg"
);

const trendingSlider3 = new Trending(
  "ROYAL CORRUPTION",
  "Now matter how posh, rich, or clean someone or something is, there lies a dirty, broken, or treachorous face that wears a mask to cover it all up.",
  "FLOOR PRICE: 1.5ETH",
  "CREATED BY: VANDETTA KYLE",
  "https://i.pinimg.com/736x/d6/60/3c/d6603cbc84a86ee2d078e05b38ed0c9d.jpg"
);

const trendingSlider4 = new Trending(
  "GOLDEN",
  "Riches, riches and more riches. Aspiration does not discriminate.",
  "FLOOR PRICE: 7ETH",
  "CREATED BY: JEMIAH DAVIS",
  "https://www.popsugar.com.au/wp-content/uploads/sites/2/2021/11/arcane-netflix-2000x1000-1.jpg"
);

const trendingSlider5 = new Trending(
  "BEACONS",
  "Despite the grime and blood stained streets, hope and aspiration prevail as every home needs a beacon of hope.",
  "FLOOR PRICE: 4ETH",
  "CREATED BY: JULIAN MDAMA",
  "https://wallpapers.com/images/hd/arcane-fearless-vander-ma54uf5juwycucuh.jpg"
);

//Array to store defined objects above 
const trendingArray = [
  trendingSlider1, 
  trendingSlider2,
  trendingSlider3,
  trendingSlider4,
  trendingSlider5
];

function trendingFunction(slider){
  displayBoxImage.src = slider.imageUrl;
  displayTitle.textContent = slider.displayTitle;
  displayPara.textContent = slider.displayPara;
  displayAuthor.textContent = slider.displayPrice;
  displayPrice.textContent = slider.displayPrice;
};

trendingArray.forEach((slider, index) => {
  let trendingSelected = document.querySelector(`#artOption${index + 1}`);
  trendingSelected.addEventListener('click', () => {
    trendingFunction(slider);
  });
});
