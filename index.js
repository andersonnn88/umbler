const express = require('express');
const app = express();


app.get('*', function(req, res){
        res.redirect('/');
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});