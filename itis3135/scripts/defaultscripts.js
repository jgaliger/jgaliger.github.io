
function currentDate(){
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
alert(currentDate);
}

function greeting(){
    var name = document.getElementById("name");
    var mood = document.getElementById("mood");
    var welcome ="The Jobless Gerbil welcomes you, " + name.value + "! We're glad you're doing "+mood.value +"!";
    alert(welcome);
}


function polygon(){
  let polygonValue = document.getElementById("polygonInput").value;
  polygonValue = Math.abs(polygonValue);
  polygonValue Math.round(polygonValue);
  const polygonNames = ["circle", "monogon", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
  if (polygonValue >= 0 && polygonValue <= 10) {
    alert("Your favorite number corresponds to a "  + polygonNames[polygonValue] +".");
} else {
    alert("Please enter a valid number between 0 and 10.");
}
}

function insult(){
    var insult1 = document.getElementById("insultInput");
    var message="Why would you ever say " + insult1.value + "??? You're terrible!";
    alert(message);
}
function dailyAdvice(){
  alert("Join our company or you will be homeless very soon.");
}

function age(){
  var age = document.getElementById("ageInput").value;
  if(age<=12){
    alert("You are a child, we have no need for you in our company.");
  }
  else if(age>12 && age<70){
    alert("Please join our comany!!!");
  }
  else{
    alert("Do you even know how to use a computer???");
  }
}
function yes(){
  alert("Awesome! Welcome to the company!");
}
function no(){
  alert("I hope your car crashes on the way home.")
}