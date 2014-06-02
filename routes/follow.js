var Follow = {};

/*
    GET: /api/users/{user_id}/followers/count
    Params: user_id
    1. check if user exist
    2. get the number of followers (followers_ct)
    Return: Numer
*/
Follow.getNumberOfFollowers = function (req, res) {

};

/*
    GET: /api/users/{user_id}/followers/count
    Params: user_id
    1. check if user exist
    2. get the number of follloweing (following_ct)
    Return: Numer
*/
Follow.getNumberOfFollowing = function(req, res) {

};

/*
    PUT: /api/users/{user_id}/follow/{target_id}
    Params: user_id, target_id
    1. add user_id to target_id followers
    2. add target_id to user_id following
    Return: Success/Failure
*/
Follow.userFollowAnotherUser = {
    method: 'PUT',
    path: '/api/users/{user_id}/follow/{target_id}', 
    config: {
        handler: function (request, reply) {

            SN.Joi.validate(request.params, SN.Validation.Follow.userFollowAnotherUser, function (err, value) {
                if (err) {
                    return reply({ 
                        code: 'Fail', 
                        err: { 
                            code: err.name, 
                            details: err.details[0] 
                        } 
                    });
                }
                SN.Model.Follow.followTargetUser(request.params, function(err, result) {
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
    DELETE: /api/users/{user_id}/unfollow/{target_id}
    Params: user_id, target_id
    remove target_id from user followers
    Return: Success/Failure
*/
Follow.userUnFollow = function(req, res) {

};

/*
    GET: /api/users/{user_id}/following/{target_id}
    Params: user_id, target_id
    check if target_id is in user following array
    Return: Bool
*/
Follow.isFollowing = function(req, res) {

};

/*
    GET: /api/users/{user_id}/followby/{target_id}
    Params: user_id, target_id
    check if target_id is in user followers array
    Return: Bool
*/ 
Follow.isFollowBy = function(req, res) {

};

module.exports = Follow;