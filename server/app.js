/**
 * Created by Amit on 9/8/2018.
 */

const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app).listen(8000);

console.log('Server is running on 8000 port');

module.exports = server;

