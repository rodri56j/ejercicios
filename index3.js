// ACTIVIDAD 03
function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "mandarin"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!"
    // Tu código:
    switch (idioma) {
        case "aleman":
            return "Guten Tag!";
            break;
        case "mandarin":
            return "mandarin";
            break;
        case "ingles":
            return "Hello!";
            break;
        default:
            return "Hola!"
            break;
    }
}
function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    switch (color) {
        case "blue":
            return "This is blue";
            break;
        case "red":
            return "This is red";
            break;
        case "green":
            return "This is green";
            break;
        case "orange":
            return "This is orange";
            break;
        default:
            return "Color not found";
            break;
    }
}
function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else {
        return false;
    }
}
function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos.
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar elnuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
    // 
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        return "Error";
    } else if (num3 > num2 && num3 > num1) {
        return num3 + 1;
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        return "Hay negativos";
    } else if (num1 > num2 && num1 > num3 && num1 > 0) {
        return "Número 1 es mayor y positivo";
    } else {
        return false;
    }
}
function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if (numero == 0 || numero == 1) {
        return false;
    }
    for (x = 2; x < numero / 2; x++) {
        if (numero % x === 0)
            return false;
    }
    return true;
}
function esVerdadero(valor) {
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if (valor === true) {
        return "Soy verdadero";
    } else if (valor === false) {
        return "Soy falso"
    } else {
        return "Error"
    }
}
function tablaDelSeis() {
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del6 en orden creciente.
    //Escribe tu código aquí
    let arrayTablaDelSeis = [];
    for (i = 0; i <= 10; i++) {
        arrayTablaDelSeis.push(6 * i);
    } return arrayTablaDelSeis;
}
function tieneTresDigitos(numero) {
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario,retorna false.
    //Escribe tu código aquí
    if (numero >= -999 && numero <= -100) {
        return "Tiene 3 digitos"
    } else if (numero >= 100 && numero <= 999) {
        return "Tiene 3 digitos"
    } else {
        return false;
    }

}
function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hastaun límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    i = 0;
    do {
        numero += 5;
        i++;
    } while (i < 8);
    return numero;
}

// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
    saludo,
    colors,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
};