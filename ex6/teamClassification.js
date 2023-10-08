// Get the element where you want to insert the table
var tableContainer = document.getElementById('tableContainer');

// Create the table
var table = document.createElement('table');
table.classList.add('my-table');

// Create the header row
var headerRow = document.createElement('tr');

// Add columns to the header
var columns = ['Position', 'Team', 'Points'];
for (var i = 0; i < columns.length; i++) {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(columns[i]));
    headerRow.appendChild(th);
}

// Add the header to the table
table.appendChild(headerRow);

// Team data
var teams = [
    ['1', 'Barcelona', '20'],
    ['2', 'Real Madrid', '19'],
    ['3', 'Atlético de Madrid', '16']
];

// Add rows with team data
for (var i = 0; i < teams.length; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < teams[i].length; j++) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(teams[i][j]));
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Add the table to the container
tableContainer.appendChild(table);
