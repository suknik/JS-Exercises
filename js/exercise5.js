// Exercise 5

/**
 *
 *  Factorial
    
    Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 *  
 */

let number = prompt("Ingrese un número mayor que o igual a 1");
let result = 0;

function factorial(number) {
    if(number == 0){
        return 1;
    } else {
        return result = number * factorial(number-1);
    }
}
console.log(factorial(number));