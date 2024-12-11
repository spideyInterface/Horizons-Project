profileUploadBtn.onChange = () => {
  let profilePic = document.querySelector('#profile-image');
  let profileUploadBtn = document.querySelector('#profile-input-file');

  profilePic.src = URL.createObjectURL(profileUploadBtn.files[0]);
}