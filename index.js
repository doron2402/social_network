//Setting global object
if (!global.SN) { global.SN = {}; }

SN.Hapi = require('hapi');
SN.Joi = require('joi');
SN.Settings = require('./config');


SN.Server = new SN.Hapi.Server(SN.Settings.host, SN.Settings.port, { cors: true });

SN.Server.start(function () {

    console.log('Server started at: ' + SN.Server.info.uri);
});
