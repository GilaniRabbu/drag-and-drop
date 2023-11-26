let draggedElement = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    draggedElement = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const dropTarget = event.target.closest("section");

    if (dropTarget && draggedElement !== dropTarget) {
        // Swap the positions of the dragged and dropped elements
        const container = draggedElement.parentElement;
        const dropIndex = Array.from(container.children).indexOf(dropTarget);
        const dragIndex = Array.from(container.children).indexOf(draggedElement);

        if (dragIndex < dropIndex) {
            container.insertBefore(draggedElement, dropTarget.nextSibling);
        } else {
            container.insertBefore(draggedElement, dropTarget);
        }
    }

    draggedElement = null;
}