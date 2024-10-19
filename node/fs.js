const fs = require('fs');

// Read Operation
fs.readFile('./read.txt', 'utf-8', (data, err) => {
    if (!err) {
        console.log(data);
    } else {
        console.log(err);
    }
});

// Write Operation
const text = "This is a sample text for fs writefile operation";
fs.writeFile('./write.txt', text, (err) => {
    if (err) {
        console.log(err);
    } 
    console.log("Check whether the text is added to the file");
});