function guardarPartido(boton) {
  const puntoLocal = $(boton).parent().siblings()[3].children[0].value;
  const puntoVisitante = $(boton).parent().siblings()[4].children[0].value;
  if(puntoLocal.length>0 && puntoVisitante.length>0){
    const idPartido = boton.id;
    var dataPartido={id: idPartido, puntosLocal: puntoLocal , puntosVisitante: puntoVisitante, estado: 'finalizado'};
    if (confirm('Datos correctos?')) {
      $.post('./api/partidoNuevo',
          dataPartido,
          function(data, status){
              alert("Partido: " + data + " guardado.");
              $(boton).attr("disabled", true);
              var icon = $(boton).children()[0];
              $(icon).addClass('fas fa-check').removeClass('far fa-save');
              $(boton).css('background-color', 'rgb(89, 210, 105)');
              $(boton).css('cursor','pointer');
          });
    }
  }
  else{
    alert("Ha ingresado valores nulos");
  }
}
