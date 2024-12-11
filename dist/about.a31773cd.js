var swiper = new Swiper(".about_whoWeAre_box_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".about_whoWeAre_box_swiper_pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        799: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        899: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});
var swiper = new Swiper(".about_whoWeAre_traits_swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".about_whoWeAre_traits_swiper_pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
//swiper slider for what we value section
var swiper = new Swiper(".about_whatWeValue_box_bottom_swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".about_whatWeValue_box_bottom_pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1099: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
//functionality for who we are section with clickable tabs
let aboutTab = document.querySelectorAll(".about_whoWeAre_box_swiper_slider");
let aboutContent = document.querySelectorAll(".about_whoWeAre_traits_swiper");
let aboutPassion = document.querySelector("#aboutPassion");
aboutPassion.style.display = "block";
aboutTab.forEach((tab, index)=>{
    if (aboutPassion.style.display === "block") tab.addEventListener("click", ()=>{
        aboutPassion.style.display = "";
        aboutTab.forEach((tab)=>{
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        aboutContent.forEach((aboutContent)=>{
            aboutContent.classList.remove("active");
        });
        aboutContent[index].classList.add("active");
    //aboutContent[index].style.display = "block";
    });
    else aboutPassion.style.display = "block";
});
//functionality for changing h3 in who we are top section when tabs get clicked
let whoWeAreHeader = document.querySelector("#whoWeAreHeader");
let whoWeAreParagraph = document.querySelector("#whoWeArePara");
let whoWeAreTabTitle = document.querySelectorAll("about_whoWeAre_tab_title");
let whoWeAreTabPara = document.querySelectorAll("about_whoWAre_traits_para");
let whoWeAreTabHeader = document.querySelector(".about_whoWeAre_box_swiper_slider");
class WhoWeAre {
    constructor(whoWeAreHeader, whoWeAreParagraph){
        this.whoWeAreHeader = whoWeAreHeader;
        this.whoWeAreParagraph = whoWeAreParagraph;
    }
}
const whoWeAreSlider1 = new WhoWeAre("PASSION", "Here at Horizons we are extremely passionate and comprehensive in how we handle our creativity and work ethic.");
const whoWeAreSlider2 = new WhoWeAre("Creativity", "Horizons is all about letting your imagination run wild, and exploring the world of art and technology.");
const whoWeAreSlider3 = new WhoWeAre("DIVERSITY", "We love including people of different backgrounds no matter yoru race, culture, sexual orientation, appearance etc.");
const whoWeAreSlider4 = new WhoWeAre("SUSTAINABILITY", "We understand the significant impact our actions have on our planet, and this is why we create with ethical practices.");
const whoWeAreSlider5 = new WhoWeAre("Innovation", "Innovation is a critical part of a successful society, both economically adn socially. And here, we welcome it with open arms.");
const whoWeAreArray = [
    whoWeAreSlider1,
    whoWeAreSlider2,
    whoWeAreSlider3,
    whoWeAreSlider4,
    whoWeAreSlider5
];
function whoWeAreFunction(whoWeAreSlider) {
    whoWeAreHeader.textContent = whoWeAreSlider.whoWeAreHeader;
    whoWeAreParagraph.textContent = whoWeAreSlider.whoWeAreParagraph;
}
whoWeAreArray.forEach((whoSlider, index)=>{
    let whoWeAreHeading = document.querySelector(`#aboutTab${index + 1}`);
    whoWeAreHeading.addEventListener("click", ()=>{
        whoWeAreFunction(whoSlider);
    });
});
//functionality for automatically changing image source for overview section
let image1 = "https://sm.ign.com/t/ign_in/news/a/arcane-sea/arcane-season-2-trailer-offers-another-glimpse-at-the-league_9jt1.1200.jpg";
let image2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ea08e12-847b-4c43-8433-ff86b833fd7b/dfhla5z-b43e5d85-c013-42de-bb26-003655befbd9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlYTA4ZTEyLTg0N2ItNGM0My04NDMzLWZmODZiODMzZmQ3YlwvZGZobGE1ei1iNDNlNWQ4NS1jMDEzLTQyZGUtYmIyNi0wMDM2NTViZWZiZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-WUvipXntPAowzUBM7GiXUiO80rwjWP6OMlfdETGivk";
const images = [
    image1,
    image2
];
let currentImageIndex = 0;
function changeOverviewImage() {
    const overviewImage = document.querySelector(".about_overview_box_box_left_image");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    overviewImage.src = images[currentImageIndex];
}
//change images every 2 seconds
setInterval(changeOverviewImage, 1000);

//# sourceMappingURL=about.a31773cd.js.map
