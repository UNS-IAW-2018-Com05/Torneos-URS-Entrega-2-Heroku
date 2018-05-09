$(document).ready(function(){
  if(localStorage.getItem("estilo")=="true"){
    $("#estilo2").prop('disabled', false);
    $("body").attr('background','');
  }
  if(localStorage.getItem("estilo")=="false"){
    $("#estilo2").prop('disabled', true);
    $("body").attr('background','images/backgroundNigth.jpg');
  }

});

function CambiarEstilo(){
  var styleSheet = document.getElementById('estilo2');

  if (styleSheet.disabled== true){
    $.get('./api/guardarEstilo', { id: 1 }, function(data) {
      console.log(data);
      if(data=='no'){
        localStorage.setItem("estilo","true");
        $("#estilo2").prop('disabled', false);
        $("body").attr('background','');
      }
      else{
        localStorage.clear();
        location.reload(true);
      }
    });
  }

  else {
    $.get('./api/guardarEstilo', { id: 0 }, function(data) {
      console.log(data);
      if(data=='no'){
        localStorage.setItem("estilo","false");
        $("#estilo2").prop('disabled', true);
        $("body").attr('background','images/backgroundNigth.jpg');
      }else{
        localStorage.clear();
        location.reload(true);
      }
    });
  }

}
