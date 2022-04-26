

function setActive(x){
  var y = document.getElementById("tag1");
  y.className+= "active";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function naviToggler(){
  var x = document.getElementById("navi-toggle");
  x.checked= false;
}
