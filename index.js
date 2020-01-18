const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    return res.send('teste');

})

app.listen(3000);