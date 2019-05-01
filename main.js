var dogName = document.querySelector("#dog-name");
var nameDisplay = document.querySelector(".some-dog");
var formBtn = document.querySelector(".form-btn");

formBtn.addEventListener('click', changeName);

function changeName(e) {
  e.preventDefault();
  nameDisplay.innerText = dogName.value;
  dogName.value = "";
}
