//taking name and displaying on top

// let space = " ";
// let n = prompt('Enter your name', 'enter full name') + space;
// let position = n.slice(0, n.indexOf(' '));

// document.getElementById('head').innerHTML = "<h1>" + position + "'s" + " Time Table" + "</h1>";

function TakeInput() {

    let input = document.getElementById('Row').value;
    var table = document.getElementById('myTable');
    if (input <= 20) {
        for (let i = 0; i < input; i++) {

            let row = table.insertRow(i);

            for (let index = 0; index <= 6; index++) {

                let cell = new Array(index);
                cell = row.insertCell(index);
                if (index == 0) {
                    cell.innerHTML = '<td><input type="time"  class="time-period1" name = ""></td>' + '<td><input type="time" class="time-period2" name = ""></td>';
                } else {
                    cell.innerHTML = '<td><input type="text" name = ""></td>';
                }

            }
        }

    } else {
        alert("cannot add rows more than 20 on a single count");
    }
}

//deletes rows according to no. mentioned

function deleteRow() {

    let input = document.getElementById('deleter').value;
    var table = document.getElementById('myTable');
    for (let index = 0; index < input; index++) {
        let row = table.deleteRow(index);

    }
}

// inserting a single row 

function add() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(0);
    for (let index = 0; index <= 6; index++) {

        let cell = new Array(index);
        cell = row.insertCell(index);
        if (index == 0) {
            cell.innerHTML = '<td><input type="time" class="time-period1" name = ""></td>' + '<td><input type="time" class="time-period2" name = ""></td>';

        } else {
            cell.innerHTML = '<td><input type="text" name = ""></td>';
        }

    }
}


// delete single row 
function delete5() {

    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    console.log(rowCount);
    if (rowCount != 1) {
        table.deleteRow(1);
        i++;

    } else if (rowCount = 1) {
        alert("Last row cannot be deleted");
    }
}
// Deleting all the rows

function delete6() {
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;

    confirm("Are you sure? You want to delete all the rows");
    for (var i = 0; i < rowCount; i++) {
        if (i == 0) {
            alert("Last row cannot be deleted");
        } else {
            var row = table.rows[i];
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}
