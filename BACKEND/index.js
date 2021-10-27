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
    var edad = utils.calcularYearNacimiento(req.body.edad);
    var altura = req.body.altura;
    var pierna = req.body.pierna;
    var nacionalidad = req.body.nacionalidad;
    var valor = req.body.valor * 1000000;
    var sueldo = req.body.sueldo * 1000;

    var finalizacion = req.body.finalizacion;
    var regates = req.body.regates;
    var remate = req.body.remate;
    var tiroFalta = req.body.tiroFalta;
    var pasesCortos = req.body.pasesCortos;
    var pasesLargos = req.body.pasesLargos;
    var control = req.body.control;
    var disparoLejano = req.body.disparoLejano;
    var marcaje = req.body.disparoLejano;

    var agresividad = req.body.agresividad;
    var posicionamiento = req.body.posicionamiento;
    var penaltis = req.body.penaltis;
    var compostura = req.body.compostura;

    var aceleracion = req.body.aceleracion;
    var velocidad = req.body.velocidad;
    var agilidad = req.body.agilidad;
    var salto = req.body.salto;
    var resistencia = req.body.resistencia;

    var porteroSalto = req.body.porteroSalto;
    var porteroParada = req.body.porteroParada;
    var porteroGolpeo = req.body.porteroGolpeo;
    var porteroPosicion = req.body.porteroPosicion;
    var porteroReflejos = req.body.porteroReflejos;

    // CREAMOS LA PETICIÓN

    var query = 'MATCH (j:Jugador)-[:JUEGA_COMO]->(p:Posicion {posicion: \''+posicion+'\'})';

    query += 'WHERE ';

    //EDAD
    query += 'datetime(j.fechaNacimiento) > datetime(\"'+edad+'\") ';

    // ALTURA
    query += 'AND j.altura >= '+altura+' ';

    // PIERNA
    if(pierna != null) {
        query += 'AND j.pierna = \''+pierna+ '\' ';
    }

    // NACIONALIDAD
    if(nacionalidad != null) {
        query += 'AND j.nacionalidad = \''+nacionalidad+ '\' ';
    }

    // VALOR DE MERCADO
    query += ' AND j.valor <= '+valor+' ';

    // SUELDO
    query += ' AND j.sueldo <= '+sueldo+' ';

    //
    //query += ' AND j.control >= '+controlBalon;

    // PORTERO
    query += ' AND j.porteroSalto >= ' +porteroSalto;
    query += ' AND j.porteroParada >= ' +porteroParada;
    query += ' AND j.porteroGolpeo >= ' +porteroGolpeo;
    query += ' AND j.porteroPosicion >= ' +porteroPosicion;
    query += ' AND j.porteroReflejos >='  +porteroReflejos;

    // MENTALIDAD
    query += ' AND j.agresividad >= ' +agresividad;
    query += ' AND j.posicionamiento >= ' +posicionamiento;
    query += ' AND j.penaltis >= ' +penaltis;
    query += ' AND j.compostura >= ' +compostura;

    // FÍSICO
    query += ' AND j.aceleracion >= ' +aceleracion;
    query += ' AND j.velocidad >= ' +velocidad;
    query += ' AND j.agilidad >= ' +agilidad;
    query += ' AND j.salto >= ' +salto;
    query += ' AND j.resistencia >= ' +resistencia;

    // OTROS
    query += ' AND j.finalizacion >= ' +finalizacion;
    query += ' AND j.regates >= ' +regates;
    query += ' AND j.remate >= ' +remate;
    query += ' AND j.tiroFalta >= ' +tiroFalta;
    query += ' AND j.pasesCortos >= ' +pasesCortos;
    query += ' AND j.pasesLargos >= ' +pasesLargos;
    query += ' AND j.control >= ' +control;
    query += ' AND j.disparoLejano >= ' +disparoLejano;
    query += ' AND j.marcaje >= ' +marcaje;

    // DEVOLVER LOS JUGADORES
    query += ' RETURN j;';

    // PROCESAMOS LA PETICIÓN
    neo4j.run(query)

    .then(results => {

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
                edad: utils.calcularEdad(record._fields[0].properties.fechaNacimiento),
                altura: record._fields[0].properties.altura,
                pierna: record._fields[0].properties.pierna,
                equipo: record._fields[0].properties.equipo,
                nacionalidad: record._fields[0].properties.nacionalidad,
                valor: utils.numeroConSeparador(record._fields[0].properties.valor) + '€',
                sueldo: utils.numeroConSeparador(record._fields[0].properties.sueldo) + '€',
                clausula: utils.numeroConSeparador(record._fields[0].properties.clausula) + '€',
                contrato: record._fields[0].properties.contrato,
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

    // OBTENEMOS LOS VALORES DE LA PETICIÓN

    var posicion = req.body.posicion;
    var usuario = req.body.usuario;

    // CREAMOS LA PETICIÓN
    var query = 'MATCH (j:Jugador)-[:JUEGA_COMO]->(p:Posicion {posicion: \''+posicion+'\'})';

    // COMPROBAMOS QUE HAYA UNA RELACIÓN DE QUE EL USUARIO YA HA VISITADO EL PERFIL DEL JUGADOR
    query += 'MATCH (u:Usuario)-[v:VISITA_PERFIL]->(j) WHERE u.nombre = \''+usuario+'\' ';

    // ORDENAMOS SEGÚN SE HA VISITADO MÁS VECES
    query += 'RETURN j ORDER BY v.veces DESC LIMIT 1;'

    // PROCESAMOS LA PETICIÓN
    neo4j.run(query)

    .then(results => {

        // ARRAY QUE VAMOS A DEVOLVER CON LOS JUGADORES OBTENIDOS
        var jugadores = [];

        // SI NO HAY NINGUNA COINCIDENCIA LO DEVUELVE VACIO
        if(results.records.length == 0) {
            res.json(jugadores);
            return;
        }

        // SI HAY ALGUNA COINCIDENCIA VAMOS A BUSCAR JUGADORES SIMILARES

        // HACER

        res.json(jugadores);
    })
    .catch(error => {
        console.log(error);
        neo4j.close();
    });
});

