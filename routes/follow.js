var Follow = {};

/*
    Params: user_id
    1. check if user exist
    2. get the number of followers (followers_ct)
    Return: Numer
*/
Follow.getNumberOfFollowers = function (req, res) {

};

/*
    Params: user_id
    1. check if user exist
    2. get the number of follloweing (following_ct)
    Return: Numer
*/
Follow.getNumberOfFollowing = function(req, res) {

};

/*
    Params: user_id, target_id
    1. add user_id to target_id followers
    2. add target_id to user_id following
    Return: Success/Failure
*/
Follow.userFollowAnotherUser = function(req, res) {

};

/*
    Params: user_id, target_id
    remove target_id from user followers
    Return: Success/Failure
*/
Follow.userUnFollow = function(req, res) {

};

/*
    Params: user_id, target_id
    check if target_id is in user following array
    Return: Bool
*/
Follow.isFollowing = function(req, res) {

};

/*
    Params: user_id, target_id
    check if target_id is in user followers array
    Return: Bool
*/ 
Follow.isFollowers = function(req, res) {

};

module.exports = Follow;