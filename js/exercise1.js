// Exercise 1
/**
 * 
    User profile
    Write a program that prompts a user for their data: 
    username, age, and a list of their favorite movies. 
    Store the information and then showcase it in the console. 
    Take note that the output for the films should add a small 
    message like: 'The film {film} is one of my favorites'.
 */

let uName = prompt("Escriba su nombre, por favor");
let age = prompt("Escriba su edad, por favor");
let movies = prompt("Escriba sus películas favoritas separadas por una ','");
movies = movies.split(",");

console.log(`User's name: ${uName}`);
console.log(`User's age: ${age}`);
movies.forEach((movie) => {
    console.log(`The fil ${movie} is one of my favorites`);
})