// DIRECCIÓN DONDE SE DEVOLVERÁ INFORMACIÓN MÁS ESPECÍFICA DEL JUGADOR
app.post('/infoJugador', (req, res) => {

    // OBTENEMOS LOS VALORES DE LA PETICIÓN
    var jugador = req.body.nombre;
    var usuario = req.body.usuario;

    // BUSCAMOS EL USUARIO
    var queryVisitaPerfil = 'MATCH (u:Usuario { nombre: \''+usuario+'\' }) ';

    // BUSCAMOS EL JUGADOR
    queryVisitaPerfil += 'MATCH (j:Jugador { nombre: \''+jugador+'\' }) ';

    // CREAMOS RELACIÓN
    queryVisitaPerfil += 'MERGE (u)-[v:VISITA_PERFIL]->(j) ';

    // CREA LA RELACIÓN SI NO EXISTE
    queryVisitaPerfil += 'ON CREATE SET v.veces = 1 ';
    
    // ACTUALIZA LA RELACIÓN
    queryVisitaPerfil += 'ON MATCH SET v.veces = v.veces + 1;';

    // PROCESAMOS LA PETICIÓN
    neo4j.run(queryVisitaPerfil)
    
    .then(results => {

        // CONEXIÓN PARA VISITAR EL PERFIL DEL JUGADOR
        var queryVerPerfil = 'MATCH (j:Jugador { nombre: \''+jugador+'\'})-[:JUEGA_COMO]->(p:Posicion) RETURN j,p;';
        
        // PROCESAMOS LA PETICIÓN
        neo4j.run(queryVerPerfil)

        .then(results => {

            var edad = utils.calcularEdad(results.records[0]._fields[0].properties.fechaNacimiento);
            var habilidad = results.records[0]._fields[0].properties.general;
            var potencial = results.records[0]._fields[0].properties.potencial;

            var recomendar = '';

            if(potencial > habilidad && edad < 25) {
                recomendar = 'Potencial de futuro';

            } else if(edad >= 30) {
                recomendar = 'Jugador experimentado';
            }

            // TODA LA INFORMACIÓN DEL JUGADOR

            var jugador = {

                // CARACTERÍSTICAS GENERALES DE LOS JUGADORES

                nombre: results.records[0]._fields[0].properties.nombre,
                fechaNacimiento: results.records[0]._fields[0].properties.fechaNacimiento,
                edad: edad,
                altura: results.records[0]._fields[0].properties.altura,
                pierna: results.records[0]._fields[0].properties.pierna,
                equipo: results.records[0]._fields[0].properties.equipo,
                nacionalidad: results.records[0]._fields[0].properties.nacionalidad,
                valor: utils.numeroConSeparador(results.records[0]._fields[0].properties.valor) + '€',
                sueldo: utils.numeroConSeparador(results.records[0]._fields[0].properties.sueldo) + '€',
                clausula: utils.numeroConSeparador(results.records[0]._fields[0].properties.clausula) + '€',
                contrato: results.records[0]._fields[0].properties.contrato,
                habilidad: habilidad,
                potencial: potencial,
                recomendacion: recomendar,

                // POSICIONES DEL JUGADOR

                posiciones:[],

                // ATRIBUTOS ESPECÍFICOS

                finalizacion: results.records[0]._fields[0].properties.finalizacion,
                regates: results.records[0]._fields[0].properties.regates,
                remate: results.records[0]._fields[0].properties.remate,
                tiroFalta: results.records[0]._fields[0].properties.tiroFalta,
                pasesCortos: results.records[0]._fields[0].properties.pasesCortos,
                pasesLargos: results.records[0]._fields[0].properties.pasesLargos,
                control: results.records[0]._fields[0].properties.control,
                disparoLejano: results.records[0]._fields[0].properties.disparoLejano,
                marcaje: results.records[0]._fields[0].properties.marcaje,

                aceleracion: results.records[0]._fields[0].properties.aceleracion,
                velocidad: results.records[0]._fields[0].properties.velocidad,
                agilidad: results.records[0]._fields[0].properties.agilidad,
                salto: results.records[0]._fields[0].properties.salto,
                resistencia: results.records[0]._fields[0].properties.resistencia,

                agresividad: results.records[0]._fields[0].properties.agresividad,
                posicionamiento: results.records[0]._fields[0].properties.posicionamiento,
                penaltis: results.records[0]._fields[0].properties.penaltis,
                compostura: results.records[0]._fields[0].properties.compostura,

                poteroSalto: results.records[0]._fields[0].properties.porteroSalto,
                porteroParada: results.records[0]._fields[0].properties.porteroParada, 
                poteroGolpeo: results.records[0]._fields[0].properties.porteroGolpeo,
                porteroPosicion: results.records[0]._fields[0].properties.porteroPosicion,
                porteroReflejos: results.records[0]._fields[0].properties.porteroReflejos
            };

            // AÑADIMOS LAS POSICIONES QUE JUEGA
            var posLen = results.records.length;
            for(let i = 0; i < posLen; i++) {
                jugador.posiciones[i] = results.records[i]._fields[1].properties.posicion;
            }
            console.log(jugador);

            // ENVIAMOS LA INFORMACIÓN
            res.json(jugador);
        })
        .catch(error => {
            console.log(error);
            neo4j.close();
        });
    })
    .catch(error => {
        console.log(error);
        neo4j.close();
    });;
});

