const mongoose = require('mongoose');
const Jugador = mongoose.model('Jugador');
const Club = mongoose.model('Club');

var clubes = [
    {
      nombre:'Sportiva',
      descripcion:'El rugby de sociedad sportiva tiene mas de 50 años, ha pasado de aquellos comienzos en una Coqueta sin pasto y con verstuarios de intermitente agua caliente, a este presente en La Carrindanga con instalaciones y comodidades que los pioneros del `58, nunca hubiesen soñado.',
      link:'http://www.sociedadsportiva.com.ar/',
      escudo:'sportiva.gif',
      jugadores: [{ nombre: 'Ariel', "apellido": 'Maldonado', posicion: 'Primera Linea' },
                  { nombre: 'Johann', "apellido": 'Peña', posicion: 'Primera Linea' },
                  { nombre: 'Jeremi', "apellido": 'Medina', posicion: 'Primera Linea' },
                  { nombre: 'Luca', "apellido": 'Araya', posicion: 'Segunda Linea' },
                  { nombre: 'Remigio', "apellido": 'Alarcón', posicion: 'Segunda Linea' },
                  { nombre: 'Florian', "apellido": 'Denos', posicion: 'Tercera Linea' },
                  { nombre: 'Anotine', "apellido": 'Erbani', posicion: 'Tercera Linea' },
                  { nombre: 'Julien', "apellido": 'Heriteau', posicion: 'Tercera Linea' },
                  { nombre: 'Arthur', "apellido": 'Joly', posicion: 'Medio Scrum' },
                  { nombre: 'Marco', "apellido": 'Kotze', posicion: 'Apertura' },
                  { nombre: 'Mathieu', "apellido": 'Lamoulie', posicion: 'Wing Izquierdo' },
                  { nombre: 'Denis', "apellido": 'Marchois', posicion: 'Centro Interior' },
                  { nombre: 'Tamaz', "apellido": 'Mchedlidze', posicion: 'Centro Exterior' },
                  { nombre: 'Antoine', "apellido": 'Miquel', posicion: 'Wing Derecho' },
                  { nombre: 'Thomas', "apellido": 'Murday', posicion: 'Full Back' }]
    },
    {
      nombre:'Argentino',
      link:'https://www.facebook.com/pg/clubargentinobb/about/?ref=page_internal',
      descripcion:'Club Argentino de Rugby',
      escudo:'argentino.jpg',
      jugadores:[{ nombre: 'Johan', "apellido": 'Aliouat', posicion: 'Primera Linea' },
      { nombre: 'Wayne', "apellido": 'Avei', posicion: 'Primera Linea' },
      { nombre: 'Luke', "apellido": 'Braid', posicion: 'Primera Linea' },
      { nombre: 'Hugh', "apellido": 'Chalmers', posicion: 'Segunda Linea' },
      { nombre: 'Marc', "apellido": 'Clerc', posicion: 'Segunda Linea' },
      { nombre: 'Vadim', "apellido": 'Cobilas', posicion: 'Tercera Linea' },
      { nombre: 'Blair', "apellido": 'Connor', posicion: 'Tercera Linea' },
      { nombre: 'Darly', "apellido": 'Domvo', posicion: 'Tercera Linea' },
      { nombre: 'Jean Baptiste', "apellido": 'Dubie', posicion: 'Medio Scrum' },
      { nombre: 'Nans', "apellido": 'Ducuing', posicion: 'Apertura' },
      { nombre: 'Loann', "apellido": 'Goujon', posicion: 'Wing Izquierdo' },
      { nombre: 'Yann', "apellido": 'Lesgourgues', posicion: 'Centro Interior' },
      { nombre: 'Romain', "apellido": 'Lonca', posicion: 'Centro Exterior' },
      { nombre: 'Jandre', "apellido": 'Marais', posicion: 'Wing Derecho' },
      { nombre: 'Jefferson', "apellido": 'Poirot', posicion: 'Full Back' }]
    },
    {
      nombre:'El Nacional',
      descripcion:'En el centro de la ciudad, en calle Chiclana 673, El Club posee su Sede Social con unos 2.600 m2 de instalaciones donde funciona la administración del Club y de las distintas subcomisiones.',
      link:'http://clubelnacional.com.ar/cen/index.php?option=com_content&view=category&layout=blog&id=5&Itemid=11',
      escudo:'el-nacional.jpg',
      jugadores:[{ nombre: 'Thomas', "apellido": 'Acquier', posicion: 'Primera Linea' },
      { nombre: 'Karlen', "apellido": 'Asieshvili', posicion: 'Primera Linea' },
      { nombre: 'Soso', "apellido": 'Bekoshvili', posicion: 'Primera Linea' },
      { nombre: 'Nicolas', "apellido": 'Bezy', posicion: 'Segunda Linea' },
      { nombre: 'Julien', "apellido": 'Brugnaut', posicion: 'Segunda Linea' },
      { nombre: 'Francois', "apellido": 'Da Ros', posicion: 'Tercera Linea' },
      { nombre: 'Vivien', "apellido": 'Devisme', posicion: 'Tercera Linea' },
      { nombre: 'Sevanaia', "apellido": 'Galala', posicion: 'Tercera Linea' },
      { nombre: 'Gaetan', "apellido": 'Germain', posicion: 'Medio Scrum' },
      { nombre: 'Petrus', "apellido": 'Hauman', posicion: 'Apertura' },
      { nombre: 'Said', "apellido": 'Hireche', posicion: 'Wing Izquierdo' },
      { nombre: 'Sisaro', "apellido": 'Koyamaibole', posicion: 'Centro Interior' },
      { nombre: 'Benjamin', "apellido": 'Lapeyre', posicion: 'Centro Exterior' },
      { nombre: 'Thomas', "apellido": 'Laranjeira', posicion: 'Wing Derecho' },
      { nombre: 'Julien', "apellido": 'Ledevedec', posicion: 'Full Back' }]
    },
    {
      nombre:'Puerto Belgrano',
      link:'https://www.facebook.com/puertobelgranorugby/',
      descripcion:'Club Puerto Belgrano de Rugby',
      escudo:'puerto-belgrano.jpg',
      jugadores:[{ nombre: 'Mathieu', "apellido": 'Babillot', posicion: 'Primera Linea' },
      { nombre: 'Alexandre', "apellido": 'Bias', posicion: 'Primera Linea' },
      { nombre: 'Yannick', "apellido": 'Caballero', posicion: 'Primera Linea' },
      { nombre: 'Julien', "apellido": 'Caminati', posicion: 'Segunda Linea' },
      { nombre: 'Rodrigo', "apellido": 'Capo Ortega', posicion: 'Segunda Linea' },
      { nombre: 'Thomas', "apellido": 'Combezou', posicion: 'Tercera Linea' },
      { nombre: 'Julien', "apellido": 'Dumora', posicion: 'Tercera Linea' },
      { nombre: 'Estefano', "apellido": 'Riquelme', posicion: 'Tercera Linea' },
      { nombre: 'Gabriel', "apellido": 'Yáñez', posicion: 'Medio Scrum' },
      { nombre: 'Ronal', "apellido": 'Hernández', posicion: 'Apertura' },
      { nombre: 'Adriano', "apellido": 'Sáez', posicion: 'Wing Izquierdo' },
      { nombre: 'Willian', "apellido": 'Riquelme', posicion: 'Centro Interior' },
      { nombre: 'Amaru', "apellido": 'Peña', posicion: 'Centro Exterior' },
      {nombre: 'Rafael', "apellido": 'Garrido', posicion: 'Wing Derecho' },
      { nombre: 'Jair', "apellido": 'Guzmán', posicion: 'Full Back' }]
    },
    {
      nombre:'Coronel Suarez RHC',
      link:'https://www.facebook.com/CoronelSuarezRugbyHockeyClub/',
      descripcion:'Coronel Suarez Rugby & Hockey Club',
      escudo:'coronel-suarez.jpg',
      jugadores:[{ nombre: 'Kristian', "apellido": 'Guerrero', posicion: 'Primera Linea' },
      { nombre: 'Maikel', "apellido": 'Salazar', posicion: 'Primera Linea' },
      { nombre: 'Matteo', "apellido": 'Poblete', posicion: 'Primera Linea' },
      { nombre: 'Jhoel', "apellido": 'Flores', posicion: 'Segunda Linea' },
      { nombre: 'Raphael', "apellido": 'Vergara', posicion: 'Segunda Linea' },
      { nombre: 'Eliseo', "apellido": 'Araya', posicion: 'Tercera Linea' },
      { nombre: 'Jeremy', "apellido": 'Donoso', posicion: 'Tercera Linea' },
      { nombre: 'Maximilian', "apellido": 'Valenzuela', posicion: 'Tercera Linea' },
      { nombre: 'Leandro', "apellido": 'Vargas', posicion: 'Medio Scrum' },
      { nombre: 'Fredy', "apellido": 'Sánchez', posicion: 'Apertura' },
      { nombre: 'Isaías', "apellido": 'Díaz', posicion: 'Wing Izquierdo' },
      { nombre: 'Erik', "apellido": 'San Martín', posicion: 'Centro Interior' },
      { nombre: 'Benito', "apellido": 'Campos', posicion: 'Centro Exterior' },
      { nombre: 'Álvaro', "apellido": 'Campos', posicion: 'Wing Derecho' },
      { nombre: 'Tobías', "apellido": 'Olivares', posicion: 'Full Back' }]
    },
    {
      nombre:'Santa Rosa Rugby',
      link:'https://www.facebook.com/SantaRosaRugbyOficial/?hc_ref=ARQ5DuKKocael0D24jko9NY6GKJOB_JRZMKXyxOG_ESj1phph7oW4laFfjUWw90rWQ8',
      descripcion:'Club Santa Rosa Rugby',
      escudo:'santa-rosa.jpg',
      jugadores:[{ nombre: 'Edward', "apellido": 'Maldonado', posicion: 'Primera Linea' },
      { nombre: 'Fidel', "apellido": 'Gutiérrez', posicion: 'Primera Linea' },
      {nombre: 'Kenny', "apellido": 'Valenzuela', posicion: 'Primera Linea' },
      { nombre: 'Basthian', "apellido": 'García', posicion: 'Segunda Linea' },
      { nombre: 'Gerard', "apellido": 'Castillo', posicion: 'Segunda Linea' },
      { nombre: 'Yeral', "apellido": 'Guerrero', posicion: 'Tercera Linea' },
      { nombre: 'Rubén', "apellido": 'Figueroa', posicion: 'Tercera Linea' },
      { nombre: 'Emerson', "apellido": 'Valdés', posicion: 'Tercera Linea' },
      { nombre: 'Josthyn', "apellido": 'Rodríguez', posicion: 'Medio Scrum' },
      { nombre: 'Nain', "apellido": 'Paredes', posicion: 'Apertura' },
      { nombre: 'Mark', "apellido": 'Escobar', posicion: 'Wing Izquierdo' },
      { nombre: 'Valentin', "apellido": 'Figueroa', posicion: 'Centro Interior' },
      { nombre: 'Esteban', "apellido": 'Alarcón', posicion: 'Centro Exterior' },
      { nombre: 'Mijael', "apellido": 'Garrido', posicion: 'Wing Derecho' },
      { nombre: 'Néstor', "apellido": 'Henríquez', posicion: 'Full Back' }]
    },
    {
      nombre:'Palihue',
      link:'https://www.facebook.com/Hockey-Club-palihue-173306986441676/',
      descripcion:'Club Palihue Rugby & Hockey',
      escudo:'palihue.jpg',
      jugadores:[{ nombre: 'Edgard', "apellido": 'Torres', posicion: 'Primera Linea' },
      { nombre: 'Giordano', "apellido": 'Carvajal', posicion: 'Primera Linea' },
      { nombre: 'Anton', "apellido": 'Miranda', posicion: 'Primera Linea' },
      { nombre: 'Danilo', "apellido": 'Henríquez', posicion: 'Segunda Linea' },
      { nombre: 'Américo', "apellido": 'Navarro', posicion: 'Segunda Linea' },
      { nombre: 'Balthazar', "apellido": 'Araya', posicion: 'Tercera Linea' },
      { nombre: 'Bernabé', "apellido": 'Alvarado', posicion: 'Tercera Linea' },
      { nombre: 'Tiago', "apellido": 'Vidal', posicion: 'Tercera Linea' },
      { nombre: 'Yojan', "apellido": 'San Martín', posicion: 'Medio Scrum' },
      { nombre: 'Erik', "apellido": 'Henríquez', posicion: 'Apertura' },
      { nombre: 'Yosef', "apellido": 'Escobar', posicion: 'Wing Izquierdo' },
      { nombre: 'Maximilian', "apellido": 'Guerrero', posicion: 'Centro Interior' },
      { nombre: 'Austin', "apellido": 'Fuentes', posicion: 'Centro Exterior' },
      { nombre: 'Brayan', "apellido": 'Venegas', posicion: 'Wing Derecho' },
      { nombre: 'Facundo', "apellido": 'Escobar', posicion: 'Full Back' }]
    },
    {
      nombre:'Universitario',
      link:'http://www.clubuniversitario.com.ar/deportes/rugby',
      descripcion:'El Club Universitario Bahía Blanca es una institución social y deportiva sin fines de lucro, conducida, administrada, dirigida y representada por una comisión directiva ad-honorem integrada por estudiantes universitarios o terciarios elegida por el termino de dos años, que se renueva por mitades cada año.',
      escudo:'universitario.jpg',
      jugaores:[{ nombre: 'Giuseppe', "apellido": 'Espinoza', posicion: 'Primera Linea' },
      { nombre: 'Emilio', "apellido": 'Riquelme', posicion: 'Primera Linea' },
      { nombre: 'Jhosep', "apellido": 'Flores', posicion: 'Primera Linea' },
      { nombre: 'Logan', "apellido": 'Aguilera', posicion: 'Segunda Linea' },
      { nombre: 'Jeremias', "apellido": 'Rojas', posicion: 'Segunda Linea' },
      { nombre: 'Marco', "apellido": 'Sepúlveda', posicion: 'Tercera Linea' },
      { nombre: 'Evan', "apellido": 'Lagos', posicion: 'Tercera Linea' },
      { nombre: 'Moisés', "apellido": 'Sanhueza', posicion: 'Tercera Linea' },
      { nombre: 'Valentin', "apellido": 'Paredes', posicion: 'Medio Scrum' },
      { nombre: 'Demmian', "apellido": 'Valenzuela', posicion: 'Apertura' },
      { nombre: 'Jhosep', "apellido": 'Castro', posicion: 'Wing Izquierdo' },
      { nombre: 'Emmanuel', "apellido": 'Riquelme', posicion: 'Centro Interior' },
      { nombre: 'Santino', "apellido": 'Flores', posicion: 'Centro Exterior' },
      { nombre: 'Julián', "apellido": 'Ruiz', posicion: 'Wing Derecho' },
      { nombre: 'Augusto', "apellido": 'Sandoval', posicion: 'Full Back' }]
    },
    {
      nombre:'Cazadores',
      link:'https://www.clubcazadores.com.ar/',
      descripcion:'Actualmente el Club cuenta con su Secretaría en calle Velez Sarsfield Nº 285, Campo de Tiro ubicado en Ruta 3 km. 490 con amplio salón, fogón y bar, pedanas de tiro a la hélice y una fosa de tiro al plato con robot automático, todo el predio con iluminación, Campo de Deportes en Esteban Echeverría 1800 con pileta de natación, salones de reuniones, fogones al aire libre, amplio parque con juegos infantiles, cuatro canchas de tenis de polvo y ladrillo contando estas con iluminación y con un quincho dotado de sala de estar, bar y baños, canchas de rugby y hockey sobre césped e instalaciones en predio frente al Campo de Deportes. En Claromecó posee su sede en Av. Costanera e/40 y 42.',
      escudo:'cazadores.png',
      jugadores:[{ nombre: 'Nibaldo', "apellido": 'Bravo', posicion: 'Primera Linea' },
      { nombre: 'Ramón', "apellido": 'Donoso', posicion: 'Primera Linea' },
      { nombre: 'Gregory', "apellido": 'Sepúlveda', posicion: 'Primera Linea' },
      { nombre: 'Jose', "apellido": 'Ramírez', posicion: 'Segunda Linea' },
      { nombre: 'Amador', "apellido": 'Sanhueza', posicion: 'Segunda Linea' },
      { nombre: 'Josias', "apellido": 'Molina', posicion: 'Tercera Linea' },
      { nombre: 'Jeferson', "apellido": 'Fuentes', posicion: 'Tercera Linea' },
      { nombre: 'Guido', "apellido": 'Venegas', posicion: 'Tercera Linea' },
      { nombre: 'Maykol', "apellido": 'Peña', posicion: 'Medio Scrum' },
      { nombre: 'Jhoan', "apellido": 'Herrera', posicion: 'Apertura' },
      { nombre: 'Dominic', "apellido": 'Toro', posicion: 'Wing Izquierdo' },
      { nombre: 'Gabriel', "apellido": 'Olivares', posicion: 'Centro Interior' },
      { nombre: 'Alexis', "apellido": 'Navarro', posicion: 'Centro Exterior' },
      { nombre: 'Magdiel', "apellido": 'Donoso', posicion: 'Wing Derecho' },
      { nombre: 'Adriano', "apellido": 'Tapia', posicion: 'Full Back' }]
    },
    {
      nombre:'Sol de Mayo (Viedma)',
      link:'http://clubsoldemayo.com.ar/',
      descripcion:'El club, cuenta con dos predios deportivos, uno ubicado en la esquina de las calles 25 de Mayo y Alsina. Allí se practica gimnasia artística, vóley y básquet, estando anexado un estadio para realizar estos últimos deportes con una capacidad de 900 personas. El otro predio polideportivo, está situado en las calles Avenida Costanera y Don Bosco. En este lugar se practica fútbol, tenis, hockey, rugby, handball, natación y pelota paleta.',
      escudo:'sol-de-mayo.jpg',
      jugaores:[{ nombre: 'Jastin', "apellido": 'López', posicion: 'Primera Linea' },
      { nombre: 'Máximo', "apellido": 'Garrido', posicion: 'Primera Linea' },
      { nombre: 'Fermín', "apellido": 'Vásquez', posicion: 'Primera Linea' },
      { nombre: 'Phillip', "apellido": 'Bustos', posicion: 'Segunda Linea' },
      { nombre: 'Cristofher', "apellido": 'Torres', posicion: 'Segunda Linea' },
      { nombre: 'Dieter', "apellido": 'Martínez', posicion: 'Tercera Linea' },
      { nombre: 'Amir', "apellido": 'Aguilera', posicion: 'Tercera Linea' },
      { nombre: 'Heriberto', "apellido": 'Salinas', posicion: 'Tercera Linea' },
      { nombre: 'Ancel', "apellido": 'Godoy', posicion: 'Medio Scrum' },
      { nombre: 'Jhans', "apellido": 'Vargas', posicion: 'Apertura' },
      { nombre: 'Kamilo', "apellido": 'Donoso', posicion: 'Wing Izquierdo' },
      { nombre: 'Braian', "apellido": 'Miranda', posicion: 'Centro Interior' },
      { nombre: 'Bayron', "apellido": 'Jara', posicion: 'Centro Exterior' },
      { nombre: 'Xavier', "apellido": 'Rivera', posicion: 'Wing Derecho' },
      { nombre: 'Yeferson', "apellido": 'Venegas', posicion: 'Full Back' }]
    }
  ];

