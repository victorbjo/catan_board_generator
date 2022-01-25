 function moveImage() {
  let images = document.getElementsByTagName("img");
  let img_srcs = ["images/brick.png","images/lumber.jpg","images/ore.jpg","images/wool.jpg","images/hay.png.jpg","images/sand.jpg"]
  let order = [0,0,0,1,1,1,1,2,2,2,3,3,3,3,4,4,4,4];
  numImages = document.getElementsByClassName("number");
  order = (shuffle(order));
  
  for (let i = 0; i < images.length; i++){
    images[i].src = img_srcs[order[i]];
    }
  images[18].src = images[9].src;
  images[9].src = img_srcs[5];
  numImages = document.getElementsByClassName("number");
  numImgLength = numImages.length;
  let maxNeighbours = document.getElementById("neighbours");
  if (checkForNeighbours() > maxNeighbours.value){
        moveImage();  
    }
  else{
  if (numImages[0] != null){
      for (let i = 0; i < numImgLength; i++){
          numImages[0].remove();
      }
      addNumbers();
  }}
  
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
    window.scrollTo(0, 0);
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
        newImage.style.left = "calc(" + images[i].getBoundingClientRect().left + "px + 4.7vw)";
        newImage.style.top = "calc(" + images[i].getBoundingClientRect().top + "px + 6vw)";
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
    numImages = document.getElementsByClassName("number");
    numImgLength = numImages.length;
    if (numImages[0] != null){
        for (let i = 0; i < numImgLength; i++){
            numImages[0].remove();
        }
        addNumbers();
    }
    
}
function checkForNeighbours(getPos =  false){
    return countNeighbours();
}

function countNeighbours(getPos = false){
    let neighbourCount = 0;
    let rows = [[0,1,2],[3,4,5,6],[7,8,9,10,11],[12,13,14,15],[16,17,18]];
    let numImages = document.getElementsByClassName("area");
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < rows[i].length; j++){
            let neighbours = getNeighbour(i,j).split("\n");
            let localNeighbour = 0;
            for (let h = 0; h < neighbours.length; h ++){
                if (neighbours[h].includes(numImages[rows[i][j]].src)){
                    if (getPos){
                        return ([i,j]);
                    }
                    localNeighbour = localNeighbour + 1;
                }
            }
            if (localNeighbour > neighbourCount){
                neighbourCount = localNeighbour;
            }
        }
    }
    return(neighbourCount);
}
function getNeighbour(y,x){
    let nList =[];
    let rows = [[0,1,2],[3,4,5,6],[7,8,9,10,11],[12,13,14,15],[16,17,18]];
    let numImages = document.getElementsByClassName("area");
    let neighbours = 0; 
    if (rows[y].length > x+1){
        nList.push(numImages[rows[y][x+1]].src);
    }
    if (x > 0){
        nList.push(numImages[rows[y][x-1]].src);
    }
    if (y+1 < rows.length && rows[y+1].length > x){
        nList.push(numImages[rows[y+1][x]].src);
    }
    if (y < 2){
        nList.push(numImages[rows[y+1][x+1]].src);
    }
    if (y > 1 && y < 4 && x > 0){
        nList.push(numImages[rows[y+1][x-1]].src);
    }
    if (y > 0 && x+1 < rows[y].length && y < 3){
        nList.push(numImages[rows[y-1][x]].src);
    }
    if (y > 2){
        nList.push(numImages[rows[y-1][x]].src);
        nList.push(numImages[rows[y-1][x+1]].src);
    }
    if (y < 3 && x > 0 && y > 0){
        nList.push(numImages[rows[y-1][x-1]].src);
    }
    let tempString = "";
    for (let i = 0; i < nList.length; i++){
        tempString = tempString + nList[i] + "\n";
    }
    return (tempString);
}
function swithcPictures(y,x){
    let rows = [[0,1,2],[3,4,5,6],[7,8,9,10,11],[12,13,14,15],[16,17,18]];
    let numImages = document.getElementsByClassName("area");
    let ry = Math.floor(Math.random()*5);
    let rx = Math.floor(Math.random()*rows[ry].length);
    let src = numImages[rows[y][x]].src;
    numImages[rows[y][x]].src = numImages[rows[ry][rx]].src;
    numImages[rows[ry][rx]].src = src;
}
function RemoveNeighbor(){
    countNeighbours();
    let rows = [[0,1,2],[3,4,5,6],[7,8,9,10,11],[12,13,14,15],[16,17,18]];
    let n0 = countNeighbours(true);
    alert(n0);
    let numImages = document.getElementsByClassName("area");
    let src = numImages[rows[n0[0]][n0[1]]].src;
    let changed = false;
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < rows[i].length; j++){
            let neighbours = getNeighbour(i,j);
            let neighbours0 = getNeighbour(n0[0],n0[1]);
            //alert(" " + i +j);
            if (!neighbours.includes(numImages[rows[n0[0]][n0[1]]].src) && !changed && rows[i][j] != 9 && !neighbours0.includes(numImages[rows[i][j]].src)){
                numImages[rows[n0[0]][n0[1]]].src = numImages[rows[i][j]].src;
                numImages[rows[i][j]].src = src;
                changed = true;
                
                alert("Picture "+n0 +" has been switched with "+i + j);

            }
        }
    }
    if (changed == false){
        swithcPictures(n0[0],n0[1]);
    }


}
function exportBoard(){
    let numImages = document.getElementsByClassName("area");
    let save = "";
    for (let i = 0; i < numImages.length; i++){
        if (numImages[i].src.includes("hay")){
            save = save + "h";
        }
        else if (numImages[i].src.includes("wool")){
            save = save + "w";
        }
        else if (numImages[i].src.includes("ore")){
            save = save + "o";
        }
        else if (numImages[i].src.includes("lumber")){
            save = save + "l";
        }
        else if (numImages[i].src.includes("sand")){
            save = save + "s";
        }
        else if (numImages[i].src.includes("brick")){
            save = save + "b";
        }
    }
    navigator.clipboard.writeText(save);
    alert("Copied save string to clipboard");
}
function importBoard(){
    let savefile = document.getElementById("save").value;
    let numImages = document.getElementsByClassName("area");
    for (let i = 0; i < numImages.length; i++){
        switch (savefile[i]){
            case "b":
                numImages[i].src = "images/brick.png";
                break;
            case "w":
                numImages[i].src = "images/wool.jpg";
                break;
            case "o":
                numImages[i].src = "images/ore.jpg";
                break;
            case "l":
                numImages[i].src = "images/lumber.jpg";
                break;
            case "s":
                numImages[i].src = "images/sand.jpg";
                break;
            case "h":
                numImages[i].src = "images/hay.png.jpg";
                break;
        }
    }
}