function reset(){
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
    const br = document.createElement('br');
    button.addEventListener('click', addCourse);

    courseList.appendChild(courseInput);
    courseList.appendChild(button);
    courseList.appendChild(br);
}

  function print(){
    const formData = new FormData(document.getElementById('introForm'));
    const courseHeader = document.createElement('h3');
    courseHeader.type = "text";
    courseHeader.textContent = formData.getElementById('name');
    formData.appendChild(courseHeader);
  
  }