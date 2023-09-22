// Exercise 4
/**
 * 
Alarm

Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */

const alarm = () => {
    let time = prompt("Ingrese el valor en segundos antes de sonar la alarma");
    time = Number(time);
    setTimeout(() => alert(`Time for bed after ${time}`), time*(1000));
}