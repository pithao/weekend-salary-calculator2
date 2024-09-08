// * When the "Submit" button is clicked:
//     * A new employee row should be added to the table.
//     * The footer's total monthly cost should be updated.
//     * The form inputs should be cleared out.


 // Find the input field and assign the value to our variable
 let firstName = document.querySelector('#firstName-input').value;
 console.log(firstName);
 //! .value always returns a string, for a number use Number(string)
 let lastName = document.querySelector('#lastName-input').value;
 let idNumber = document.querySelector('#idNumber-input').value;
 let annualSalary = document.querySelector('#annualSalary-input').value;

 