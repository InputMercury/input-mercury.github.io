

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

function projectToggler(){
  if(document.getElementById('flexRadioDefault1').checked) {
    document.getElementById('slide-1').style.display = 'flex';
    document.getElementById('slide-2').style.display = 'none';
    document.getElementById('slide-3').style.display = 'none';
  } else if(document.getElementById('flexRadioDefault2').checked) {
    document.getElementById( 'slide-1' ).style.display = 'none';
    document.getElementById( 'slide-2' ).style.display = 'flex';
    document.getElementById( 'slide-3' ).style.display = 'none';
  } else {
    document.getElementById( 'slide-1' ).style.display = 'none';
    document.getElementById( 'slide-2' ).style.display = 'none';
    document.getElementById( 'slide-3' ).style.display = 'flex';
  }
}
