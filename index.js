//Setting global object
if (!global.SN) { global.SN = {}; }

SN.Hapi = require('hapi');
SN.Joi = require('joi');
SN.Settings = require('./config');
SN.Errors = require('./adapters/errors');
SN.Mongoose = require('mongoose').connect(SN.Settings.mongo);
SN.Schema = require('./schemas');
console.log(SN.Schema);
SN.Server = new SN.Hapi.Server(SN.Settings.host, SN.Settings.port, { cors: true });

SN.Server.start(function () {

    console.log('Server started at: ' + SN.Server.info.uri);
});
