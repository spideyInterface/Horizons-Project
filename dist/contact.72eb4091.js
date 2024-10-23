//functionality for turning submit button to red after clicked
let contactSub = document.querySelector("#contact_submit_button");
let contactSubPara = document.querySelector("#contact_submit_message");
contactSub.addEventListener("click", function contactSubChange() {
    this.style.backgroundColor = "red";
    this.textContent = "SUBMITTED";
    contactSubPara.classList.add("para_active");
});

//# sourceMappingURL=contact.72eb4091.js.map
