const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');
const Club = mongoose.model('Club');

var ress;
var user;

const posiciones = function (req, res) {

  ress = res;
  user = req.user;
  var posicionesOrdenadas = obtenerTotalDePuntos();

};

 function obtenerTotalDePuntos(){

   var query = Club.find({});
   query.exec((err, clubes) => {
       if (err) {
         res.render('error', { error : err });
       }

       var i;
       var mapeo = new Map();
       for (i = 0;i<clubes.length;i++){
         mapeo.set((clubes[i]._id).toString(), 0);
       }

        var query = Partido.find({});
        query.exec((err, partidos) => {
            if (err) {
              res.render('error', { error : err });
            }
            for (i = 0; i<partidos.length;i++){
              if(partidos[i].estado=="finalizado") {
                  var idClubLocal = partidos[i].local;
                  var idClubVisitante = partidos[i].visitante;
                  var puntosLocal = partidos[i].puntosLocal;
                  var puntosVisitante = partidos[i].puntosVisitante;
                  if (puntosLocal > puntosVisitante) {
                      var puntosActualizados = mapeo.get(idClubLocal.toString()) + 4;
                      mapeo.set(idClubLocal.toString(), puntosActualizados);
                  }
                  else {
                      if (puntosLocal < puntosVisitante){
                          var puntosActualizados = mapeo.get(idClubVisitante.toString()) +4;
                          mapeo.set(idClubVisitante.toString(), puntosActualizados);
                      }
                      else {
                          var puntosActualizadosLocal = mapeo.get(idClubLocal.toString()) +2;
                          mapeo.set(idClubLocal.toString(), puntosActualizadosLocal);
                          var puntosActualizadosVisitante = mapeo.get(idClubVisitante.toString()) +2;
                          mapeo.set(idClubVisitante.toString(), puntosActualizadosVisitante);
                      }
                  }
              }
            }
            var posiciones = new Array();


            var j;
            var i=0;
            while (mapeo.size>0){
              var puntajeMaximo=0;
              var clubConPuntajeMaximo;
              for (j = 0; j<clubes.length; j++){

                var puntajeClub = mapeo.get((clubes[j]._id).toString());
                if (puntajeClub>puntajeMaximo){

                  puntajeMaximo=puntajeClub;
                  clubConPuntajeMaximo=clubes[j];
                }
              }
              var clubPuntaje={club: clubConPuntajeMaximo , puntaje: puntajeMaximo};
              posiciones[i]=clubPuntaje;
              i++;
              mapeo.delete((clubConPuntajeMaximo._id).toString());
            }
            ress.render('posiciones', { title: 'Posiciones', posiciones:posiciones, user: user });



        });

   });

}
module.exports = {
  posiciones
}
