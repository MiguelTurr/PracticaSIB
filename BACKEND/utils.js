
// FUNCIÓN QUE CALCULA LA EDAD SEGÚN LA FECHA DE NACIMIENTO
function calcularEdad(fechaNacimiento) {

    var hoy = new Date();
    var birthday = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - birthday.getFullYear();
    var m = hoy.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < birthday.getDate())) {
        edad--;
    }

    return edad;
}

function calcularYearNacimiento(edad) {

}

// EXPORTAMOS LAS FUNCIONES PARA PODER USARLAS EN OTRO ARCHIVO
module.exports = {
    calcularEdad,
    calcularYearNacimiento
}