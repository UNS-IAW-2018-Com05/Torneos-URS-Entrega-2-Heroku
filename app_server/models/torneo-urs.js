const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jugadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  posicion: {
    type: String,
    required: true
  }
});

const clubSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  escudo: {
    type: String,
    required: true
  },
  jugadores: [jugadorSchema]
});

const partidoSchema = new mongoose.Schema({
  dia: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  local: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  },
  visitante: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  },
  puntosLocal: {
    type: Number,
    required: true
  },
  puntosVisitante: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  arbitro: {
    nombre: String,
    apellido: String
  }
});

const fechaSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true
  },
  diasDeJuego: [Date],
  partidos: [{
    type: Schema.Types.ObjectId,
    ref: 'Partido'
  }]
});

const eventoSchema = new mongoose.Schema({
  idPartido: {
    type: Schema.Types.ObjectId,
    ref: 'Partido'
  },
  idJugador: {
    type: Schema.Types.ObjectId,
    ref: 'Jugador'
  },
  minuto: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
});

mongoose.model('Club', clubSchema);
mongoose.model('Jugador', jugadorSchema);
mongoose.model('Partido', partidoSchema);
mongoose.model('Fecha', fechaSchema);
mongoose.model('Evento', eventoSchema);