Club.collection.insert(clubes, function (err, docs) {
      if (err){
          return console.error(err);
      } else {
        console.log('Multiple documents inserted to Collection');
      }
    });


    {
			"dia":ISODate('2018-03-10'),
			"hora":'16.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d7"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86da"),
			"puntosLocal":32,
			"puntosVisitante":25,
			"estado":'finalizado',
			"arbitro":{
                nombre: 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-10'),
			"hora":'16.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86dc"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d6"),
			"puntosLocal":32,
			"puntosVisitante":25,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-10'),
			"hora":'16.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86db"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d5"),
			"puntosLocal":32,
			"puntosVisitante":25,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-10'),
			"hora":'14.00',
			"local":10,
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d9"),
			"puntosLocal":32,
			"puntosVisitante":25,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-10'),
			"hora":'14.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86dd"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d8"),
			"puntosLocal":32,
			"puntosVisitante":25,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-17'),
			"hora":'15.30',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d8"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86dc"),
			"puntosLocal":7,
			"puntosVisitante":33,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-17'),
			"hora":'15.30',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d9"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d7"),
			"puntosLocal":25,
			"puntosVisitante":31,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-18'),
			"hora":'15.30',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d5"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86de"),
			"puntosLocal":21,
			"puntosVisitante":31,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-18'),
			"hora":'15.30',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d6"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86db"),
			"puntosLocal":48,
			"puntosVisitante":3,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-18'),
			"hora":'15.30',
			"local":ObjectId("5ae76ed6f9e8e94050fe86da"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86dd"),
			"puntosLocal":76,
			"puntosVisitante":5,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-24'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d7"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d5"),
			"puntosLocal":32,
			"puntosVisitante":25,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-24'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86db"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d8"),
			"puntosLocal":6,
			"puntosVisitante":46,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-24'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86de"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d6"),
			"puntosLocal":18,
			"puntosVisitante":57,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-24'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86dd"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86dc"),
			"puntosLocal":39,
			"puntosVisitante":12,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-24'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86da"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d9"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-31'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d6"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d7"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-31'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d5"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86da"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-31'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d9"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86dd"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-31'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d8"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86de"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-03-31'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86dc"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86db"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-08'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86de"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86dc"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-08'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86dd"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86db"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-08'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d7"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d8"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-08'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86da"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d6"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-08'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d9"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d5"),
			"puntosLocal":26,
			"puntosVisitante":24,
			"estado":'finalizado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-14'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d5"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86dd"),
			"puntosLocal":0,
			"puntosVisitante":0,
			"estado":'no iniciado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-14'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d6"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d9"),
			"puntosLocal":0,
			"puntosVisitante":0,
			"estado":'no iniciado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-14'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86d8"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86da"),
			"puntosLocal":0,
			"puntosVisitante":0,
			"estado":'no iniciado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-14'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86dc"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86d7"),
			"puntosLocal":0,
			"puntosVisitante":0,
			"estado":'no iniciado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		},
		{
			"dia":ISODate('2018-04-14'),
			"hora":'11.00',
			"local":ObjectId("5ae76ed6f9e8e94050fe86db"),
			"visitante":ObjectId("5ae76ed6f9e8e94050fe86de"),
			"puntosLocal":0,
			"puntosVisitante":0,
			"estado":'no iniciado',
			"arbitro":{
                "nombre": 'Nestor',
                "apellido": 'Pitana'
              }
		}


    {
      "numero":1,
			"diasDeJuego":[ISODate('2018-03-10'),ISODate('2018-03-11')],
			"partidos": [
				ObjectId("5ae8bf27f224d2c7ef8e3302"),
				ObjectId("5ae8bfbff224d2c7ef8e3323"),
				ObjectId("5ae8bfbff224d2c7ef8e3325"),
				ObjectId("5ae8bfbff224d2c7ef8e3327"),
				ObjectId("5ae8bfbff224d2c7ef8e3329")
			]
		},
		{
      "numero":2,
			"diasDeJuego":[ISODate('2018-03-17'),ISODate('2018-03-18')],
      "partidos": [
				ObjectId("5ae8bfbff224d2c7ef8e332b"),
				ObjectId("5ae8bfbff224d2c7ef8e332d"),
				ObjectId("5ae8bfbff224d2c7ef8e332f"),
				ObjectId("5ae8bfbff224d2c7ef8e3331"),
				ObjectId("5ae8bfbff224d2c7ef8e3333")
			]
		},
		{
      "numero":3,
			"diasDeJuego":[ISODate('2018-03-24'),ISODate('2018-03-25')],
      "partidos": [
				ObjectId("5ae8bfbff224d2c7ef8e3335"),
				ObjectId("5ae8bfbff224d2c7ef8e3337"),
				ObjectId("5ae8bfbff224d2c7ef8e3339"),
				ObjectId("5ae8bfbff224d2c7ef8e333b"),
				ObjectId("5ae8bfbff224d2c7ef8e333d")
			]
		},
		{
      "numero":4,
			"diasDeJuego":[ISODate('2018-03-31'),ISODate('2018-04-01')],
      "partidos": [
				ObjectId("5ae8bfbff224d2c7ef8e333f"),
				ObjectId("5ae8bfbff224d2c7ef8e3341"),
				ObjectId("5ae8bfbff224d2c7ef8e3343"),
				ObjectId("5ae8bfbff224d2c7ef8e3345"),
				ObjectId("5ae8bfbff224d2c7ef8e3347")
			]
		},
		{
      "numero":5,
			"diasDeJuego":[ISODate('2018-04-07'),ISODate('2018-04-08')],
      "partidos": [
				ObjectId("5ae8bfbff224d2c7ef8e3349"),
				ObjectId("5ae8bfbff224d2c7ef8e334b"),
				ObjectId("5ae8bfbff224d2c7ef8e334d"),
				ObjectId("5ae8bfbff224d2c7ef8e334f"),
				ObjectId("5ae8bfbff224d2c7ef8e3351")
			]
		},
		{
      "numero":6,
			"diasDeJuego":[ISODate('2018-04-14'),ISODate('2018-04-15')],
      "partidos": [
				ObjectId("5ae8bfbff224d2c7ef8e3353"),
				ObjectId("5ae8bfbff224d2c7ef8e3355"),
				ObjectId("5ae8bfbff224d2c7ef8e3357"),
				ObjectId("5ae8bfbff224d2c7ef8e3359"),
				ObjectId("5ae8bfbff224d2c7ef8e335b")
			]
		}
