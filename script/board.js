function createRow(numOfElements, rowId) 
{
    let water = document.getElementById("water");
    let widthOffset = 50-(numOfElements * 19.5/2);

    for (let i = 0; i < numOfElements; i++){
        let area = document.createElement("img");
        area.src = "images/hay.png.jpg";
        area.classList.add("area");
        let width = 19.5 * i;
        width = (widthOffset + width);
        //alert (width);
        area.style.left = width + "vw";
        area.style.top = calculateY(rowId)+"vw";
        water.appendChild(area);
    }
}
function calculateY(y){
    let triangleHeight = 5.63;
    let hexHeight = 22.51665;
    let quadHeight = hexHeight - triangleHeight;
    return y * quadHeight;


}
function createBoard(){
    createRow(5,0);
    createRow(6,1);
    createRow(7,2);
    createRow(4,3);
    createRow(3,4);
}