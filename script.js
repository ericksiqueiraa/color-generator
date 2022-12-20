const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  fetch("http://api.creativehandles.com/getRandomColor")
    .then(function (response) {
      response.json().then(function (data) {
        let color = data["color"];
        document.body.style.backgroundColor = color;
        color.textContent = color;
      });
    })
    .catch(function () {});
});
/* const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];*/

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
