var Follow = SN.Mongoose.model('follow', SN.Schema.Follow);

//Return Bool
Follow.isFollow = function(user_id, target_id, cb){

};

//return a number
Follow.getFollowers = function(user_id, cb) {

};

Follow.followTargetUser = function(args, cb) {
    console.log(args);
    return cb(null, null);
};

Follow.unFollowTargetUser = function(user_id, target_id, cb) {
    Follow.isFollow(user_id, target_id, function(err, result){
        if (err) {
            cb(err, null);
        }
        if (!result){
            cb(SN.Errors.ResourceNotFound,null);
        }

    });
};


module.exports = Follow;