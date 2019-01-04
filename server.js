let express = require('express');
let bodyParser = require('body-parser');
let retrieveFunctions = require('./retrieverController.js')
let path = require('path');

let server = express();
server.use(bodyParser.json());
server.use('/:id', express.static(path.join(__dirname, '/client/dist')));

server.get('/*', retrieveFunctions.alt);
server.get('/streetBreezy/api', retrieveFunctions.retriever);

let port = 3009
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})

module.exports.server = server;