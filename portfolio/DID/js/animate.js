

// 1 second
sound0 = document.getElementById('sound0');
sound0.load();

// 0.02 second
sound1 = document.getElementById('sound1');
sound1.load();

// 1 second
sound2 = document.getElementById('sound2');
sound2.load();

// 1 second
sound3 = document.getElementById('sound3');
sound3.load();

// 1 second
sound4 = document.getElementById('sound4');
sound4.load();

// 1 second
sound5 = document.getElementById('sound5');
sound5.load();

// 1 second
sound6 = document.getElementById('sound6');
sound6.load();

// 1 second
sound7 = document.getElementById('sound7');
sound7.load();

// 1 second
sound8 = document.getElementById('sound8');
sound8.load();

// 1 second
sound9 = document.getElementById('sound9');
sound9.load();

soundSpace = document.getElementById('soundSpace');
soundSpace.load();



var colors = ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2"];

$(document).ready(function(){

  $(document).keypress(function(e){

    if(e.which==48){
      $('#div0').addClass('zero');
      sound0.play();
      setTimeout(function(){
        $('#div0').removeClass('zero');
      }, 1000);
    }

    if(e.which==49){
      $('#div1').addClass('one');
      sound1.play();
      setTimeout(function(){
        $('#div1').removeClass('one');
      }, 1000);
    }
    if(e.which==50){
      $('#div2').addClass('two');
      sound2.play();
      setTimeout(function(){
        $('#div2').removeClass('two');
      }, 1000);
    }

    if(e.which==51){
      $('#div3').addClass('three');
      sound3.play();
      setTimeout(function(){
        $('#div3').removeClass('three');
      }, 1000);
    }

    if(e.which==52){
      $('#div4').addClass('four');
      sound4.play();
      setTimeout(function(){
        $('#div4').removeClass('four');
      }, 1000);
    }

    if(e.which==53){
      $('#div5').addClass('five');
      sound5.play();
      setTimeout(function(){
        $('#div5').removeClass('five');
      }, 1000);
    }

    if(e.which==54){
      $('#div6').addClass('six');
      sound6.play();
      setTimeout(function(){
        $('#div6').removeClass('six');
      }, 1000);
    }

    if(e.which==55){
      $('#div7').addClass('seven');
      sound7.play();
      setTimeout(function(){
        $('#div7').removeClass('seven');
      }, 1000);
    }

    if(e.which==56){
      $('#div8').addClass('eight');
      sound8.play();
      setTimeout(function(){
        $('#div8').removeClass('eight');
      }, 1000);
    }

    if(e.which==57){
      $('#div9').addClass('nine');
      sound9.play();
      setTimeout(function(){
        $('#div9').removeClass('nine');
      }, 1000);
    }





    if(e.which==32){
       var choice = Math.floor(Math.random() * 4);

      $("body").css("background-color", colors[choice]);
      soundSpace.play();
    }


  });


  // $(document).keyup(function(e){
  //   if(e.which==48){
  //     $('#div0').removeClass('zero');
  //   }
  // });




}); 
