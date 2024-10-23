/* Functionality for toggling navbar menu in responsive design */ let menuList = document.querySelector("#menuList");
menuList.style.maxHeight = "0px";
function menuToggle() {
    if (menuList.style.maxHeight == "0px") menuList.style.maxHeight = "200px";
    else menuList.style.maxHeight = "0px";
}
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
aboutTab.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
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
});
//functionality for changing h3 in who we are top section when tabs get clicked
let whoWeAreHeader = document.querySelector("#whoWeAreHeader");
let whoWeAreParagraph = document.querySelector("#whoWeArePara");
let whoWeAreTabHeader = document.querySelector(".about_whoWeAre_box_swiper_slider");
let passionHeader = document.querySelector("#aboutPassionTab");
let creativityHeader = document.querySelector("#aboutCreativityTab");
let diversityHeader = document.querySelector("#aboutDiversityTab");
let sustainabilityHeader = document.querySelector("#aboutSustainabilityTab");
let innovationHeader = document.querySelector("#aboutInnovationTab");
//Function for changing who we are header to Passion
changePassionHeader();
function changePassionHeader() {
    passionHeader.addEventListener("click", ()=>{
        whoWeAreHeader.textContent = "PASSION";
        whoWeAreParagraph.textContent = "Here at Horizons we are extremely passionate and comprehensive in how we handle our creativity and work ethic.";
    });
}
//Function for changing who we are header to Creativity
changeCreativityHeader();
function changeCreativityHeader() {
    creativityHeader.addEventListener("click", ()=>{
        whoWeAreHeader.textContent = "Creativity";
        whoWeAreParagraph.textContent = "Horizons is all about letting your imagination run wild, and exploring the world of art and technology.";
    });
}
//Function for changing who we are header to Diversity
changeDiversityHeader();
function changeDiversityHeader() {
    diversityHeader.addEventListener("click", ()=>{
        whoWeAreHeader.textContent = "DIVERSITY";
        whoWeAreParagraph.textContent = "We love including people of different backgrounds no matter yoru race, culture, sexual orientation, appearance etc.";
    });
}
//Function for changing who we are header to Sustainability
changeSustainabilityHeader();
function changeSustainabilityHeader() {
    sustainabilityHeader.addEventListener("click", ()=>{
        whoWeAreHeader.textContent = "SUSTAINABILITY";
        whoWeAreParagraph.textContent = "We understand the significant impact our actions have on our planet, and this is why we create with ethical practices.";
    });
}
//Function for changing who we are header to Innovation
changeInnovationHeader();
function changeInnovationHeader() {
    innovationHeader.addEventListener("click", ()=>{
        whoWeAreHeader.textContent = "Innovation";
        whoWeAreParagraph.textContent = "Innovation is a critical part of a successful society, both economically adn socially. And here, we welcome it with open arms.";
    });
}
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
