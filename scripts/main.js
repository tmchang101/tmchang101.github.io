
var myButton = document.querySelector('button');
var myHeading = document.querySelector('div');

alert('---1----'); 
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  alert('--- set new content. ---'); 
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

/*
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

*/

myButton.onclick = function() {
  setUserName();
}