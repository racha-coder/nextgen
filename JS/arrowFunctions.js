//? Function Definition
function normalFunc(a, b, c) {
    console.log('This is a normal Function in JavaScript');
}

//? Function Definition
const arrowFunc = (a, b, c) => {
    console.log('This is an Arrow Function in JavaScript');
    console.log(a, b, c);

}

//? Calling Functions
normalFunc();
arrowFunc(1, 2, 3);