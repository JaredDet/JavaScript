esNumero(null);

function esNumero(numero) {
    try {

        if (isNaN(numero) || numero === null) {
            throw new Error("No se ha introducido un número");
        }
        console.log(numero);
    } catch (error) {
        console.log(`Se ha producido el siguiente ${error}`);
    }
}

