var FollowModel = SN.Mongoose.model('follow', SN.Schema.Follow);

//Return Bool
FollowModel.isFollow = function(user_id, target_id, cb){
    
};

FollowModel.getFollowDocumentByUserId = function(user_id, cb) {
    FollowModel.findOne({ user_id: user_id}, function(err, follow_doc){
        if(err) {
            return cb(err, null);
        }
        if (SN._.isEmpty(follow_doc)){
            return cb(null, null);
        }
        return cb(null, follow_doc);
    });
};

//return a number
FollowModel.getFollowers = function(user_id, cb) {

};

FollowModel.followTargetUser = function(args, cb) {
    if (!args || !args.user_id || !args.target_id) {
        return cb({err: 'Missing Params'}, null);
    }

    //Check if user_id is exist
    SN.Model.User.checkIfUserExist(args.user_id, function(err, result){
        if (!SN._.isEmpty(result)) {
            SN.Model.User.checkIfUserExist(args.target_id, function(err, result){ 
                if ()
            });
        }
    });

};

FollowModel.unFollowTargetUser = function(user_id, target_id, cb) {
    Follow.isFollow(user_id, target_id, function(err, result){
        if (err) {
            cb(err, null);
        }
        if (!result){
            cb(SN.Errors.ResourceNotFound,null);
        }

    });
};


module.exports = FollowModel;