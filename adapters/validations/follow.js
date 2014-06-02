var Follow = {};
var Joi = SN.Joi;

Follow.userFollowAnotherUser = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    target_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
};

module.exports = Follow;