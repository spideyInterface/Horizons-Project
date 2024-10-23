/*Function for toggling menu*/ let menuList = document.querySelector("#menuList");
menuList.style.maxHeight = "0px";
function menuToggle() {
    if (menuList.style.maxHeight == "0px") menuList.style.maxHeight = "200px";
    else menuList.style.maxHeight = "0px";
}
//Swiper slider for articles section of Horizons home page
var swiper = new Swiper(".home_news_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 39
        },
        499: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        799: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1099: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
//Swiepr slider for gallery display on Horizons home page
var swiper = new Swiper(".gallery_box_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        499: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        799: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1099: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});
//Swiper for browse by categoreis section
var swiper = new Swiper(".browse_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".browse_swiper_pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        699: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        899: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1099: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
//Swiper for trending sldier section 
var swiper = new Swiper(".trending_display_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        499: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        799: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        899: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});
//Swiper for membership selection section
var swiper = new Swiper(".membership_box_right_swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        499: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        799: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        899: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
/*functions to change image gallery on click. 
Each function is dedicated to a specific image
*/ changeImage1();
function changeImage1() {
    let gall1 = document.querySelector("#gallImage1");
    gall1.addEventListener("click", function() {
        document.querySelector("#mainImage").src = "https://i.pinimg.com/originals/45/df/82/45df82b13b747404087c04a64240893c.jpg";
    });
}
changeImage2();
function changeImage2() {
    let gall2 = document.querySelector("#gallImage2");
    gall2.addEventListener("click", function() {
        document.querySelector("#mainImage").src = "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/10/the-arcane-in-arcane-season-2-trailer.jpg";
    });
}
changeImage3();
function changeImage3() {
    let gall3 = document.querySelector("#gallImage3");
    gall3.addEventListener("click", function() {
        document.querySelector("#mainImage").src = "https://preview.redd.it/no-spoilers-50-beautiful-4k-screenshots-from-the-s2-trailer-v0-69oet2utzzmd1.png?width=1080&crop=smart&auto=webp&s=3146e8f21f7da936e52c78d431fe4a833fd7d587";
    });
}
changeImage4();
function changeImage4() {
    let gall4 = document.querySelector("#gallImage4");
    gall4.addEventListener("click", function() {
        document.querySelector("#mainImage").src = "https://miro.medium.com/v2/resize:fit:1400/1*4nvlwcExoQl1RkBQUrr8uw.png";
    });
}
changeImage5();
function changeImage5() {
    let gall5 = document.querySelector("#gallImage5");
    gall5.addEventListener("click", function() {
        document.querySelector("#mainImage").src = "https://img.redbull.com/images/c_crop,w_3472,h_1736,x_453,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2024/9/6/ug2lywrkpkqgdsmadiqq/jinx-arcane-season-2-lol";
    });
}
/* Functions for trending containers. 
When an option is clicked on, the main image box
changes alogn with the description*/ /*Art Trending Functions */ artOptionChange1();
function artOptionChange1() {
    let artImage1 = document.querySelector("#artOption1");
    artImage1.addEventListener("click", function() {
        document.querySelector("#artMainImage").src = "../images/Untitled 8 (1).png";
        document.querySelector("#artMainTitle").innerHTML = "LIBERATED PUNKS";
        document.querySelector("#artMainPara").innerHTML = "In a world of oppression and violation by the rich and powerful, a group of misfits strive to rebel against those that bring them down.";
        document.querySelector("#artPriceTitle").innerHTML = "FLOOR PRICE: 3.5ETH";
        document.querySelector("#artAuthorTitle").innerHTML = "CREATED BY: JINX EKKO";
    });
}
artOptionChange2();
function artOptionChange2() {
    let artImage2 = document.querySelector("#artOption2");
    artImage2.addEventListener("click", function() {
        document.querySelector("#artMainImage").src = "https://wallpapers.com/images/hd/arcane-vi-from-prison-w3y59q9vwijsuz4o.jpg";
        document.querySelector("#artMainTitle").innerHTML = "TOXIC UNDERKEEP";
        document.querySelector("#artMainPara").innerHTML = "Every city needds their golden girl, and here she is.";
        document.querySelector("#artPriceTitle").innerHTML = "FLOOR PRICE: 2.8ETH";
        document.querySelector("#artAuthorTitle").innerHTML = "CREATED BY: VIOLET KIRAMANN";
    });
}
artOptionChange3();
function artOptionChange3() {
    let artImage3 = document.querySelector("#artOption3");
    artImage3.addEventListener("click", function() {
        document.querySelector("#artMainImage").src = "https://i.pinimg.com/736x/d6/60/3c/d6603cbc84a86ee2d078e05b38ed0c9d.jpg";
        document.querySelector("#artMainTitle").innerHTML = "ROYAL CORRUPTION";
        document.querySelector("#artMainPara").innerHTML = "Now matter how posh, rich, or clean someone or something is, there lies a dirty, broken, or treachorous face that wears a mask to cover it all up.";
        document.querySelector("#artPriceTitle").innerHTML = "FLOOR PRICE: 1.5ETH";
        document.querySelector("#artAuthorTitle").innerHTML = "CREATED BY: VANDETTA KYLE";
    });
}
artOptionChange4();
function artOptionChange4() {
    let artImage4 = document.querySelector("#artOption4");
    artImage4.addEventListener("click", function() {
        document.querySelector("#artMainImage").src = "https://www.popsugar.com.au/wp-content/uploads/sites/2/2021/11/arcane-netflix-2000x1000-1.jpg";
        document.querySelector("#artMainTitle").innerHTML = "GOLDEN";
        document.querySelector("#artMainPara").innerHTML = "Riches, riches and mroe riches. Aspiration does not discriminate.";
        document.querySelector("#artPriceTitle").innerHTML = "FLOOR PRICE: 7ETH";
        document.querySelector("#artAuthorTitle").innerHTML = "CREATED BY: JEMIAH DAVIS";
    });
}
artOptionChange5();
function artOptionChange5() {
    let artImage5 = document.querySelector("#artOption5");
    artImage5.addEventListener("click", function() {
        document.querySelector("#artMainImage").src = "https://wallpapers.com/images/hd/arcane-fearless-vander-ma54uf5juwycucuh.jpg";
        document.querySelector("#artMainTitle").innerHTML = "BEACONS";
        document.querySelector("#artMainPara").innerHTML = "Despite the grime and blood stained streets, hope and aspiration prevail as every home needs a beacon of hope.";
        document.querySelector("#artPriceTitle").innerHTML = "FLOOR PRICE: 4ETH";
        document.querySelector("#artAuthorTitle").innerHTML = "CREATED BY: JULIAN MDAMA";
    });
}

//# sourceMappingURL=connectWallets.de5c0784.js.map
