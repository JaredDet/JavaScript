/*
    Los objetos en JS se pueden definir de dos formas
 */

/*
    La primera se le conoce como JSON, donde
    los atributos se definen como un par ordenado
    "clave : valor".
 */
{
    const persona = {nombre: "Javier", edad: 21}
    console.log(persona);
}
/*
    Un objeto a su vez podría contener otro objeto como atributo
 */

{
    const persona = {
        nombre: "Javier",
        apellido: "Márquez",
        edad: 21,
        pasatiempos: ["Hacer calistenia", "aprender informática",
        "y salir con amigos"],
        contacto: {
            email: "jamarquez145@gmail.com",
            emailAlternativo: "f.marquez01@ufromail.cl",
            movil: "+569..."
        }
    };
    console.log(persona);
}

/*
    El objeto también podría tener funciones
 */

{
    const javier = {
        nombre: "Javier",
        apellido: "Márquez",
        edad: 21,
        saludar: function () {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
            return javier;
        },
        despedir: function () {
            console.log("Adiós, cuídate");
        }
    };

    javier.saludar()
        .despedir()
}

/*
    Las funciones también pueden ser definidas como funciones flecha
 */

{
    const {apellido, edad, nombre, saludar} = {
        nombre: "Javier",
        apellido: "Márquez",
        edad: 21,
        saludar: () => console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años.`)
    };
    saludar();
}

/*
    Algunos métodos interesantes podrían ser
    Object.keys("nombreObjeto"), Object.values("nombreObjeto") y
    el método hasOwnProperty("atributo")
 */

{
    const javier = {
        nombre: "Javier",
        apellido: "Márquez",
        edad: 21
    };

    /*
    El primer método nos devuelve la clave de todos los atributos del objeto
     */

    console.log(Object.keys(javier));

    /*
        Mientras que el segundo nos devuelve el valor de los atributos
     */

    console.log(Object.values(javier));

    /*
        El último retorna un boolean si existe o no el atributo en el objeto
     */

    console.log(javier.hasOwnProperty("nombre"));

    /*
    Una técnica propia de JavaScript es la deconstrucción
     */
    {
        let nombre = javier.nombre;
        let apellido = javier.apellido;
        let edad = javier.edad;
        console.log(nombre, apellido, edad);
        /*
            Nota: en JS es necesario que la variable
            tenga el mismo nombre que el atributo
            Se reemplaza por
         */
        {
            let {nombre, apellido, edad} = javier;
            console.log(nombre, apellido, edad);
        }
    }
}

/*
    Otra forma de definir un objeto es mediante los literales.
    Si tenemos una variable con un valor asignado, y cuyo nombre
    sea el mismo que el atributo del objeto, entonces se puede
    definir el objeto del siguiente modo
 */

{
    let nombre = "Juanín";
    let apellido = "Beissinger";
    let edad = 6;

    juanin = {
        nombre,
        apellido,
        edad,
        ladrar(){
            console.log("¡guau, guau, guau!");
        }
    };

    console.log(juanin);
    juanin.ladrar();
}


