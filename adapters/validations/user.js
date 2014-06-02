var User = {};
var Joi = SN.Joi;
User.createUser = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    birthdate: Joi.date().min('1-1-1974').optional(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    first_name: Joi.string().regex(/[a-zA-Z]{2,32}/).required(),
    last_name: Joi.string().regex(/[a-zA-Z]{2,32}/).required(),
    middle_name: Joi.string().regex(/[a-zA-Z]{2,32}/).optional()
};

User.getUser = {
    username: Joi.string().alphanum().min(3).max(30).optional(),
    user_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).optional()
};

module.exports = User;