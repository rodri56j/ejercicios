const {
    edad,nombre,nuevaString,nuevoNum,nuevoBool,nuevaResta,nuevaMultiplicacion,nuevoModulo,

// EJEMPLOS
}= require ("./index.js");

describe('edad',function(){
    it ("Debe ser un número", function(){
        expect(typeof edad).toBe('number')
    }
    );
})


describe('nombre',function(){
    it ("Debe ser un nombre", function(){
        expect(typeof nombre).toBe('string')
    }
    );
})


// EJERCICIO 1 

describe('nuevaString',function(){
    it ("Debe ser un string", function(){
        expect(typeof nuevaString).toBe('string')
    }
    );
})

// EJERCICIOS 2 

describe('nuevoNum',function(){
    it ("Debe ser un numero", function(){
        expect(typeof nuevoNum).toBe('number')
    }
    );
})

//EJERCICIO 3


describe('nuevoBool',function(){
    it ("Debe ser un numero", function(){
        expect(typeof nuevoBool).toBe('boolean')
    }
    );
})


//EJERCICIO 4


describe('nuevaResta',function(){
    it ("Debe Restarse " , function(){
        expect(typeof nuevaResta).toBe('boolean')
    }
    );
})

//EJERCICIO 5

describe('nuevaMultiplicacion',function(){
    it ("Debe Multiplicarse " , function(){
        expect(typeof nuevaMultiplicacion).toBe('boolean')
    }
    );
})


//EJERCICIO 6

describe('nuevoModulo',function(){
    it ("Sacar el modulo " , function(){
        expect(typeof nuevoModulo).toBe('boolean')
    }
    );
})




