// Select the all the buttons by class name
const numberOfButtons = document.querySelectorAll(".drum");
// loop through the number of buttons and add functionality when each button is clicked
for (i = 0; i < numberOfButtons.length; i++) {
  numberOfButtons[i].addEventListener("click", function () {
    // to get the button which has been clicked use "this"
    const buttonInnerHtml = this.innerHTML;
    // when a button is clicked it should call the sound function 
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
// when the key is pressed the sound functionality should also trigger
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
// Use Switch statements for every key pressed or clicked and also put it inside a function for reusablity both by clicking and pressing the buttons
function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}
// add button animation when it is pressed it will change color and after it should remain in orginal style
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
