function CambiarEstilo(){

  var styleSheet = document.getElementById('estilo2');
  if (styleSheet.disabled== true){
    $.get('./api/guardarEstilo', { id: 1 }, function(data) {
      console.log(data);
      location.reload(true);
    });
  }
  else {
    $.get('./api/guardarEstilo', { id: 0 }, function(data) {
      console.log(data);
      location.reload(true);
    });
  }

}
