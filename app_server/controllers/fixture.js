const mongoose = require('mongoose');
const Fecha = mongoose.model('Fecha');
const Partido = mongoose.model('Partido');

var fechaReciente;

var ress;
var user;

/* GET home page. */
const fixture = function (req, res) {
  ress = res;
  user = req.user;
  obtenerFechas();
};

function obtenerFechas(){
   var query = Fecha.find({});
   query.exec(function(err,fechas){
     if(err)
        return console.log(err);
      obtenerFechaMasReciente(fechas);
  });
}

function obtenerFechaMasReciente(fechas) {
    var index;
    var termine=false;
    var masReciente=99999999999;
    for(index=0;index<fechas.length && !termine;++index){
        var dia = fechas[index].diasDeJuego[1];
        var distancia = new Date()-dia;
        if(distancia<0)
            termine=true;
        else{
            if(distancia<masReciente) {
                masReciente = new Date() - dia;
                fechaReciente = index;
            }
        }
    }
    fechaReciente = fechaReciente+1;
    obtenerPartidos(fechaReciente,fechas);
}

function obtenerPartidos(fechaMasReciente,fechas){
  Fecha.
  findOne({numero:fechaMasReciente}).
  populate({ path: 'partidos',
             populate:[{ path: 'local', select: 'nombre'},{ path: 'visitante', select: 'nombre'}]
           }).
  exec(function (err, resultado) {
    ress.render('fixture', {
      title: 'Torneos URS',
      fechas: fechas,
      fechaMasReciente: fechaMasReciente,
      partidos: resultado.partidos,
      user: user
    })
  });
}

module.exports = {
  fixture
}
