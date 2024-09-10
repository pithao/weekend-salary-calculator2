console.log('hello world');

// * When the "Submit" button is clicked:
//     * A new employee row should be added to the table.
//     * The footer's total monthly cost should be updated.
//     * The form inputs should be cleared out.


function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    let firstNameVal = document.querySelector('#firstName-input').value;
    console.log(firstNameVal);
    let lastNameVal = document.querySelector('#lastName-input').value;
    let idNumberVal = document.querySelector('#idNumber-input').value;
    let annualSalaryVal = document.querySelector('#annualSalary-input').value;

    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
        <tr>
            <td>${currentIndex}</td>
            <td>${firstNameVal}</td>
            <td>${lastNameVal}</td>
            <td>${idNumberValVal}</td>
            <td>${annualSalaryVal}</td>
            <td><button onClick = "handleClickDelete(event)" id= "currentIndex">Delete</button></td>
        </tr>
    `;
    currentIndex += 1;
}

    function handleClickDelete(event) {
        console.log("Delete button clicked!");
       
       let row = event.target.parentElement;

       let table = document.getElementById("employeeData");
        row.remove();
        }