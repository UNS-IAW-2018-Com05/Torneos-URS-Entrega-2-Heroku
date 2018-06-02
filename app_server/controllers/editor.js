const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');

var user;

const edicion = function (req, res) {
  user = req.user;
  var query = Partido.find({'estado':'no iniciado','editor':req.user.googleid})
  .populate( [{ path: 'local', select: 'nombre'},{ path: 'visitante', select: 'nombre'}]);
  query.exec(function(err,partidos){
    if(err)
       return console.log(err);
    res.render('editor', { title: 'Torneos URS',
                           partidos: partidos,
                           user: user
                          });
  });
};

module.exports = {
  edicion
}
