function createRow(numOfElements, rowId, xOffset) 
{
    let water = document.getElementById("water");
    let widthOffset = 50-(numOfElements * 19.5/2);
    widthOffset = widthOffset + xOffset * 19.5;
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
    let mode = 1;
    if (mode == 0){
        createRow(3,0, 0);
        createRow(4,1, 0);
        createRow(5,2, 0);
        createRow(4,3, 0);
        createRow(3,4, 0);
    }
    if (mode == 1){
    createRow(3,0, 1);
    createRow(4,1, 1);
    createRow(5,2, 1);
    createRow(6,3, 1);
    createRow(5,4, 1);
    createRow(4,5, 1);
    createRow(3,6, 1);
    }
    populate(mode);
}