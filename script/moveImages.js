function moveImage() {
  let images = document.getElementsByTagName("img");
  let img_srcs = ["images/brick.png","images/lumber.jpg","images/ore.jpg","images/wool.jpg","images/hay.png.jpg","images/sand.jpg"]
  let order = [0,0,0,1,1,1,1,2,2,2,3,3,3,3,4,4,4,4];
  numImages = document.getElementsByClassName("number");
  for (let i = 0; i < 100; i++){
    order = (shuffle(order));
  }
  for (let i = 0; i < images.length; i++){
    images[i].src = img_srcs[order[i]];
    }
  images[18].src = images[9].src;
  images[9].src = img_srcs[5];
  addNumbers();
  addNumbers();
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
  }
function addNumbers(){
    let images = document.getElementsByTagName("img");
    let imgLength = images.length;
    let numbers = [2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,11,12];
    let areaNumbers = [0,1,2,6,10,14,17,16,15,11,7,3];
    let areaNumbersInner = [4,5,9,13,12,8];
    let outerRing = [5,2,6,3,8,10,9,12,11,4,8,10];
    let innerRing = [9,4,5,6,3,11];
    numImages = document.getElementsByClassName("number");
    numImgLength = numImages.length;
    if (numImages[0] != null){
        for (let i = 0; i < numImgLength; i++){
            numImages[0].remove();
        }
        return;
    }
    for (let i = 0; i < imgLength; i++){
        if (i != 9){
        let newImage = document.createElement("img");
        newImage.src = "images/"+numbers[i]+".png";
        newImage.classList.add("number");
        newImage.style.left = "calc(" + images[i].getBoundingClientRect().left + "px + 4vw)";
        newImage.style.top = "calc(" + images[i].getBoundingClientRect().top + "px + 5vw)";
        document.getElementById("board").appendChild(newImage);
        }
    }
    let randomize = document.getElementById("randomize");
    if (!randomize.checked){
    for (let i = 0; i < areaNumbers.length; i++){
        let images = document.getElementsByClassName("number");
        images[areaNumbers[i]].src = "images/"+outerRing[i]+".png";  
    }
    for (let i = 0; i < areaNumbersInner.length; i++){
        let images = document.getElementsByClassName("number");
        images[areaNumbersInner[i]].src = "images/"+innerRing[i]+".png";  
    }
}
    else{
        areaNumbers0 = areaNumbers.concat(areaNumbersInner);
        outerRing0 = outerRing.concat(innerRing);
        for (let i = 0; i < 10; i++){
            areaNumbers0 = shuffle(areaNumbers0);
            outerRing0 = shuffle(outerRing0);
        }
        let images = document.getElementsByClassName("number");
        for (let i = 0; i < imgLength; i++){
            images[i].src = "images/"+outerRing0[i]+".png"; 
        }
    }
}
function clicked(){
    addNumbers();
    addNumbers();
}