function reset() {
    document.getElementById("introForm").reset();
}
function required(event) {
    event.preventDefault(); 
}

function addCourse() {
    const courseList = document.getElementById('courses[]');
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.name = 'courses[]';

    const button = document.createElement('button');
    button.textContent = '+';
    button.addEventListener('click', addCourse);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    const br = document.createElement('br');
    
    courseList.appendChild(courseInput);
    courseList.appendChild(button);
        courseList.appendChild(br);
   }

    addEventListener('DOMContentLoaded',function(event){
        const introForm = document.getElementById('introForm');
        const introContent = document.getElementById('data');
   

        introForm.addEventListener('submit', function (event) {
          
        const name = document.getElementById('name').value;
        const mascot = document.getElementById('mascot').value;
        const image = document.getElementById('image').value
        const imageCaption = document.getElementById('caption').value;
        const personal = document.getElementById('personal').value
        const academic = document.getElementById('academic').value
        const background = document.getElementById('background').value
        const platform = document.getElementById('platform').value
        const courses = document.getElementById('input[name="courses[]"]')
        const funny = document.getElementById('funny').value
        const anything = document.getElementById('anything').value
    
        const newForm = 
        
        `<h2>Name: ${name}</h2>
        <h2>Mascot: ${mascot}</h2>
        <h2>Image: <img src="${image}" alt="Image"></img></h2>
        <figcaption>${imageCaption}</figcaption>
        <p>Personal Background: ${personal}</p>
        <p>Academic Background: ${academic}</p>
        <p>Background in Web Development: ${background}</p>
        <h4>Platform: ${platform}</h4>
        <p>Courses: ${Array.from(courses).map(course => course.value).join(', ')}</p>
        <p>Funny thing about yourself: ${funny}</p>
        <p>Something else about yourself: ${anything}</p>`

        const resultsDiv = document.getElementById('result');
        resultsDiv.innerHTML = newForm;
      });
    });


  