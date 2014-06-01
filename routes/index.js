var User = require('./user');
var Auth = require('./auth');
var Follow = require('./follow');
var Routes = {
    User: User,
    Auth: Auth,
    Follow: Follow
};

module.exports = Routes;