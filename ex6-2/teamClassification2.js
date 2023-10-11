document.addEventListener('DOMContentLoaded', function() {
    // Initial data for teams
    var teams = [
        ['1', 'Barcelona', '20'],
        ['2', 'Real Madrid', '19'],
        ['3', 'Atlético de Madrid', '16']
    ];

    // Function to create the table
    function createTable() {
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
    }

    // Function to add a new team
    function addTeam(team, points) {
        var table = document.querySelector('.my-table');
        var rows = table.getElementsByTagName('tr');
        var existingTeam = false;

        // Check if the team already exists in the table
        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            if (cells[1].textContent === team) {
                cells[2].textContent = points;
                existingTeam = true;
                break;
            }
        }

        if (!existingTeam) {
            // Create a new row
            var row = document.createElement('tr');

            // Add cells with the team data
            var data = [0, team, points]; // Position is initialized to 0
            for (var i = 0; i < data.length; i++) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(data[i]));
                row.appendChild(cell);
            }

            // Insert the new row at the appropriate position based on points
            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                if (parseInt(cells[2].textContent) < parseInt(points)) {
                    table.insertBefore(row, rows[i]);
                    break;
                }
            }

            // If the team has less points than everyone else, it is added at the end
            if (!row.parentNode) {
                table.appendChild(row);
            }
        }

        // Reorder rows based on points
        var rowsArray = Array.prototype.slice.call(rows, 1);
        rowsArray.sort(function(a, b) {
            return parseInt(b.cells[2].textContent) - parseInt(a.cells[2].textContent);
        });
        for (var i = 0; i < rowsArray.length; i++) {
            rowsArray[i].cells[0].textContent = i + 1;
            table.appendChild(rowsArray[i]);
        }
    }

    // Call the function to create the table when the page loads
    createTable();

    // Form event
    document.getElementById('teamForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var team = document.getElementById('team').value;
        var points = document.getElementById('points').value;

        addTeam(team, points);

        // Clear the form
        document.getElementById('team').value = '';
        document.getElementById('points').value = '';
    });
});
