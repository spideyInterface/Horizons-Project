//Functionality for toggling the hamburger menu in mobile screen
const menuToggle = ()=>{
    let menuList = document.querySelector("#menuList");
    let icon = document.querySelector("#menuHamburger");
    menuList.style.maxHeight = "0px";
    icon.addEventListener("click", ()=>{
        if (menuList.style.maxHeight === "0px") {
            menuList.style.maxHeight = "250px";
            console.log("The menu has opened.");
        } else {
            menuList.style.maxHeight = "0px";
            console.log("Menu has clsoed");
        }
    });
};
menuToggle();

//# sourceMappingURL=about.20ec8f84.js.map
