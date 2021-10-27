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

// FUNCIÓN QUE DEVUELVE EL 1 DE ENERO DEL AÑO SEGÚN LA EDAD QUE SE HAYA INTRODUCIDO
function calcularYearNacimiento(edad) {
    var hoy = new Date();
    var year = hoy.getFullYear() - edad;
    return `${year}-01-01`;
}

// FUNCIÓN QUE DEVUELVE EL NÚMERO CON SEPARACIÓN ENTRE LOS MILES
function numeroConSeparador(numero) {
    return new Intl.NumberFormat("de-DE").format(numero);
}

// EXPORTAMOS LAS FUNCIONES PARA PODER USARLAS EN OTRO ARCHIVO
module.exports = {
    calcularEdad,
    calcularYearNacimiento,
    numeroConSeparador
}