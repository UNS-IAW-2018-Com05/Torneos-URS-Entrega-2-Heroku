function mostrarPartidos(id){

  var i;
  for(i=1;i<7;i++){
    $("#"+i).parent().removeClass();
    $("#"+i).parent().addClass('page-item');
  }
  $("#"+id).parent().addClass('page-item active');

  $.ajax({
    type: 'get',
    url: './api/fecha',
    data: "id="+id,
    success: function(data) {
        var partidos = data.partidos;
        var i;
        for(i=0;i<partidos.length;i++){
            document.getElementById("titulo-"+(i+1)).innerHTML=partidos[i].local.nombre+" - "+partidos[i].visitante.nombre;
            document.getElementById("puntos-"+(i+1)).innerHTML=partidos[i].puntosLocal+" - "+partidos[i].puntosVisitante;
            document.getElementById("hora-"+(i+1)).innerHTML="Hora "partidos[i].hora;
            document.getElementById("estado-"+(i+1)).innerHTML=partidos[i].estado;
        }

    }
});
}
