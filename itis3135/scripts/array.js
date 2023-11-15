document.addEventListener('DOMContentLoaded', function () {
 let salaries = [];
 let person =[];
 let counter = 0;
 function addSalary(){
        const name = document.getElementById('name').value;
        const salary = document.getElementById('salary').value;
        if (name === '' || isNaN(salary)) {
            alert('Please enter valid values for name and salary.');
            return;
        }
        salaries[counter] = salary;
        person[counter] = name;
        counter++;

 }
 function displayResults(){
     let placeholder =0;
    for(let i=0;i<person.length;i++){
        placeholder += salaries[i];
    }
    placeholder /= salaries.length;
    const average = placeholder;
    const highest = Math.max(person);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Results</h2><p>Average Salary: ${average}</p><p>Highest Salary: ${highest}</p>`;
 }

function displaySalary(){
    const tableBody = document.querySelector('#resultsTable');
            tableBody.innerHTML = '';

    for(let i=0; i<person.length;i++){
        const row =tableBody.insertRow();
        const firstRow = row.insertCell(0);
        const secondRow = row.insertCell(1);

        firstRow.textContent = person[i];
        secondRow.textContent = salaries[i];
    }
}


});