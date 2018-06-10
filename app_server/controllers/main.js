const mongoose = require('mongoose');
const Fecha = mongoose.model('Fecha');
const Partido = mongoose.model('Partido');

var fechaReciente;

var ress;
var user;

const index = function (req, res) {
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
  fechaReciente=0;
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
  obtenerPartidos(fechaReciente);
}

function obtenerPartidos(fechaMasReciente){
  Fecha.
  findOne({numero:fechaMasReciente}).
  populate({ path: 'partidos',
  populate:[{ path: 'local', select: ['nombre','escudo']},{ path: 'visitante', select: ['nombre','escudo']}]
}).
exec(function (err, resultado) {
  var index;
  for(index=0;index<resultado.partidos.length;index++){
    date = resultado.partidos[index].dia;
    year = date.getFullYear();
    month = date.getMonth()+1;
    dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    fecha = dt+'-' + month + '-'+year;
    resultado.partidos[index].fecha = fecha;
  }
  ress.render('index', {
    title: 'Torneos URS',
    fecha: fechaReciente,
    partidos: resultado.partidos,
    user: user
  })
});
}

module.exports = {
  index
}
