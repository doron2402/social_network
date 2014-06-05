var Joi = SN.Joi;
var Auth = {};

Auth.authenticateUserByPassword = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
};

module.exports = Auth;