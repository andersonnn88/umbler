const express = require('express');
const app = express();


app.get('*', function(req, res){
     return  res.json({ message: 'Hello '});
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler executando na porta', port);
});