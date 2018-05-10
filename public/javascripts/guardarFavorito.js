function guardarFavorito(id){
  $.get('./api/guardarFavorito', { id: id }, function(data) {
      alert("Equipo favorito actualizado");
    })
  };
