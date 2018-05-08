const mongoose = require('mongoose');
const Club = mongoose.model('Club');

var user;

const clubes = function (req, res) {
  user = req.user;
  var query = Club.find({});
  query.exec(function(err,clubes){
    if(err)
       return console.log(err);
    res.render('clubes', { title: 'Torneos URS',
                           clubes: clubes,
                           user: user
                          });
  });
};

module.exports = {
  clubes
}
