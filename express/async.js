// Asychrounous Code execeution 
console.log("This is First Statement");
const display = () => {
    let sum = 0;
    for (let i = 1; i <= 100000; i++) {
        sum += i;        
    }
    setTimeout(() => {
        console.log("The total sum is " + sum);
    }, 7000);
}
display();
console.log("This is the Second Statement");


