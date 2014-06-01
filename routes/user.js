var Joi = SN.Joi;
var User = {
    Methods: {},
    validate_schema: {}
};

User.Methods = {

    create_user: function(args, cb) {
        console.log(args);
        var user = new SN.Model.User({
            username: args.username,
            password: args.password,
            name: {
                first: args.first_name,
                middle: args.middle_name || null,
                last: args.last_name || null
            },
            phone: args.phone,
            email: args.email,
            birthdate: args.birthdate,
            follower_ct: 0,
            followers: [],
            following_ct: 0,
            following: [],
            createAt: new Date(),
            updateAt: new Date()
        });

        user.save(function(err, user){
            if (err) {
                return cb('something went wrong', null);
            }
            return cb(null, {code: 'Saved'});
        });      
    },

    get_user: function(args, cb) {

        SN.Model.User.find({ username: args.username }, function(err, result){
            if (err) {
                return cb('something went wrong', null);
            }
            console.log(result);
            return cb(null, {code: 'Found', data: result});
        });
    }

};

User.validate_schema.create_user = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    birthdate: Joi.date().min('1-1-1974').optional(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    first_name: Joi.string().regex(/[a-zA-Z]{2,32}/).required(),
    last_name: Joi.string().regex(/[a-zA-Z]{2,32}/).required(),
    middle_name: Joi.string().regex(/[a-zA-Z]{2,32}/).optional()
};

User.validate_schema.get_user = {
    username: Joi.string().alphanum().min(3).max(30).optional(),
    user_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).optional()
};

/*
    Params: user object
    Return: Success/Failure
*/
User.createUser = {
    method: 'POST',
    path: '/user', 
    config: {
        handler: function (request, reply) {
            var payload = request.payload
            if (SN._.isEmpty(payload)){
                return reply({ code: 'Fail', err: 'Missing Payload'});
            }

            Joi.validate(payload, User.validate_schema.create_user, function (err, value) {
                if (err) {
                    return reply({ 
                        code: 'Fail', 
                        err: { 
                            code: err.name, 
                            details: err.details[0] 
                        } 
                    });
                }
                User.Methods.create_user(payload, function(err, result) {
                    if (err){
                        return reply({ code: 'Fail', data: err });
                    }
                    return reply({ code: 'OK', data: result });
                });
                
            });
            
        }
    }
};
/*
    Params: user_id
    Return: Success/Failure
*/
User.deleteUser = function(req, res) {

};

/*
    Params: user_id, user_field, user_data
    Return: user object
*/
User.updateUser = function(req, res) {

};

/*
    Params: user_id
    Return: user object
*/
User.getUser = {
    method: 'GET',
    path: '/user', 
    config: {
        handler: function (request, reply) {
            var payload = !SN._.isEmpty(request.payload) ? request.payload : request.query;
            if (SN._.isEmpty(payload)){
                return reply({ code: 'Fail', err: 'Missing Payload'});
            }

            Joi.validate(payload, User.validate_schema.get_user, function (err, value) {
                if (err) {
                    return reply({ 
                        code: 'Fail', 
                        err: { 
                            code: err.name, 
                            details: err.details[0] 
                        } 
                    });
                }
                User.Methods.get_user(payload, function(err, result) {
                    if (err){
                        return reply({ code: 'Fail', data: err });
                    }
                    return reply({ code: 'OK', data: result });
                });
                
            });
            
        }
    }
};

module.exports = User;