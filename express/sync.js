//? Syncronous Code Execution

console.log("This is First Statement");
function display() {
    let sum = 0;
    for (let i = 1; i <= 100000; i++) {
        sum += i;
    }
    console.log("The Total Sum is " + sum);
}

display();
console.log("This is second statement");
