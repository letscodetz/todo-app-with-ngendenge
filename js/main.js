const handleSubmit = () => {
    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    addRow(task, description);
}


function addRow(t, d) {

    // Get a reference to the table
    let tableRef = document.getElementById('todo-table');

    // Insert a row at the top of the table
    let newRow = tableRef.insertRow(1);

    // Insert a cell in the row at index 0
    let rowNo = newRow.insertCell(0);
    let task = newRow.insertCell(1);
    let description = newRow.insertCell(2);
    let deleteButton = newRow.insertCell(3);

    // Append a text node to the cell
    let rowNoText = document.createTextNode('1');
    rowNo.appendChild(rowNoText);

    let taskText = document.createTextNode(t);
    task.appendChild(taskText);

    let descriptionText = document.createTextNode(d);
    description.appendChild(descriptionText);

    // create a new button element
    let button = document.createElement("button");
    let deleteButtonText = document.createTextNode('Delete');
    button.appendChild(deleteButtonText);

    deleteButton.appendChild(button);
}