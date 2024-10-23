//functionality for changing profile pic
  //let profilePic = document.querySelector('#profile-settings-image');
  //let profileUploadBtn = document.querySelector('#profile-input-button');

  //profileUploadBtn.onChange = function(){
    //profilePic.src = URL.createObjectURL(profileUploadBtn.files[0]);
  //}

    //functionality for changing profile pic
    let profilePic = document.querySelector('#profile-image');
    let profileUploadBtn = document.querySelector('#profile-input-file');

    profileUploadBtn.onChange = function(){
    profilePic.src = URL.createObjectURL(profileUploadBtn.files[0]);
  }