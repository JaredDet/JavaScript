/*
    En JavaScript, un array se define igual que en
    Java, pero la diferencia radica en que estos
    son dinámicos.
 */
{
    const nombres = ["Pedro", "Juan", "Diego"];
    console.log(nombres);

    /*
    Para quitar el último elemento se utiliza el método pop.
     */

    {
        nombres.pop();
        console.log(nombres);
    }

    /*
        Para agregar elementos se utiliza el método push.
     */
    {
        nombres.push("Javier");
        console.log(nombres);
    }

    /*
        Para agregar un elemento al inicio se utiliza el método
        unshift.
     */
    {
        nombres.unshift("Javier");
        console.log(nombres);
    }
    /*
        Para borrar el primer elemento se utiliza el método shift.
     */
    {
        nombres.shift();
        console.log(nombres);
    }
    /*
        Para retornar el índice de un elemento dentro del array se
        utiliza el método indexOf.
     */
    {
        console.log(nombres.indexOf("Pedro"));
    }

    /*
        Para recorrer el array se utiliza el método funcional forEach
        que retorna un void.
     */

    {
        nombres.forEach(x => console.log(x));
    }
}
/*
    Otra forma de definir el array
 */

{
    const nombres = Array.of("Pedro", "Juan", "Diego");
    console.log(nombres);
}

/*
    El método fill se utiliza para llenar el array
 */
{
    const verdaderos = Array(5).fill(true);
    console.log(verdaderos);
}
/*
    El método splice nos permite borrar 1 o más elementos a partir de una posición.
    También se puede guardar los elementos borrados en un nuevo array.
 */
{
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const nuevoArray = numeros.splice(1, 5);
    console.log(numeros);
    console.log(nuevoArray);
}

