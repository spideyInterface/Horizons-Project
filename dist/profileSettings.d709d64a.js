profileUploadBtn.onChange = ()=>{
    let profilePic = document.querySelector("#profile-image");
    let profileUploadBtn1 = document.querySelector("#profile-input-file");
    profilePic.src = URL.createObjectURL(profileUploadBtn1.files[0]);
};

//# sourceMappingURL=profileSettings.d709d64a.js.map
