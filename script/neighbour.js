function checkLocalNeighbour(imageToCheck) {
    let numImages = document.getElementsByClassName("area");
    let neighbours = 0;
    for (image in numImages){
        let left = Math.abs(numImages[image].offsetLeft - numImages[imageToCheck].offsetLeft);
        let top = Math.abs(numImages[image].offsetTop - numImages[imageToCheck].offsetTop);

        if (left < 193 && top < 167 && imageToCheck != image){
            if (numImages[image].src == numImages[imageToCheck].src){
                neighbours += 1;
            }
        }
    }
    return (neighbours);
  }
function switchAreas(image0, image1){
    let images = document.getElementsByTagName("img");
    let tempImageSrc = images[image0].src;
    if (tempImageSrc.includes("sand") || images[image1].src.includes("sand")){
        alert("SAND");
    }
    images[image0].src = images[image1].src;
    images[image1].src = tempImageSrc;  
}
function randomSwitch(image){
    alert(1);
        let images = document.getElementsByTagName("img");
        let randomImage = Math.floor(Math.random()*images.length);
        alert("Random");
        alert(images[randomImage].src.includes("sand"));
        if (!images[randomImage].src.includes("sand") && randomImage != image){
            switchAreas(image, randomImage);
        }
        else{
            randomSwitch(image);
        }
}