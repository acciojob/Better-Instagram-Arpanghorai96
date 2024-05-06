//your code here
const divs=document.querySelectorAll(".image");

let dragableItem=null;
function ondragStart(event){
    dragableItem=event.target;
}
function ondragOver(event)
{
    event.preventDefault();
}
function onDrop(event){
    event.preventDefault();
    // Get the image of the target item
    let targetImage = event.target.style.backgroundImage;
    
    // Swap the images of the dragged and target items
    event.target.style.backgroundImage = dragableItem.style.backgroundImage;
    dragableItem.style.backgroundImage = targetImage;
}

divs.forEach((div) => {
    div.addEventListener("dragstart", ondragStart);
    div.addEventListener("dragover", ondragOver);
    div.addEventListener("drop", onDrop);
});