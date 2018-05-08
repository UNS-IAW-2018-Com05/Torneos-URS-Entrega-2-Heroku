function guardarPartido(boton) {
  const puntoLocal = $(boton).parent().siblings()[3].children[0].value;
  const puntoVisitante = $(boton).parent().siblings()[4].children[0].value;
  const idPartido = boton.id;
  var dataPartido={id: idPartido, puntosLocal: puntoLocal , puntosVisitante: puntoVisitante, estado: 'finalizado'};

  $.post('./api/partidoNuevo',
      dataPartido,
      function(data, status){
          alert("Partido: " + data + " guardado.");
          $(boton).prop('disabled',true);
          $(boton).attr('cursor','pointer');
      });

}
