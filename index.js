//Setting global object
if (!global.SN) { global.SN = {}; }

SN.Hapi = require('hapi');
SN.Joi = require('joi');
SN._ = require('lodash');
SN.Settings = require('./config');
SN.Errors = require('./adapters/errors');
SN.Mongoose = require('mongoose').connect(SN.Settings.mongo);
SN.Schema = require('./schemas');
SN.Model = require('./models');
SN.Routes = require('./routes');
SN.Validation = require('./adapters/validations');

SN.Server = new SN.Hapi.Server(SN.Settings.host, SN.Settings.port, { cors: true });

SN.Server.route([
    SN.Routes.User.createUser,
    SN.Routes.User.getUser,
    SN.Routes.Follow.userFollowAnotherUser
]);

SN.Server.start(function () {

    console.log('Server started at: ' + SN.Server.info.uri);
});
