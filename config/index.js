var settings = require('./settings');
var NODE_ENV = process.env.NODE_ENV;

if (!settings[NODE_ENV]) {
    NODE_ENV = 'dev';
}
module.exports = settings[NODE_ENV];