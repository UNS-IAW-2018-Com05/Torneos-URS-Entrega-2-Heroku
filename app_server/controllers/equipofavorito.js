const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');
const Club = mongoose.model('Club');
const Fecha = mongoose.model('Fecha');

var user;

const equipofavorito = function (req, res) {
  user = req.user;
  Fecha.
  find({}).
  populate( {path:'partidos',
            match: {$or:[{local:req.user.equipofavorito},{visitante:req.user.equipofavorito}]},
            populate:[{ path: 'local', select: 'nombre'},{ path: 'visitante', select: 'nombre'}]}).
  exec(function (err, fechas) {
    Club.findById(req.user.equipofavorito).exec(function (err, club){
      res.render('equipofavorito', {
        title: 'Torneos URS',
        user: user,
        equipofavorito:club,
        fechas:fechas
    })
    })
  });
};

module.exports = {
  equipofavorito
}
