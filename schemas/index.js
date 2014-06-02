var User = require('./user');
var Auth = require('./auth');
var Follow = require('./follow');
var Schema = {
    User: User,
    Auth: Auth,
    Follow: Follow
};

module.exports = Schema;