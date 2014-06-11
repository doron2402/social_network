var User = require('./user');
var Auth = require('./auth');
var Follow = require('./follow');
var Product = require('./product');
var Routes = {
    User: User,
    Auth: Auth,
    Follow: Follow,
    Product: Product
};

module.exports = Routes;