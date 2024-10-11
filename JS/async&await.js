async function someFunc() {
    const a = 50, b = 100;
    if (a > b) {
        return "A is bigger than B";
    } else {
        throw new Error("B is bigger than A");
    }
}

const res = someFunc();

res.then(data => {
    console.log(data);
}).catch(err => {
    // console.log(err);
    console.log('There was an Error');
})