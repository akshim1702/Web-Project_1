// Function for taking input and printing rows 


function TakeInput() {
    let input = document.getElementById('Columns').value;
    let table = document.getElementById("myTable");

    if (input <= 20) {
        for (let i = 0; i < input; i++) {

            let row = table.insertRow(i);

            for (let index = 0; index <= 6; index++) {

                let cell = new Array(index);
                cell = row.insertCell(index);
                cell.innerHTML = '<td><input type="text" name = ""></td>';

            }
        }

    } else {
        alert("cannot add rows more than 20 on a single count");
    }
}
// inserting a single row 

function add() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(0);
    for (let index = 0; index <= 6; index++) {

        let cell = new Array(index);
        cell = row.insertCell(index);
        cell.innerHTML = '<td><input type="text" name = ""></td>';

    }
}


// delete single row 
function delete5() {

    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    console.log(rowCount);
    let i = 0;
    if (i == 0) {
        table.deleteRow(0);
        i++;

    }
}

// Deleting all the rows

function delete6() {
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;

    confirm("Are you sure? You are going to delete all the rows");
    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        table.deleteRow(i);
        rowCount--;
        i--;
    }
}
