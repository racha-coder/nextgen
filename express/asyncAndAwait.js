async function func() {
    let x = await 10 + 20;
    console.log("Inside of the function");
    return x;
}
let res = func();
res.then(res => console.log(res)).catch(err => console.log(err));
