// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg'];
var currentIndex = 0;
document.getElementsByTagName("body")[0].addEventListener("click", showNextPicture);

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;

  }
  alert("Clicked");
  document.getElementsByTagName("img")[0].src = pictures[currentIndex];
  // YOUR TASK: Finish this function!
}