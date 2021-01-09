let cells = 1;
let color_list = [
    "#000000",
    "#000080",
    "#00008B",
    "#0000CD",
    "#0000FF",
    "#006400",
    "#008000",
    "#008080",
    "#008B8B",
    "#00BFFF",
    "#00CED1",
];
let currentColor = "gray";

function clearAllCells()
{
    let cells = document.getElementsByClassName("grid-cell");
    [...cells].forEach(cell =>
    {
        cell.style.backgroundColor = null;
        cell.classList.remove(...cell.classList);
        cell.classList.add("grid-cell");
        cell.classList.add("uncolored");
    });
}

function fillAllCells()
{
    let cells = document.getElementsByClassName("grid-cell");
    [...cells].forEach(cell =>
    {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    });
}

function fillAllUncolored()
{
    let cells = document.getElementsByClassName("grid-cell");
    let uncolored = [...cells].filter(cell => 
    {
        return cell.classList.contains("uncolored");
    });

    uncolored.forEach(cell =>
    {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    });
}

function changeColor()
{
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored");
}

function createCell(className) {
    let cell = document.createElement("td");
    cell.classList.add(className);
    cell.classList.add("uncolored");
    cell.addEventListener("click", changeColor);
    return cell;
}

function addRow() {
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    grid.appendChild(newRow);

    for (let i = 0; i < cells; i++) {
        newRow.appendChild(createCell("grid-cell"));
    }
}

function addColumn() {
    cells++;
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByClassName("grid-row");

    for (let i = 0; i < rows.length; i++) {
        rows[i].appendChild(createCell("grid-cell"));
    }
}

function removeRows() {
    let grid = document.getElementById("grid");
    let lastRow = grid.rows.length - 1;

    for (let i = lastRow; i > 0; i--) {
        grid.deleteRow(i);
    }
}

function removeColumns() {
    cells = 1;
    let grid = document.getElementById("grid");
    let lastColumn = grid.rows[0].cells.length - 1;

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = lastColumn; j > 0; j--) {
            grid.rows[i].deleteCell(j);
        }
    }
}

function createColorMenu() {
    //this function creates dropdown menu for all 140 color available in mordern day browser
    let dropmenu = document.getElementById("drop");
    for (let i of color_list) {
        var newOpTag = document.createElement("option");
        newOpTag.style.background = i;
        newOpTag.nodeValue = i;
        dropmenu.appendChild(newOpTag);
        dropmenu.addEventListener("mouseover", function(i) { newOpTag.innerText = i; });
        // console.log(i);
    }

}