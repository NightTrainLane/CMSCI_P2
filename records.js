addRow = function(year, session, members, attended, absent) {
    // Create a new row element
    var table = document.getElementById("records");
    var newRow = table.insertRow();
    
    // Create new cells for the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    
    // Add some sample data to the cells
    cell1.innerHTML = year;
    cell2.innerHTML = session;
    cell3.innerHTML = members;
    cell4.innerHTML = attended;
    cell5.innerHTML = absent;
};

for (var i = 0; i<10; i++) { /* Add 10 rows to test */
    addRow();
}
