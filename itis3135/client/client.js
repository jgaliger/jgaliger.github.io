let rentArr = [];
let adviceArr = [];

function reset() {
    document.getElementById("introForm").reset();
}
function required(event) {
    event.preventDefault(); 
}

function submit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const area = document.getElementById('area').value;
    const check = document.getElementById('check').checked;

    const person = `Name: ${name} Email: ${email} Phone Number: ${phone} Address: ${address} Area: ${area}`;

    if (check) {
        adviceArr.push(person);
    } else {
        rentArr.push(person);
    }

    const resultDiv = document.querySelector('.resultDiv');
    resultDiv.innerHTML = `<h3>Welcome, ${name}! We will attempt to get back to you as soon as possible!</h3>`;
}


