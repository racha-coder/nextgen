// Callback function example

// Here callback is the callback function
function greet(name, callback) {
    console.log("The name is : " + name);
    callback();
}

function welcome() {
    console.log("This is a Welcome Message using Callback Function");
}

greet("Some_Name", welcome)