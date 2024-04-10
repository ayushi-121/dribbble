const avatarUpload = document.getElementById("avatar-upload");
const avatarPreview = document.getElementById("avatar-preview");
const chooseBtn = document.getElementById("choose-btn");

avatarUpload.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            avatarPreview.src = reader.result;
        }
        reader.readAsDataURL(file);
    }
});

chooseBtn.addEventListener("click", function() {
    avatarUpload.click();
});
