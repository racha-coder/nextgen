const express = require('express');

const app = express();
const PORT = 6677;

app.get('/user', (req, res) => {
    res.json("This is Read Or GET Method");
    console.log(req.body);
    
});

app.get('/user1', (req, res) => {
    res.json("This is user1 endpoint with GET Method");
});

app.post('/post', (req, res) => {
    res.json("This is POST Method");
})

app.put('/put', (req, res) => {
    res.json("This is PUT Method");
})

app.delete('/delete', (req, res) => {
    res.json("This is the DELETE Method");
})

app.listen(PORT, () => {
    console.log(`Server is listening at Port : ${PORT}`);
})
