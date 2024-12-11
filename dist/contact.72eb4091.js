let submitFunction = ()=>{
    let contactSub = document.querySelector("#contact_submit_button");
    let contactSubPara = document.querySelector("#contact_submit_message");
    contactSub.addEventListener("click", ()=>{
        contactSub.style.backgroundColor = "red";
        contactSub.textContent = "Submitted";
        contactSubPara.classList.add("para_active");
        console.log("Message sent!");
    });
};
submitFunction();

//# sourceMappingURL=contact.72eb4091.js.map
