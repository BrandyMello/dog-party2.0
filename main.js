var dogName = document.querySelector("#dog-name");
var nameDisplay = document.querySelector(".some-dog");
var formBtn = document.querySelector(".form-btn");


var showLessHowBtn = document.querySelector('.show-less-how-btn');
var howContent = document.getElementById('how-content');
var showLessWhatBtn =document.querySelector('.show-less-what-btn');
var whatContent = document.getElementById('what-content');
var showLessFactsBtn = document.querySelector('.show-less-facts-btn');
var factsContent = document.getElementById('facts-content')


formBtn.addEventListener('click', changeName);

showLessHowBtn.addEventListener('click', toggleHowContent);
showLessWhatBtn.addEventListener('click', toggleWhatContent);
showLessFactsBtn.addEventListener('click', toggleFactsContent);
// document.addEventListener('click', toggleContent, true);

function changeName(e) {
  e.preventDefault();
  nameDisplay.innerText = dogName.value;
  dogName.value = "";
}

// function toggleContent(e) {
//   if (e.target && e.target.className == 'info-btn'){
//     var sibElem = e.target.nextElementSibling;
//     if (sibElem.style.display === 'none') {
//     sibElem.style.display = 'block';
//   }
//   else {
//     sibElem.style.display = 'none';
//   }
//   }
// }

 // console.log('how-content')



function toggleHowContent(e) {
  if (howContent.style.display === 'none') {
    howContent.style.display = 'block';
  }
  else {
    howContent.style.display = 'none';
  }
}

function toggleWhatContent(e) {
  if (whatContent.style.display === 'none') {
    whatContent.style.display = 'block';
  }
  else {
    whatContent.style.display = 'none';
  }
}

function toggleFactsContent(e) {
  if (factsContent.style.display === 'none') {
    factsContent.style.display = 'block';
  }
  else {
    factsContent.style.display = 'none';
  }
}

//grab the container #columns
//add event listener on the entire container
//conditionals for each button connecting to each content section
//flip the switch for that section(already honed in on)