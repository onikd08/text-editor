const textAreaField = document.getElementById("text-area");

// Bold
document.getElementById("bold").addEventListener("click", function () {
  textAreaField.classList.toggle("font-bold");
});

// Italic
document.getElementById("italic").addEventListener("click", function () {
  textAreaField.classList.toggle("italic");
});

// Underline
document.getElementById("underline").addEventListener("click", function () {
  textAreaField.classList.toggle("underline");
});

// Left
document.getElementById("left").addEventListener("click", function () {
  textAreaField.style.textAlign = "left";
});

// Right
document.getElementById("right").addEventListener("click", function () {
  textAreaField.style.textAlign = "right";
});

//Center
document.getElementById("center").addEventListener("click", function () {
  textAreaField.style.textAlign = "center";
});

//Justify
document.getElementById("justify").addEventListener("click", function () {
  textAreaField.style.textAlign = "justify";
});

//font-size
document.getElementById("font-size").addEventListener("change", function (e) {
  document.getElementById(
    "text-area-div"
  ).style.fontSize = `${e.target.value}px`;
});

// color
document.getElementById("color").addEventListener("change", function (e) {
  document.getElementById("text-area-div").style.color = `${e.target.value}`;
});
