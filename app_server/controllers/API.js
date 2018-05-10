const mongoose = require('mongoose');
const Fecha = mongoose.model('Fecha');
const Partido = mongoose.model('Partido');
const User = require('../models/user-model');

const getFecha = function (req, res) {

  Fecha.
  findOne({numero:req.query.id}).
  populate({ path: 'partidos',
             populate:[{ path: 'local', select: 'nombre'},{ path: 'visitante', select: 'nombre'}]
           }).
  exec(function (err, resultado) {
    var toSend = resultado.partidos;
    if (err) {
				res
					.status(404)
					.json(err);
    } else {
				res
					.status(200)
					.json(toSend);
			}
		})
};

const savePartido = function(req,res) {
  Partido.findByIdAndUpdate(
    req.body.id,
    req.body,
    (err, partido) => {
        if (err) return res.status(500).send(err);
        return res.send(partido._id);
    }
  )
}

const guardarEstilo = function(req,res){
  if (req.user) {
    var data;
    if(req.query.id == 1)
      data = {estilo: true};
    else
      data = {estilo: false};
    User.findByIdAndUpdate(
      req.user._id,
      data,
      (err, usuario) => {
          if (err)
            return res.status(500).send(err);
          res.send('ok');
      }
    )
 } else {
    res.send('no');
  }
}

const guardarFavorito = function(req,res){
  User.findByIdAndUpdate(
    req.user._id,
    {equipofavorito:req.query.id},
    (err, usuario) => {
        if (err)
          return res.status(500).send(err);
        res.send('ok');
    }
  );
}

module.exports = {
	getFecha,savePartido,guardarEstilo,guardarFavorito
};
