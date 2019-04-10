const restify = require("restify");
const restifyPlugins = require('restify-plugins');
const config = require('./config/config')
const models = require('./models/models')

const server = restify.createServer({
    name: config.app.name
})

server.use(restifyPlugins.jsonBodyParser());
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser());
//server.use(restifyPlugins.bodyParser());




server.listen(config.app.port, ()=> {
    console.log("Server listening at port ", config.app.port);
})

module.exports = server;