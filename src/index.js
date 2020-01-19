const express = require('express');
const mongoose = require('mongoose');
const routes  = require('./routes');
 
const app = express();

mongoose.connect('mongodb+srv://anderson:Andy251913@cluster0-xfdvf.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

app.use(express.json()); // endenter requição no foramto json
app.use(routes);  
// metodos HTTP  // get - post  put delette
// query params -  request.query (filtros, ordenação, paginação ..)
// route params -  request.params (Identificar um recurso na alteração , remoção )
// body         -    enviar json com os dados da requesição Dados p criação ou alteração de um registro


// mongo (nao relacionado)

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler executando na porta', port);
});