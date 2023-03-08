function disableArea() {
  document.getElementById("disableArea").disabled = true;
}


function cardDeleter() {
  var x = document.getElementById(card1);
    x.style.display = "none";
}


$('#card1').collapse({
  toggle: false
})
