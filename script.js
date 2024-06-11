

var texts = ["esginer", "eveopler","esginer"];
var count = 0;
var textElement = document.querySelector("#pro span");

setInterval(changeText, 3000); // Change text every 1 second

function changeText() {
    textElement.textContent = texts[count];
    count < 1 ? count++ : count = 0;
}