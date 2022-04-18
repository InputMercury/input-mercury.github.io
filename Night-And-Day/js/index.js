/**$(function(){
  alert("hi");
});
**/
$(document).ready(function(){
  $('button').click(function(){
    if($('body').hasClass('black')){
      $('body').removeClass('black').addClass('white');

    }
    else{
      $('body').removeClass('white').addClass('black');
    }
  });
});

$(document).ready(function(){
  $('#orb').click(function(){

    $('#text').addClass('grow');
    setTimeout(function(){
      $('#text').removeClass("grow");
    }, 250);

    if($('#orb').hasClass('sun')){
      $('#orb').removeClass('sun').addClass('moon');
      $('#inner-orb').removeClass('inner-orb-visible');
      $('#moonspot1').addClass('spot-visible');
      $('#moonspot2').addClass('spot-visible');
      $('#moonspot3').addClass('spot-visible');
    }
    else{
      $('#orb').removeClass('moon').addClass('sun');
      $('#inner-orb').addClass('inner-orb-visible');
      $('#moonspot1').removeClass('spot-visible');
      $('#moonspot2').removeClass('spot-visible');
      $('#moonspot3').removeClass('spot-visible');
    }

    if($('#sky').hasClass('day')){
      $('#sky').removeClass('day').addClass('night');
    }
    else{
      $('#sky').removeClass('night').addClass('day');
    }

    if($('#text').hasClass('day-color')){
      $('#text').removeClass('day-color').addClass('night-color');
    }
    else{
      $('#text').removeClass('night-color').addClass('day-color');
    }
  });
});
