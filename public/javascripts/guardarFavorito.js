function guardarFavorito(id){
  $.get('./api/guardarFavorito', { id: id }, function(data) {
      alert("Favorito actualizado");
    })
  };
