class Filtro {

    constructor(valores) {
        this.valores = valores;
    }

    manejoExcepcion(tipo, valor) {
        try {
            if (typeof valor !== tipo) {
                throw new Error(`${valor} no es ${tipo}`);
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    filtrar(lambda) {
        if (this.manejoExcepcion("function", lambda)) {
            let resultado = [];

            for (const valor of this.valores) {
                if (lambda(valor)) {
                    resultado.push(valor)
                }
            }
            return new Filtro(resultado);
        }
    }
}

const filtro = new Filtro([1, 2, 3, 4, 5, 6, 7, 8]);
let resultado = filtro.filtrar(x => x % 2 === 0);
console.log(resultado);
