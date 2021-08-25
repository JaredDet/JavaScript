//funciones

/*
En JavaScript, un objeto es definido como un JSON,
es decir, atributo : valor;
 */
const persona = {
    nombre: "Javier",
    edad: 21,
}

/*En JavaScript, no hace falta tener que definir el tipo de dato
que requiere como argumento una función. No obstante, sí es posible
definir un valor por defecto si no se entrega nada.
 */

function saludar(nombre = "", edad = -1) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

saludar();
saludar(23, "Nombre");

/*
   En JavaScript, se puede recorrer un objeto
   primitivo con un for - in
 */

{
    const javier = {
        nombre: "Javier",
        apellido: "Márquez",
        edad: 21
    };

    /*
        Muestra las llaves
     */
    for (const x in javier) {
        console.log(x);
    }

    /*
        Muestra los valores
     */
    for (const x in javier) {
        console.log(javier[x]);
    }

    /*
        Muestra las llaves y los valores
     */
    for (const x in javier) {
        console.log(`${x}: ${javier[x]}`);
    }

    /*
        Para recorrer objetos iterables
        se recomienda utilizar for of
     */
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    for (const x of numeros) {
        console.log(x);
    }
    let nombre = "Juan";

    for (const x of nombre) {
        console.log(x);
    }

    /*
        Se utiliza break para detener un bucle;
        mientras que, se utiliza continue para saltar
        una iteración
     */

    {
        let numeros = [1, 2, 3, 4, 0, 5, 6, 7, 8];

        for (const x of numeros) {
            if (x === 0) {
                break;
            }
            console.log(`${5 % x}\n`);
        }

        for (const x of numeros) {
            if (x === 0) {
                continue;
            }
            console.log(`\n${5 % x}`);
        }
    }
}

/*
    Para expandir la cantidad de parámetros de una función
    hacia la izquierda se utilizan los parámetros rest
 */

{

    let suma = function sumar(a, b) {
        return a + b;
    };
    console.log(suma(2, 3));

    function sumar(a, ...b) {
        let resultado = a;

        b.map(n => resultado += n)
        return resultado;
    }

    console.log(`\n${sumar(5, 2, 7, 10, 15)}`);
}
/*
    Para distribuir los elementos
    de un objeto o un array en una
    variable, constante o función se
    utiliza el operador spread.
 */

{
    const arreglo1 = [1, 2, 3, 4, 5],
        arreglo2 = [6, 7, 8, 9, 0],
        arreglo3 = [arreglo1, arreglo2];
    console.log(arreglo3);
    console.log(arreglo3.length);

    /*
        Si nos fijamos, el arreglo3 es un array
        que se compone de dos arrays.
        ¿Pero y si solo quisiéramos que fuera
        un solo array que combinara los
        valores de arreglo1 y arreglo2?
     */

    {
        const arreglo3 = [...arreglo1, ...arreglo2];
        console.log(arreglo3);
        console.log(arreglo3.length);
    }
}

/*
    La función flecha es el equivalente
    a las expresiones lambda de Java y
    estas se pueden almacenar en variables
 */

{
    let soloPares = x => x % 2 === 0;
    let soloImpares = x => x % 2 !== 0;

    let arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(filtrar(soloPares, arreglo));
    console.log(filtrar(soloImpares, arreglo));

    function filtrar(soloPares, array) {
        let resultado = [];

        for (let valor of array) {
            if (soloPares(valor)) {
                resultado.push(valor);
            }
        }
        return resultado;
    }
}