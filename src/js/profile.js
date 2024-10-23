var swiper = new Swiper(".profile_main_body_section1_box_center_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".profile_main_body_section1_box_center_swiper_pagination",
      clickable: true,
    },
  });

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

    breakpoints:{
      0:{
        slidesPerView:1,
        spaceBetween:30,
      },
      400:{
        slidesPerView:2,
        spaceBetween:30,
      },
      799:{
        slidesPerView:3,
        spaceBetween:30,
      },
      999:{
        slidesPerView:4,
        spaceBetween:30,
      },
      1099:{
        slidesPerView:5,
        spaceBetween:30,
      }
    }
  });