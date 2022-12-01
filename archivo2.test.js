const {

    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,

// EJEMPLOS
}= require ("./index2.js");

describe('multiplica(x, y)',function(){
    it ("Debe multiplicarse", function(){
        expect(multiplica(5, 3)).toBe(15)
    
        
    });
})


describe('divide(x, y)',function(){
    it ("Debe dividirse", function(){
        expect(divide(10, 2)).toBe(5)
      
        
    });
})

describe('sonIguales(x, y)',function(){
    it ("Debe ser iguales", function(){
        expect(sonIguales(10, 10)).toBe(true)
      
        
    });
})



//LONGITUD 

describe('tienenMismaLongitud(x, y)',function(){
    it ("Misma longitud", function(){
        expect(tienenMismaLongitud("HOLA", "ROMA")).toBe(true)
        expect(tienenMismaLongitud("HOLAS", "ROMA")).toBe(false)
    });
})


describe('menosQueNoventa(num)',function(){
    it ("Debe devolver true mayor que 50", function(){
        expect(menosQueNoventa(89)).toBe(true)
        expect(menosQueNoventa(95)).toBe(false)
    });
})



describe('mayorQueCincuenta(num)',function(){
    it ("Debe devolver true mayor que 50", function(){
        expect(mayorQueCincuenta(52)).toBe(true)
        expect(mayorQueCincuenta(10)).toBe(false)
    });
})




describe('obtenerResto(x, y)',function(){
    it ("Obtener resto", function(){
        expect(obtenerResto(21,5)).toBe(1)
        expect(obtenerResto(60,7)).toBe(4)
    });
})


describe('esPar(num)',function(){
    it ("Deberia ser Par", function(){
        expect(esPar(2)).toBe(true)
        expect(esPar(3)).toBe(false)
    });
})

describe('esImpar(num)',function(){
    it ("Deberia ser Impar", function(){
        expect(esImpar(3)).toBe(true)
        expect(esImpar(2)).toBe(false)
    });
})


describe('elevar(num,exponent)',function(){
    it ("Debe elevar al exponente", function(){
        expect(elevar(2, 3)).toBe(8)
        expect(elevar(4,3)).toBe(64)
    });
})


describe('redondearNumero(num,exponent)',function(){
    it ("Debe redondear", function(){
        expect(redondearNumero(2.8)).toBe(3)
        expect(redondearNumero(4.9)).toBe(5)
    });
})


describe('redondearHaciaArriba(num,exponent)',function(){
    it ("Debe redondear hacia arriba", function(){
        expect(redondearHaciaArriba(4.6)).toBe(5)
     
    });
})


describe('numeroRandom()',function(){
    it ("Debe salirnumero random", function(){
        expect(typeof numeroRandom()).toBe('number')
        expect( numeroRandom()).toBeGreaterThanOrEqual(0)
        expect( numeroRandom()).toBeLessThan(1)
    });
})

describe('esPositivo(numero)',function(){
    it("Deberia dar resultado si el numero es positivo", function(){
        expect(esPositivo(3)).toBe(1);
        expect(esPositivo(-2)).toBe(-1);
        expect(esPositivo(0)).toBe(0);

    });
});

describe('combinarNombres(nombre,apellido)',function(){
    it("Deberia concatenar los dos strings", function(){
        expect(combinarNombres("rodrigo","bautista")).toBe("rodrigo bautista");
        expect(combinarNombres("cesar","lingan")).toBe("cesar lingan");

    });
});
describe('obtenerSaludo(nombre)',function(){
    it("Deberia mostrar el saludo", function(){
        expect(obtenerSaludo("Martin")).toBe("HolaMartin!");
        expect(obtenerSaludo("Fabiana")).toBe("HolaFabiana!");

    });
});

//obtener área del rectangulo
describe('obtenerAreaRectangulo(alto, ancho)', function() {
    it("Deberia devolver el área del rectangulo", function(){
        expect(obtenerAreaRectangulo(2,3)).toBe(6);
        //expect(obtenerAreaRectangulo(2,3)).toBe(8);
    })
})

//retornar el perimetro de un cuadrado
describe('retornarPerimetro(lado)', function() {
    it("Deberia devolver el perimetro de un cuadrado", function(){
        expect(retornarPerimetro(3)).toBe(12);
        //expect(retornarPerimetro(3)).toBe(10);
    })
})

//de Euro a Dolar 
describe('deEuroAdolar(euro)', function() {
    it("Deberia devolver la equivalencia en dolares", function(){
        expect(deEuroAdolar(1)).toBe("1.20");
        //expect(deEuroAdolar(3)).toBe(3);
    })
})


