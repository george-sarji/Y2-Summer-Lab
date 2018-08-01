// Put all your JavaScript in this file!


document.getElementsByTagName("button")[0].onclick = function () {
    var color = prompt("Which color do you like?");
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
};