function reset() {
    document.getElementById("introForm").reset();
}
function required(event) {
    event.preventDefault(); 
}
function submit() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').value
    const imageCaption = document.getElementById('caption').value;
    const personal = document.getElementById('personal').value
    const academic = document.getElementById('academic').value
    const background = document.getElementById('background').value
    const platform = document.getElementById('platform').value
    const courses = document.getElementById('p[id="courses[]"]')
    const funny = document.getElementById('funny').value
    const anything = document.getElementById('anything').value

    const resultsDiv = document.getElementById('result');
    resultsDiv.innerHTML = 
   
    `<h2>Name: ${name}</h2>
    <h2>Mascot: ${mascot}</h2>
    <h2>Image: <img src="${image}" alt="Image"></img></h2>
    <figcaption>${imageCaption}</figcaption>
    <p>Personal Background: ${personal}</p>
    <p>Academic Background: ${academic}</p>
    <p>Background in Web Development: ${background}</p>
    <h4>Platform: ${platform}</h4>
    <p>Funny thing about yourself: ${funny}</p>
    <p>Something else about yourself: ${anything}</p>`;
   
    
    const coursesList = document.getElementById('courses[]');
    const courseInputs = coursesList.getElementsByTagName('input');

    for (let i = 0; i < courseInputs.length; i++) {
        resultsDiv.innerHTML += `<p>Course ${i + 1}: ${courseInputs[i].value}</p>`;
    }

    const contentDiv = document.getElementById('data');
    contentDiv.innerHTML = "";
    contentDiv.appendChild(submittedContent);
}

let courseArr = [];

function addCourse() {
    const courseList = document.getElementById('courses[]');
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.name = 'courses[]';

    const button = document.createElement('button');
    button.textContent = '-';
    button.addEventListener('click', deleteCourse);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    const br = document.createElement('br');
    
    courseList.appendChild(courseInput);
    courseList.appendChild(button);
    courseList.appendChild(br);
        function deleteCourse(){
            courseList.removeChild(courseInput);
            courseList.removeChild(button);
            courseList.removeChild(br);
        }
   }


    addEventListener('DOMContentLoaded',function(event){
        const introForm = document.getElementById('introForm');
        const introContent = document.getElementById('data');
   

    });


  