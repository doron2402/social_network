var User = {};

User.createUser = {
    method: 'POST',
    path: '/user',
    config: {
        handler: function (request, reply) {
            var payload = request.payload
            if (SN._.isEmpty(payload)){
                return reply({ code: 'Fail', err: 'Missing Payload'});
            }

            SN.Joi.validate(payload, SN.Validation.User.createUser, function (err, value) {
                if (err) {
                    return reply({
                        code: 'Fail',
                        err: {
                            code: err.name,
                            details: err.details[0]
                        }
                    });
                }
                SN.Model.User.createUser(payload, function(err, result) {
                    if (err){
                        return reply({ code: 'Fail', data: err });
                    }
                    return reply({ code: 'OK', data: result });
                });

            });

        }
    }
};

User.deleteUserById = {
    method: 'DELETE',
    path: '/api/users/{user_id}',
    config: {
        handler: function (request, reply) {
            console.log(request.params);
            SN.Joi.validate(request.params, SN.Validation.User.userDeleteById, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }

                SN.Model.User.deleteUserById(value.user_id, function(err, result) {
                    console.log(result);
                    if (err){
                        return reply({ code: 'Fail', data: err });
                    }
                    return reply({ code: 'OK', data: result });
                });
            });
        }
    }
};

User.getUserById = {
    method: 'GET',
    path: '/api/users/{user_id}',
    config: {
        handler: function (request, reply) {

            if (!request.params || !request.params.user_id) {
                return reply({ code: 'Fail', err: 'Missing Payload'});
            }
            console.log(request.params);
            SN.Joi.validate(request.params, SN.Validation.User.getUserById, function (err, value) {
                if (err) {
                    return reply({
                        code: 'Fail',
                        err: {
                            code: err.name,
                            details: err.details[0]
                        }
                    });
                }
                console.log(value);
                SN.Model.User.getUserById(value, function(err, result) {
                    if (err){
                        return reply({ code: 'Fail', data: err });
                    }
                    return reply({ code: 'OK', data: result });
                });

            });
        }
    }
};

User.getUserByUsername = {
    method: 'GET',
    path: '/api/users/username/{username}',
    config: {
        handler: function (request, reply) {

            if (!request.params || !request.params.username) {
                return reply({ code: 'Fail', err: 'Missing Payload'});
            }

            SN.Joi.validate(request.params, SN.Validation.User.getUserByUsername, function (err, value) {
                if (err) {
                    return reply({
                        code: 'Fail',
                        err: {
                            code: err.name,
                            details: err.details[0]
                        }
                    });
                }

                SN.Model.User.getUserByUsername(value, function(err, result) {
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