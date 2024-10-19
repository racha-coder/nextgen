const http = require('http');

const server = http.createServer((req, res) => {
    res.write('This is a Sample text to test HTTP library in Node.js');
    res.end();  
})
const PORT = 3000; // We can give different port numbers

server.listen(PORT, () => {
    console.log("Server is listening at port " + PORT);
})