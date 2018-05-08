$(document).ready(function(){
  if(localStorage.getItem("estilo")=="true"){
    $("#estilo2").prop('disabled', false);
  }
  if(localStorage.getItem("estilo")=="false"){
    $("#estilo2").prop('disabled', true);
  }

});

window.onload = function() {
 $("#cargador").show();
};

function CambiarEstilo(){
  var styleSheet = document.getElementById('estilo2');

  if (styleSheet.disabled== true){
    $.get('./api/guardarEstilo', { id: 1 }, function(data) {
      console.log(data);
      if(data=='no'){
        localStorage.setItem("estilo","true");
        $("#estilo2").prop('disabled', false);
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
      }else{
        localStorage.clear();
        location.reload(true);
      }
    });
  }

}
