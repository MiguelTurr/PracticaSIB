const express = require('express');
const app = express();

const cors = require('cors');

// Funciones útiles

const utils = require('./utils.js');

// NEO4J

const neo4j = require('./conexionDB.js');

// Configuraciones

app.set('port', 3000);

// Middlewares

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors());

//

app.get('', (req, res) => {
    res.send("Hola");
});

// DIRECCIÓN PARA BUSCAR UN JUGADOR SEGÚN LA SELECCIÓN EN LOS FILTROS
app.post('/buscarJugador', (req, res) => {

    // LEEMOS LOS VALORES DE LA PETICIÓN

    var posicion = req.body.posicion;
    var edad = req.body.edad;
    var altura = req.body.altura;
    var pierna = req.body.pierna;
    var nacionalidad = req.body.nacionalidad;
    //var valor = req.body.valor;
    //var sueldo = req.body.sueldo;

    var controlBalon = req.body.controlBalon;

    // CREAMOS LA PETICIÓN

    var query = 'MATCH (j:Jugador)-[:JUEGA_COMO]->(p:Posicion {posicion: \''+posicion+'\'})';

    query += 'WHERE ';

    //EDAD
    //query += 'j.edad <= '+edad;

    // ALTURA
    query += 'j.altura >= '+altura+' ';

    // PIERNA
    if(pierna != null) {
        query += 'AND j.pierna = \''+pierna+ '\' ';
    }

    // NACIONALIDAD
    if(nacionalidad != null) {
        query += 'AND j.nacionalidad = \''+nacionalidad+ '\' ';
    }

    // VALOR DE MERCADO

    // SUELDO

    //query += ' AND j.control >= '+controlBalon;

    query += ' RETURN j;';

    // PROCESAMOS LA PETICIÓN
    neo4j.run(query)

    .then(async results => {

        // ARRAY QUE VAMOS A DEVOLVER CON LOS JUGADORES OBTENIDOS
        var jugadores = [];

        // SI NO HAY NINGUNA COINCIDENCIA LO DEVUELVE VACIO
        if(results.records.length == 0) {
            res.json(jugadores);
            return;
        }

        // SI HAY ALGUNA COINCIDENCIA VA RELENANDO EL ARRAY CON LOS DATOS QUE QUEREMOS MOSTRAR
        results.records.forEach(function(record) { 

            var jugador = {

                // CARACTERÍSTICAS GENERALES DE LOS JUGADORES

                nombre: record._fields[0].properties.nombre,
                //edad: record._fields[0].properties.edad,
                altura: record._fields[0].properties.altura,
                pierna: record._fields[0].properties.pierna,
                nacionalidad: record._fields[0].properties.nacionalidad,
                valor: record._fields[0].properties.valor + '€',
                sueldo: record._fields[0].properties.sueldo + '€',
                habilidad: record._fields[0].properties.general,
                potencial: record._fields[0].properties.potencial
            };
            jugadores.push(jugador);
        });

        // DEVUELVE EL ARRAY PARA MOSTRARLO
        res.json(jugadores);
    })
    .catch(error => {
        console.log(error);
        neo4j.close();
    });
});

// DIRECCIÓN PARA RECOMENDAR JUGADORES SIMILARES SEGÚN BÚSQUEDAS ANTERIORES
app.post('/recomendarJugadores', (req, res) => {

    // CREAMOS LA PETICIÓN

    var query = 'MATCH (j:Jugador)-[:JUEGA_COMO]->(p:Posicion {posicion: \''+posicion+'\'})';

    // COMPROBAMOS QUE HAYA UNA RELACIÓN DE QUE EL USUARIO YA HA VISITADO EL PERFIL DEL JUGADOR
    query += 'MATCH (u:Usuario)-[:HA_VISITADO]->(j})';
});

// DIRECCIÓN DONDE SE DEVOLVERÁ INFORMACIÓN MÁS ESPECÍFICA DEL JUGADOR
app.post('/infoJugador', (req, res) => {

});

// DIRECCIÓN PARA ELIMINAR TODAS TUS BÚSQUEDAS ANTERIORES

app.post('/borrarBusquedas', (req, res) => {

});

// INICIAR EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Servidor abierto en puerto', app.get('port'));
});