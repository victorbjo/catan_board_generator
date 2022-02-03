function tests(imageToCheck) {
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
    
}