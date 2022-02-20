let r = 0;

const handleSubmit = () => {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    addRow(task.value, description.value);
    task.value = '';
    description.value = '';
}


function addRow(t, d) {
    r++;

    // Get a reference to the table
    let tableRef = document.getElementById('todo-table');

    // Insert a row at the top of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let rowNo = newRow.insertCell(0);
    let task = newRow.insertCell(1);
    let description = newRow.insertCell(2);
    let deleteButton = newRow.insertCell(3);

    // Append a text node to the cell
    let rowNoText = document.createTextNode(r);
    rowNo.appendChild(rowNoText);

    let taskText = document.createTextNode(t);
    task.appendChild(taskText);

    let descriptionText = document.createTextNode(d);
    description.appendChild(descriptionText);

    // create a new button element
    let button = document.createElement("button");
    button.addEventListener("click", deleteRow);

    let deleteButtonText = document.createTextNode('Delete');
    button.appendChild(deleteButtonText);

    deleteButton.appendChild(button);
}

const deleteRow = (e) => {
    e.target.parentNode.parentNode.remove();
    r--;
}