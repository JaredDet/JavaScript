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

function saludar(nombre = "", edad = -1){
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
        edad: 21};

    /*
        Muestra las llaves
     */
    for(const x in javier){
        console.log(x);
    }

    /*
        Muestra los valores
     */
    for(const x in javier){
        console.log(javier[x]);
    }

    /*
        Muestra las llaves y los valores
     */
    for(const x in javier){
        console.log(`${x}: ${javier[x]}`);
    }

    /*
        Para recorrer objetos iterables
        se recomienda utilizar for of
     */
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    for(const x of numeros){
        console.log(x);
    }
    let nombre = "Juan";

    for(const x of nombre){
        console.log(x);
    }
}