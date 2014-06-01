var User = SN.Mongoose.model('userSchema', SN.Schema.User);

//Return Bool
User.isFollow = function(user_id, target_id, cb){

};

//return a number
User.getFollowers = function(user_id, cb) {

};

User.followTargetUser = function(user_id, target_id, cb) {

};

User.unFollowTargetUser = function(user_id, target_id, cb) {
    User.isFollow(user_id, target_id, function(err, result){
        if (err) {
            cb(err, null);
        }
        if (!result){
            cb(SN.Errors.ResourceNotFound,null);
        }

    });
};

module.exports = User;