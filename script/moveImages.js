function moveImage() {
  let images = document.getElementsByTagName("img");
  let img_srcs = ["images/brick.png","images/lumber.jpg","images/ore.jpg","images/wool.jpg","images/hay.png.jpg","images/sand.jpg"]
  let order = [0,0,0,1,1,1,1,2,2,2,3,3,3,3,4,4,4,4];
  for (let i = 0; i < 100; i++){
    order = (shuffle(order));
  }
  for (let i = 0; i < images.length; i++){
    images[i].src = img_srcs[order[i]];
    }
  images[18].src = images[9].src;
  images[9].src = img_srcs[5];
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