var dogName = document.querySelector("#dog-name");
var nameDisplay = document.querySelector(".some-dog");
var formBtn = document.querySelector(".form-btn");
var showLessHowBtn = document.querySelector('.show-less-how-btn');
var howContent = document.getElementById('how-content');


formBtn.addEventListener('click', changeName);
showLessHowBtn.addEventListener('click', showHideContent);

function changeName(e) {
  e.preventDefault();
  nameDisplay.innerText = dogName.value;
  dogName.value = "";
}
 // console.log('how-content')



function showHideContent(e) {
  if (howContent.style.display === 'none') {
    howContent.style.display = 'block';
  }
  else {
    howContent.style.display = 'none';
  }
}

//grab the container #columns
//add event listener on the entire container
//conditionals for each button connecting to each content section
//flip the switch for that section(already honed in on)