// DIRECCIÓN PARA ELIMINAR TODAS TUS BÚSQUEDAS Y FAVORITOS
app.post('/borrarBusquedas', (req, res) => {

    // OBTENEMOS LOS VALORES DE LA PETICIÓN
    var usuario = req.body.usuario;

    // BUSCAMOS LA RELACIÓN DEL USUARIO CON LOS PERFILES DE LOS JUGADORES
    var query = 'MATCH (u:Usuario { nombre: \''+usuario+'\' })-[v:VISITA_PERFIL]->(j:Jugador) ';

    // BORRAMOS ESAS RELACIONES
    query += 'DELETE v '

    // SEGUIMOS USANDO EL USUARIO
    query += 'WITH u ';

    // BUSCAMOS LA RELACIÓN DE FAVORITOS
    query += 'MATCH (u)-[l:LIKES]->(j:Jugador) ';

    // BORRAMOS ESAS RELACIONES
    query += 'DELETE l;'

    // PROCESAMOS LA PETICIÓN
    neo4j.run(query)

    .then(results => {
        res.json( { correcto: true } );
    })
    .catch(error => {
        console.log(error);
        neo4j.close();
    });
});

// DIRECCIÓN CUANDO UN USUARIO MARCA COMO FAVORITO A UN JUGADOR
app.post('/addFavorito', (req, res) => {

    // OBTENEMOS LOS VALORES DE LA PETICIÓN
    var usuario = req.body.usuario;
    var jugador = req.body.jugador;

    // BUSCAMOS EL USUARIO
    var query = 'MATCH (u:Usuario { nombre: \''+usuario+'\' }) ';

    // BUSCAMOS EL JUGADOR
    query += 'MATCH (j:Jugador { nombre: \''+jugador+'\' }) ';

    // CREAMOS RELACIÓN
    query += 'MERGE (u)-[l:LIKES]->(j) RETURN l;';

    // PROCESAMOS LA PETICIÓN
    neo4j.run(query)

    .then(results => {
        res.json( { correcto: true } );
    })
    .catch(error => {
        console.log(error);
        neo4j.close();
    });
});

// INICIAR EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Servidor abierto en puerto', app.get('port'));
});