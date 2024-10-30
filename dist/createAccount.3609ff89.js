let slider = document.querySelectorAll(".nftCollectionBoxSlider");
let output = document.querySelectorAll(".nftCollectionValue");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
};

//# sourceMappingURL=createAccount.3609ff89.js.map
