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