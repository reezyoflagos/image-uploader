const uploadedInput = document.getElementById('uploaded-input');
const uploadedImage = document.getElementById('uploaded-image');
uploadedInput.addEventListener('change', function(event){
    const file = event.target.files[0];
    uploadedImage.src = URL.createObjectURL(file);;
});