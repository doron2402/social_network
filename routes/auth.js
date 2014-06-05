var Auth = {};

/*
    Return: Bool
*/
Auth.isAuthenticate = function(req, res) {

};

/*
    Return: Bool
*/
Auth.isAuthorize = function(req, res, next) {

};

/*
    Check if request came from our Verified client (Mobile, Web, etc...)
*/
Auth.isClient = function(req, res, next) {

};

Auth.authenticateUserByPassword = {
    method: 'POST',
    path: '/api/users/authenticate',
    config: {
        handler: function (request, reply) {

            if (SN._.isEmpty(request.payload)){
                return reply({ code: 'Fail', err: 'Missing Payload'});
            }

            SN.Joi.validate(request.payload, SN.Validation.Auth.authenticateUserByPassword, function (err, value) {
                if (err) {
                    return reply({
                        code: 'Fail',
                        err: {
                            code: err.name,
                            details: err.details[0]
                        }
                    });
                }
                SN.Model.Auth.authenticateUserByPassword(value, function(err, result) {
                    if (err){
                        return reply({ code: 'Fail', data: err });
                    }
                    return reply({ code: 'OK', data: result });
                });

            });

        }
    }
};

module.exports = Auth;