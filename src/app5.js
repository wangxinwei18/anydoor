const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route5 = require('./helper/route5');

const server = http.createServer((req, res) => {
    // const url = req.url;
    const filePath = path.join(conf.root, req.url);
    route5(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});