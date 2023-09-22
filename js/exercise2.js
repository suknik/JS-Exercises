// Exercise 2
/**
 * 
    Highest number

    Write a program that asks for 10 numbers. 
    Using logical operators and any other javascript
    functions/structures you've seen before, 
    determine and output the highest of those 
    numbers.
 */


let numeroMayor = 0;
let numeros = prompt("Introduzca por favor una lista de 10 números separados por '-'");
numeros = numeros.split("-");
numeros.forEach((numero) => {
    numero = Number(numero);
    console.log(`${numero} > ${numeroMayor} : ${numero > numeroMayor}`)
    if(numero > numeroMayor){
        numeroMayor = numero;
    }
})
console.log(`El numero Mayor de ${numeros.join()} es: ${numeroMayor}`);