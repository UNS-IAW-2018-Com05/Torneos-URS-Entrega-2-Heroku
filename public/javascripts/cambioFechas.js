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
          /*
            var card = document.getElementById("partido-"+(i+1)).childNodes;
            var cardBody = card[3].childNodes;
            cardBody[1].innerHTML = partidos[i].local.nombre+" - "+partidos[i].visitante.nombre;
            cardBody[3].innerHTML = partidos[i].puntosLocal+" - "+partidos[i].puntosVisitante;
            cardBody[5].childNodes[1].innerHTML = partidos[i].estado;
            cardBody[5].childNodes[1].innerHTML = partidos[i].estado;
            */
            document.getElementById("titulo-"+(i+1)).innerHTML=partidos[i].local.nombre+" - "+partidos[i].visitante.nombre;
            document.getElementById("puntos-"+(i+1)).innerHTML=partidos[i].puntosLocal+" - "+partidos[i].puntosVisitante;
            document.getElementById("dia-"+(i+1)).innerHTML=partidos[i].fecha;
            document.getElementById("hora-"+(i+1)).innerHTML=partidos[i].hora;
            document.getElementById("estado-"+(i+1)).innerHTML=partidos[i].estado;
        }

    }
});
}
