// function TakeInput() {
//     // let pet = "";
//     let input = document.getElementById('Columns').value;
//     console.log(input);
//     // for (let index = 0; index < 7; index++) {


//     for (let index = 0; index < input; index++) {
//         // const print = pet;
//         // document.write(print);
//         // innerHTML = pet;
//         // pet = '<td>' + '<input type="text" name="" id="">' + '</td>';
//         console.log(index);

//         document.getElementsByClassName("ef").innerHTML = '<td><input type="text" name = ""></td>';
//     }
// }
// // }

function TakeInput() {

    var table = document.getElementById("myTable");
    let row = table.insertRow(0);

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    let cell6 = row.insertCell(6);
    cell1.innerHTML = '<td><input type="text" name = ""></td>';
    cell2.innerHTML = '<td><input type="text" name = ""></td>';
    cell0.innerHTML = '<td><input type="text" name = ""></td>';
    cell3.innerHTML = '<td><input type="text" name = ""></td>';
    cell4.innerHTML = '<td><input type="text" name = ""></td>';
    cell5.innerHTML = '<td><input type="text" name = ""></td>';
    cell6.innerHTML = '<td><input type="text" name = ""></td>';
}