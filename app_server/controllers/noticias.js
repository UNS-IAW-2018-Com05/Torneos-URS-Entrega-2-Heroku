var user;

const noticias = function (req, res) {
  user = req.user;
  res.render('noticias', { title: 'Torneos URS',
                           user: user
                          });
};

module.exports = {
  noticias
}
