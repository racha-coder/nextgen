//! Synchronous / Sequential code

console.log("Hallo Message");
console.log("This is synchronous code");


//! Asynchronous Code

setTimeout(() => {
    console.log('This is also a hallo message');
    console.log('This message is executed second');
}, 6000);

console.log('This message is executed first');
