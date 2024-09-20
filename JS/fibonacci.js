// Code to print all the first n fibonacci series 

// const n = 7;
const res = document.querySelector('.result');
const btn = document.querySelector('#btn');
const input = document.querySelector('input');

function printFibonacci(n) {
    let a = 0, b = 1;
    let c = a + b;
    while (n-- > 2) {
        res.innerHTML = res.innerHTML + c + "<br>";
        a = b;
        b = c;
        c = a + b;
    }
}

btn.onclick = () => printFibonacci(input.value);