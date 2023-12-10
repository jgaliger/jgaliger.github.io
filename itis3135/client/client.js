let rentArr = [];
let adviceArr = [];

function reset() {
    document.getElementById("introForm").reset();
}
function required(event) {
    event.preventDefault(); 
}

function submit(){
    addEventListener('DOMContentLoaded',function(event){
    const introForm = document.getElementById('introForm');
    const introContent = document.getElementById('data');
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const address = document.getElementById('address')
    const area = document.getElementById('area')

    const value = document.getElementById('check')
    const person;
    person.textContent= "Name: " + name + " Email: " + email + " Phone Number: " + phone + " Address: " + address + " Area: " + area;
    if(document.getElementById("check").checked===true){
        adviceArr.push(person);
    }else{
        rentArr.push(person)
    }
    const result = document.getElementById('resultDiv')
    resultDiv.innerHTML = `<h3>Welcome, ${name}! We will attempt to get back to you as soon as possible!</h3>`;
});
}
