const div = document.getElementById("movableDiv");

function moveDiv(event) {
  div.style.left = event.clientX + "px";
  div.style.top = event.clientY + "px";
}

document.addEventListener("pointermove", moveDiv);
