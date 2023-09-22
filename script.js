function createTable() {
    // Prompt for the number of rows and columns
    const rowCount = parseInt(prompt("Input number of rows"));
    const colCount = parseInt(prompt("Input number of columns"));

    // Get the table element by its ID
    const table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < rowCount; i++) {
        const row = table.insertRow(i); // Create a new row

        for (let j = 0; j < colCount; j++) {
            const cell = row.insertCell(j); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set cell text
        }
    }
}