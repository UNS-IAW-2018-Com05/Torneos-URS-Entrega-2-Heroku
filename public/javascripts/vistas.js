var datos;
var clubes;
$(function () {
    $.ajax({
        type: 'GET',
        url: "js/datos.json",
        dataType: "json",
        success: function (data) {
            datos=data;
            clubes = data['clubes'];
            agregarFechasEnBotones(ordenarFechas(data));
            mostrarClubes(clubes);
            agregarTablaPosiciones(ordenarPosicionesPorPuntosObtenidos(data['partido']));
            obtenerFechaMasReciente();
        }
    });
});

function obtenerFechaMasReciente() {
    var fechas = datos['fecha'];
    var index;
    var termine=false;
    var masReciente=99999999999;
    var fechaReciente;
    for(index=0;index<fechas.length && !termine;++index){
        var dia_aux = fechas[index].dias[1].split("/");
        var dia = new Date(parseInt(dia_aux[2]),parseInt(dia_aux[1]-1),parseInt(dia_aux[0]));
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
    mostrarFechaEnIndex(fechaReciente);
    $('#etiquetaUltimaFecha').append($("<h5></h5>").text("Fecha "+(fechaReciente+1)));
}

function mostrarFechaEnIndex(fecha){
    var content ="<thead class='thead-light'><tr><th scope='col'>Partido</th><th scope='col' style='text-align: right'>Local</th><th scope='col'>Visitante</th><th scope='col'>Resultado</th><th scope='col'>Estado</th></tr></thead>";
    content +="<tbody>";
    var fechas = datos['fecha'];
    var partidosFecha = fechas[fecha].partidos;
    var dataPartidos = datos['partido'];
    var index = parseInt(partidosFecha[0])-1;
    var limite = index + partidosFecha.length;
    for(index; index<limite;++index) {
        content += '<tr><td>' + (index+1) + '</td><td style="text-align: right">' + clubes[dataPartidos[index].local-1].nombre + ' <img HEIGHT="30" WIDTH="30" SRC='+clubes[dataPartidos[index].local-1].escudo+'></td><td><img HEIGHT="30" WIDTH="30" SRC='+clubes[dataPartidos[index].visitante-1].escudo+'> '+ clubes[dataPartidos[index].visitante-1].nombre + '</td><td>'+ dataPartidos[index].puntosLocal+" - "+dataPartidos[index].puntosVisitante+'</td><td>'+ dataPartidos[index].estado + '</td></tr>';
    }
    content += "</tbody>";

    $('#tablaIndex').append(content);
}



function ordenarFechas(data) {
    var index;
    var fecha = data['fecha'];
    var fechas = new Array();
    for (index = 0; index < fecha.length; ++index) {
        fechas[index]=index+1;
    }
    return fechas;
}

function agregarFechasEnBotones(fechas) {
    var index;
    for (index = 0; index < fechas.length; ++index) {
        agregarFechaIndividual(fechas[index]);
    }
}

function agregarFechaIndividual(fecha) {
    var row = $("<button></button>").attr({"tyoe":"button","class":"list-group-item list-group-item-action","id":fecha}).text("Fecha "+fecha);
    row.click(onActualizarPartidos);
    $("#lista").append(row);
}

function onActualizarPartidos(e) {
    $("#accordion").children().remove();
    var id = $(e.target).attr("id");
    $("#etiquetaPartidos").text("Partidos: Fecha "+id);
    var fecha = datos['fecha'][id-1];
    var partidosFecha = fecha.partidos;
    var dataPartidos = datos['partido'];
    var index = parseInt(partidosFecha[0])-1;
    var limite = index + partidosFecha.length;
    for(index; index<limite;++index){
        var carta = $("<div></div>").attr("class","card");
        var header = $("<div></div>").attr({"class":"card-header","id":"partido-"+index});
        var h5 = $("<h5></h5>").attr("class","mb-0");
        var boton = $("<button></button>").attr({"class":"btn btn-link","data-toggle":"collapse","data-target":"#collapse"+index,"aria-expanded":"false","aria-controls":"collapse"+index});
        boton.append(clubes[dataPartidos[index].local-1].nombre);
        boton.append(' <img HEIGHT="30" WIDTH="30" SRC='+clubes[dataPartidos[index].local-1].escudo+'>');
        boton.append(" - ");
        boton.append(' <img HEIGHT="30" WIDTH="30" SRC='+clubes[dataPartidos[index].visitante-1].escudo+'>');
        boton.append(clubes[dataPartidos[index].visitante-1].nombre);
        h5.append(boton);
        header.append(h5);
        carta.append(header);
        var inside = $("<div></div>").attr({"class":"collapse","id":"collapse"+index,"aria-labelledby":"partido-"+index,"data-parent":"#accordion"});
        var cuerpoCarta = $("<div></div>").attr("class","card-body");
        cuerpoCarta.append($("<h5></h5>").attr("class","card-title").text(clubes[dataPartidos[index].local-1].nombre+": "+dataPartidos[index].puntosLocal+" - "+clubes[dataPartidos[index].visitante-1].nombre+": "+dataPartidos[index].puntosVisitante));
        cuerpoCarta.append($("<p></p>").attr("class","card-text").text("Dia: "+dataPartidos[index].dia+" Hora: "+dataPartidos[index].hora+" Estado: "+dataPartidos[index].estado));
        inside.append(cuerpoCarta);
        carta.append(inside);
        $("#accordion").append(carta);
    }
}



var equipos;

function agregarTablaPosiciones(datos){
    var content ="<thead class='thead-light'><tr><th scope='col'>Posicion</th><th scope='col'>Equipo</th><th scope='col'>Puntos</th></tr></thead>";
    content +="<tbody>"
    var i;
    var j;
    for (j=1; j<datos.length;j++){
        var mayorPuntos=datos[j];
        var mayorIndice=j;
        for(i=1; i<datos.length; i++){

            if (mayorPuntos<datos[i]) {
                mayorIndice=i;
                mayorPuntos=datos[i];
            }
        }
        content += '<tr><td>' + j + '</td><td>'+ clubes[mayorIndice-1].nombre + '</td><td>'+mayorPuntos+'</td></tr>';
        datos[mayorIndice]=-1;
    }
    content += "</tbody>";

    $('#tablaPosiciones').append(content);
}

function ordenarPosicionesPorPuntosObtenidos(partidos){
    var index;
    equipos = new Array();

    for(index=1;index<clubes.length+1;++index){
        equipos[index]=0;
    }

    for(index=0;index<partidos.length;++index){
        if(partidos[index].estado=="finalizado") {
            var idClubLocal = partidos[index].local;
            var idClubVisitante = partidos[index].visitante;
            var puntosLocal = partidos[index].puntosLocal;
            var puntosVisitante = partidos[index].puntosVisitante;
            if (puntosLocal > puntosVisitante) {
                equipos[idClubLocal] += 4;
            }
            else {
                if (puntosLocal < puntosVisitante)
                    equipos[idClubVisitante] += 4;
                else {
                    equipos[idClubLocal] += 2;
                    equipos[idClubVisitante] += 2;
                }
            }
        }
    }
    return equipos;
}



function mostrarClubes(clubes) {
    var index;
    for (index = 0; index < clubes.length; ++index) {
        agregarClub(clubes[index]);
    }
}

function agregarClub(club) {
    var tarjeta = $("<div></div>").attr("class","col-sm-3");
    var carta = $("<div></div>").attr({"class":"card"});
    carta.append("<img class='card-im-top' src="+club.escudo+" alt='Card image cap'>");
    var cuerpo = $("<div></div>").attr("class","card-body");
    cuerpo.append($("<h5></h5>").attr("class","card-title").text(club.nombre));
    cuerpo.append($("<p></p>").attr("class","card-text").text(club.descripcion));
    cuerpo.append($("<a></a>").attr({"class":"btn btn-primary","href":club.link,"target":"_blank"}).text("Sitio Web"));
    carta.append(cuerpo);
    tarjeta.append(carta);
    $("#cartas").append(tarjeta);
}



$(document).ready(function(){

    if(localStorage.getItem("main")=="true"){
        $("#index").show();
        $("#filaFechas").hide();
        $("#tabla").hide();
        $("#cartas").hide();
        $("#image").show();
        $("#sitioEnConstruccion").hide();
    }
    if(localStorage.getItem("fechas")=="true"){
        $("#index").hide();
        $("#filaFechas").show();
        $("#tabla").hide();
        $("#cartas").hide();
        $("#image").hide();
        $("#sitioEnConstruccion").hide();
    }
    if(localStorage.getItem("posiciones")=="true"){
        $("#index").hide();
        $("#filaFechas").hide();
        $("#tabla").show();
        $("#cartas").hide();
        $("#image").hide();
        $("#sitioEnConstruccion").hide();
    }
    if(localStorage.getItem("clubes")=="true"){
        $("#index").hide();
        $("#filaFechas").hide();
        $("#tabla").hide();
        $("#cartas").show();
        $("#image").hide();
        $("#sitioEnConstruccion").hide();
    }

    if(localStorage.getItem("enConstruccion")=="true"){
        $("#index").hide();
        $("#filaFechas").hide();
        $("#tabla").hide();
        $("#cartas").hide();
        $("#image").hide();
        $("#sitioEnConstruccion").show();
    }

    if(localStorage.getItem("main")!="true" && localStorage.getItem("fechas")!="true" && localStorage.getItem("posiciones")!="true"
        && localStorage.getItem("clubes")!="true" && localStorage.getItem("enConstruccion")!="true") {
        $("#index").show();
        $("#filaFechas").hide();
        $("#tabla").hide();
        $("#cartas").hide();
        $("#image").show();
        $("#sitioEnConstruccion").hide();
    }

    if(localStorage.getItem("estilo2")=="true"){
        $("#estilo2").prop('disabled', false);
        $("#navbar").attr("class","navbar fixed-top");
        $("#tablaIndex").attr("class","table table-striped table-dark");
        $("#tablaIndex:first-child").attr("class","thead");
    }

    $("#dropFechas").on( "click", function() {
        $("#index").hide();
        $("#filaFechas").show();
        $("#tabla").hide();
        $("#cartas").hide();
        $("#image").hide();
        $("#sitioEnConstruccion").hide();

        localStorage.setItem("main", "false");
        localStorage.setItem("fechas", "true");
        localStorage.setItem("posiciones", "false");
        localStorage.setItem("clubes", "false");
        localStorage.setItem("enConstruccion","false");

    });

    $("#dropPosiciones").on( "click", function() {
        $("#index").hide();
        $("#filaFechas").hide();
        $("#tabla").show();
        $("#cartas").hide();
        $("#image").hide();
        $("#sitioEnConstruccion").hide();

        localStorage.setItem("main", "false");
        localStorage.setItem("fechas", "false");
        localStorage.setItem("posiciones", "true");
        localStorage.setItem("clubes", "false");
        localStorage.setItem("enConstruccion","false");

    });

    $("#botonClubes").on( "click", function() {
        $("#index").hide();
        $("#filaFechas").hide();
        $("#tabla").hide();
        $("#cartas").show();
        $("#image").hide();
        $("#sitioEnConstruccion").hide();

        localStorage.setItem("main", "false");
        localStorage.setItem("fechas", "false");
        localStorage.setItem("posiciones", "false");
        localStorage.setItem("clubes", "true");
        localStorage.setItem("enConstruccion","false");

    });

    $("#botonInicio").on( "click", function() {
        $("#index").show();
        $("#filaFechas").hide();
        $("#tabla").hide();
        $("#cartas").hide();
        $("#image").show();
        $("#sitioEnConstruccion").hide();

        localStorage.setItem("main", "true");
        localStorage.setItem("fechas", "false");
        localStorage.setItem("posiciones", "false");
        localStorage.setItem("clubes", "false");
        localStorage.setItem("enConstruccion","false");

    });

    $("#botonNoticias").on( "click", sitioEnConstruccion);
    $("#dropGoleadores").on( "click", sitioEnConstruccion);

});

function sitioEnConstruccion(){
    $("#index").hide();
    $("#filaFechas").hide();
    $("#tabla").hide();
    $("#cartas").hide();
    $("#image").hide();
    $("#sitioEnConstruccion").show();

    localStorage.setItem("main", "true");
    localStorage.setItem("fechas", "false");
    localStorage.setItem("posiciones", "false");
    localStorage.setItem("clubes", "false");
    localStorage.setItem("enConstruccion","true");
}