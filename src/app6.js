const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route6 = require('./helper/route6');

const server = http.createServer((req, res) => {
    // const url = req.url;
    const filePath = path.join(conf.root, req.url);
    route6(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});