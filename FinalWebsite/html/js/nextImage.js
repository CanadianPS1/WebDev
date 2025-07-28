//open with http://localhost:8000 and run python -m http.server 8000 in the command line
let imagePosition = 0;
let imagePaths = ["Images\\ImageOne.png", "Images\\ImageTwo.png"];
const displayedImage = document.getElementById("image");

function NextImage(){
    imagePosition++;
    if(imagePosition >= imagePaths.length){
        imagePosition = 0
    }
    displayedImage.src = imagePaths[imagePosition];
}
function BackImage(){
    imagePosition--;
    if(imagePosition < 0){
        imagePosition = imagePaths.length - 1;
    }
    displayedImage.src = imagePaths[imagePosition];
}