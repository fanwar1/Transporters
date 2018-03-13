var today = new Date(); // Create a new date object
var hourNow = today.getHours();
var greeting;

// Display appropriate greeting based on the current time
if (hourNow >18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.getElementById('greeting').textContent="Hello";
document.getElementById("1st").innerHTML='"We were very impressed with Sarah\'s Interior Designs services" - John Smith';

$("#greeting").after('<h3>' + greeting + '</h3>');


// JavaScript Document