var User = require('./user');
var Follow = require('./follow');
var Auth = require('./auth');
var Validation = {
    User: User,
    Follow: Follow,
    Auth: Auth
};

module.exports = Validation;