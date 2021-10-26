const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
    
    "bolt://localhost:7687", 
    neo4j.auth.basic("neo4j", "abcdabcd"),
    { disableLosslessIntegers: true } // ELIMINA LA OPCIÓN LOW/HIGH DE LOS ENTEROS
);

// Abrimos una sesión
var session = driver.session(); 

// Exportamos la conexión
module.exports = session;