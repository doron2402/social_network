var User = {};

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

            SN.Joi.validate(payload, SN.Validation.User.getUser, function (err, value) {
                if (err) {
                    return reply({ 
                        code: 'Fail', 
                        err: { 
                            code: err.name, 
                            details: err.details[0] 
                        } 
                    });
                }
                SN.Model.User.getUser(payload, function(err, result) {
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