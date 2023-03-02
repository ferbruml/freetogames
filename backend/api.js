const http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require("cors")()); 
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

/*
    TODO: this route must receive an array of games
        to be passed to nodemail
*/
app.post('/send', (req, res, next) => { 
    var data = req.body
    console.log('req.body = ', req.body)

    require("./nodemail")(email)
      .then((response) => res.json(response))
      .catch((error) => res.json(error))
}) 

const server = http.createServer(app); 
const port = 3035
server.listen(port);
console.log(`Servidor escutando na porta ${port}...`)