var User = require('./user');
var Auth = require('./auth');
var Follow = require('./follow');
var Model = {
    User: User,
    Auth: Auth,
    Follow: Follow
};

module.exports = Model;