// JavaScript
var modal = document.getElementById("modal");
var button = document.getElementById("resume-button");
var close = document.getElementsByClassName("close")[0];
const button = document.getElementById('download-btn');

button.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

button.onclick = function() {
    window.open('Desktop\personal portfolio/myresume.pdf', '_blank');  
  };
