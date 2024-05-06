const images = document.querySelectorAll(".image");

let dragItem = null;

images.forEach(image => {
    image.addEventListener("dragstart", dragStart);
    image.addEventListener("dragover", dragOver);
    image.addEventListener("drop", drop);
});

function dragStart(event) {
    dragItem =event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const target = event.target;

    if (dragItem !== target) {
        // Swap the HTML content of the dragItem and the target
        const tempHTML = dragItem.innerHTML;
        dragItem.innerHTML = target.innerHTML;
        target.innerHTML = tempHTML;
    }
}