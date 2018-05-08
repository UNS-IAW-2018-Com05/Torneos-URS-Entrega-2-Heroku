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
            var card = document.getElementById("partido-"+(i+1)).childNodes;
            var cardBody = card[3].childNodes;
            cardBody[1].innerHTML = partidos[i].local.nombre+" - "+partidos[i].visitante.nombre;
            cardBody[3].innerHTML = partidos[i].puntosLocal+" - "+partidos[i].puntosVisitante;
            cardBody[5].childNodes[0].innerHTML = partidos[i].estado;
        }

    }
});
}
