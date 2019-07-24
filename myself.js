

alert("yay javascript is working");
window.onload = setup;

function setup() {
  var button = document.getElementById("button1");
  button.onclick = colorChange;

}
function colorChange() {
  alert("in function");
  document.getElementById("color").style.color = "red";
}
