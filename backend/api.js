const http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require("cors")()); 
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.post('/send', (req, res, next) => { 
    var data = req.body
    console.log('req.body = ', req.body)

    require("./nodemail")(data.image, data.description)
      .then((response) => res.json(response))
      .catch((error) => res.json(error))
}) 

//const port = process.env.PORT || 5000;
const server = http.createServer(app); 
const port = 3047
server.listen(port);
console.log(`Servidor escutando na porta ${port}...`)