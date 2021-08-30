// const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
// const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 1. Hacer una funcion "ordenarAlfabeticamente" que reciba un array y lo retorne ordenado alfabeticamente. 

// const ordenarAlfabeticamente = (array) =>{
//     return (array.sort())

// }

// console.log(ordenarAlfabeticamente(frozen))
// console.log(ordenarAlfabeticamente(moana))

// // 2. Hacer una funcion "revertirOrden" que reciba un array y retorne sus elementos en orden inverso. 

// const revertirOrden = (array) => {
//     return (array.reverse())
// }

// console.log(revertirOrden(frozen))
// console.log(revertirOrden(moana))

// // 3. Hacer una funcion "incluyeNombre" que reciba un array y un string y retorne true si el array incluye al string, o false en caso contrario. 

// const incluyeNombre = (array, nombre) => {
//     if(array.includes("Ana")){
//         return (true)
//     }else{
//         return (false)
//     }
// }

// console.log(incluyeNombre(frozen, "Ana"))
// console.log(incluyeNombre(moana, "Ana"))


// 4. Hacer una funcion "ultimosDos" que reciba un array y retorne un array con los ultimos dos elementos del original. 

// const ultimosDos = (array) => {
//     return (array.slice(-2))
// }


// console.log(ultimosDos(frozen.splice(-2)))
// console.log(ultimosDos(moana.splice(-2)))



// 5. Hacer una función "conservarSoloConA" que reciba un array y retorne un nuevo array compuesto solo por los elementos del original que contienen la letra "A". 
// const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
// const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// let acc= ""

// const conservarSoloConA = (array) => {

//     for (let i = 0; i < array.length; i++) {
//         if(array[i].includes("A")){
//             array.splice()
//         }



//     }
// }

// console.log(conservarSoloConA(moana))
// console.log(conservarSoloConA(frozen))


////// Clase 47 /////

// push
//palabras= ["elefante" , "dinosaurio"]

// const recortar = (cantidadLetras , palabras) => {
//      const arrayFinal = []

//     for (let i = 0; i < palabras.length; i++) {

//        console.log(palabras[i].slice(0,cantidadLetras)) 

//     }
//     return arrayFinal
// }

// consoloe.log(recortar(4,["elefante","dinosaurio"]));

// Ejercicio 7: Separar
// Definí una función separar que tome por parámetro un string con emojis de perros y gatos y 
// devuelva un string con los perros agrupados por un lado y los gatos por otro.


// '🐶🐶🐶🐶🐱🐱🐱'

let stringMascotas = '🐶🐱🐶🐱🐱🐶🐶'
const perrosYGatos = []

const separar = (str) => {

    let array = str.split("")

    for (let i = 0; i < array.length; i++) {

        if (array[i] === "p") {
            perrosYGatos.unshift(array[i])
        }
        else if (array[i] === "g") {
            perrosYGatos.push(array[i])
        }

    }
    return perrosYGatos.join(",")

}
console.log(separar('pgppggp'))

///Ejercicio 3///

// Definí una función contiene que reciba como argumentos un número numero y un array de números 
// numeros y devuelva si el número se encuentra en dicho array.



const contiene = (numero, array) => {
    return array.includes(numero)

}

console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]))
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
false


// Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array 
// de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor 
// a longitud. Ejemplo:

const filtrarPorLongitudMayorA = (longitud, palabras) => {

    let acc = []

    for (let index = 0; index < palabras.length; index++) {

        if (palabras[index].length > longitud) {
            acc.push(palabras[index])
        }
    }
    console.log(acc)
    return acc
}


console.log(filtrarPorLongitudMayorA(4, ['dia', 'remolacha', 'azul', 'sorpresa', 'te', 'verde']))

//Definí una función repetir que tome un valor valor y un número entero cantidad, y devuelva una 
//array con valor repetido cantidad de veces. 



const repetir = (valor, cantidad) => {

    let arrayFinal = []
    for (let i = 0; i < cantidad; i++) { //la cantidad de veces que se tiene q repetir
        arrayFinal.push(valor)

    }

    return arrayFinal
}


//repetir('lovelace', 3)

console.log(repetir('lovelace', 3))
//['lovelace', 'lovelace', 'lovelace']

console.log(repetir('a', 5))
//['a', 'a', 'a', 'a', 'a']

console.log(repetir('html', 0))
//[]

//Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números 
//numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array 
//(en la misma posición) multiplicado por el número ingresado. Ejemplo:

const multiplicar = (multiplicador, numeros) => {
    arrayResultado = []
    for (let i = 0; i < numeros.length; i++) {
        arrayResultado.push(numeros[i] * multiplicador)

    }

    return arrayResultado
}

console.log(multiplicar(2, [5, 7, 15, 22, 40]))
//[10, 14, 30, 44, 80]
console.log(multiplicar(10, [2, 5, 77]))
//[20, 50, 770]


//Definí una función obtenerIndice que reciba como argumento un valor cualquiera valor y un array 
//cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.


const obtenerIndice = (valor, array) => {

    for (let i = 0; i < array.length; i++) {

        if (valor === array[i]) {
            return i

        }

    }
    return -1

}

const obtenerIndice2 = (valor, array) => {
    if (array.includes(valor)) {
        for (let i = 0; i < array.length; i++) {
            if (valor === array[i]) {
                return i
            }
        }
    } else {
        return -1
    }

}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]))
//2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]))
//-1
console.log(obtenerIndice(34, [5, 7, 12, 34, 54, 2, 12]))

console.log(obtenerIndice2(34, [5, 7, 12, 34, 54, 2, 12]))

//Definí una función invertir que tome por parámetro un array array y que devuelva un array con 
//los mismos valores pero en orden invertido.

const invertir = (array) => {
    return array.reverse()
}

console.log (invertir([1, 2, 3])) 

//[3, 2, 1]
 console.log (invertir([5, 7, 99, 34, 54, 2, 12]))
//[12, 2, 54, 34, 99, 7, 5]