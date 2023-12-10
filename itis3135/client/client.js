let rentArr = [];
let adviceArr = [];

function reset() {
    document.getElementById("introForm").reset();
}
function required(event) {
    event.preventDefault(); 
}

function submit(){
   
    const introForm = document.getElementById('introForm').value;
    const introContent = document.getElementById('data').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const address = document.getElementById('address').value
    const area = document.getElementById('area').value

    const value = document.getElementById('check').value
    const person = `Name: ${name} Email: ${email} Phone Number: ${phone} Address: ${address} Area: ${area}`;
    const check = document.getElementById('check').checked
    if(check){
        adviceArr.push(person);
    }else{
        rentArr.push(person)
    }
    const result = document.getElementById('resultDiv')
    resultDiv.innerHTML = `<h3>Welcome, ${name}! We will attempt to get back to you as soon as possible!</h3>`;

}

addEventListener('DOMContentLoaded', function (event) {

    const data = document.getElementById('data');
    data.addEventListener('click', function () {
        submit();

    });
});
