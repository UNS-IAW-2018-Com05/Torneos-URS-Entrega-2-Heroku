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
        var partidos = data;
        var i;
        var index;
        for(i=0;i<partidos.length;i++){
          var date = new Date(partidos[i].dia);
          year = date.getFullYear();
          month = date.getMonth()+1;
          dt = date.getDate();

          if (dt < 10) {
            dt = '0' + dt;
          }
          if (month < 10) {
            month = '0' + month;
          }
          const fecha = dt+'-' + month + '-'+year;

            document.getElementById("titulo-"+(i+1)).innerHTML =  partidos[i].local.nombre+" - "+partidos[i].visitante.nombre;
            document.getElementById("puntos-"+(i+1)).innerHTML =  partidos[i].puntosLocal+" - "+partidos[i].puntosVisitante;
            document.getElementById("dia-"+(i+1)).innerHTML ="<strong>Dia </strong>"+fecha;
            document.getElementById("hora-"+(i+1)).innerHTML = "<strong>Hora </strong>"+ partidos[i].hora;
            document.getElementById("estado-"+(i+1)).innerHTML =  "<small>"+partidos[i].estado+"</small>";
        }

    }
});
}
