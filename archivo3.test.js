const {
    saludo,
    colors,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
} = require("./index3.js");

//idioma
describe('saludo(idioma)', function () {
    it("deberia devolver un saludo", function () {
        expect(saludo("ingles")).toBe('Hello!');
        expect(saludo("español")).toBe('Hola!');
        expect(saludo("mandarin")).toBe('mandarin');
        //expect(saludo("español")).toBe('hola');
    });
});

//color
describe('colors(color)', function () {
    it("deberia devolver un string del color seleccionado", function () {
        expect(colors("red")).toBe('This is red');
        expect(colors("negro")).toBe('Color not found');
        //expect(colors("blue")).toBe('Color not found');
    });
});

// numeros fizzBuzz divisibles 
describe('fizzBuzz(numero)', function () {
    it("deberia devolver si es divisible entre 3 o 5 o ambos", function () {
        expect(fizzBuzz(22)).toBe(false);
        expect(fizzBuzz(20)).toBe('buzz');
        expect(fizzBuzz(9)).toBe('fizz');
        expect(fizzBuzz(15)).toBe('fizzbuzz');
        //expect(fizzBuzz(20)).toBe('fizzbuzz');
    });
});

// operadores lógicos  
describe('operadoresLogicos(num1, num2, num3)', function () {
    it("Debería devolver si es negativo, si el número 1 es mayor y positivo", function () {
        expect(operadoresLogicos(22,2,8)).toBe('Número 1 es mayor y positivo');
        expect(operadoresLogicos(22,-2,8)).toBe('Hay negativos'); 
        expect(operadoresLogicos(22,-2,89)).toBe(90); 
        expect(operadoresLogicos(22,0,22)).toBe('Error');   
    });
});

// Es primo 
describe('esPrimo(numero)', function () {
    it("Debería devolver si el número es primo", function () {
        expect(esPrimo(12)).toBe(false); 
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(7)).toBe(true);    
    });
});

//Es verdadero
describe('esVerdadero(valor)',function(){
    it("Deveria devolver si es verdadero o falso", function(){
        expect(esVerdadero(false)).toBe('Soy falso');
        expect(esVerdadero(true)).toBe('Soy verdadero');
        expect(esVerdadero("verdad")).toBe('Error');
    });
});

//Tabla del seis 
describe('tablaDelSeis', function () {
    it("Deberia devolver un array de la tabla del seis", function () {
        expect(tablaDelSeis()).toEqual([0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
    });
});

//Tiene 3 dígitos
describe('tieneTresDigitos(numero)',function(){
    it("Deveria devolver si el numero tiene 3 digitos", function(){
        expect(tieneTresDigitos(124)).toBe('Tiene 3 digitos');
        expect(tieneTresDigitos(-124)).toBe('Tiene 3 digitos');
        expect(tieneTresDigitos(-24)).toBe(false);
        expect(tieneTresDigitos(24)).toBe(false);
        expect(tieneTresDigitos(242444)).toBe(false);
    });
});

//Do While
describe('doWhile(numero)',function(){
    it("Deveria devolver el valor insertado en 5 hasta un limite de 8 repeticiones", function(){
        expect(doWhile(0)).toBe(40);
        expect(doWhile(5)).toBe(45);
        expect(doWhile(10)).toBe(50);
    });
});