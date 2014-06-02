var FollowModel = SN.Mongoose.model('follow', SN.Schema.Follow);

FollowModel.createEmptyDoc = function(user_id, cb){
    if (!user_id) {
        return cb({err: 'Missing Params'}, null);
    }
    var follower_doc = new FollowModel({
        user_id: user_id,
        followers_ct: 0,
        followers: [],
        following_ct: 0,
        following: []
    });
    follower_doc.save(function(err, follower_doc){
        if (err) {
            return cb('something went wrong', null);
        }
        return cb(null, {code: 'Saved', data: user_id});
    });
};

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
    if (!user_id) {
        return cb({err: 'Missing Params'}, null);
    }

    FollowModel.findOne({user_id: user_id}, function(err, result){
        return cb(err, { followers: result.followers, total_followers: result.followers_ct });
    });
};

/*
    user_id follow document
    1. followers_ct +1
    2. followers push (target_id)

*/
FollowModel.setFollowers = function(args, cb) {
    FollowModel.findOne({user_id: args.user_id}, function(err, follower_doc) {
        if(err) { return cb(err, null); }
        var followers = [args.target_id];
        if (!follower_doc || SN._.isEmpty(follower_doc)) {
            //Create Document
            follower_doc = new FollowModel({
                user_id: args.user_id,
                followers_ct: 1,
                followers: followers,
                following_ct: 0,
                following: []
            });
        } else {
            follower_doc.followers_ct += 1;
            follower_doc.followers.push(args.target_id);
        }
        
        follower_doc.save(function(err, follower_doc){
            if (err) {
                return cb('something went wrong', null);
            }
            return cb(null, {code: 'Saved'});
        });
    });
};

/*
    target_id follow document
    1. following_ct +1
    2. following push (user_id)
*/
FollowModel.setFollowing = function(args, cb) {
    FollowModel.findOne({user_id: args.target_id}, function(err, follower_doc) {
        if(err) { return cb(err, null); }
        var following = [args.target_id];
        if (!follower_doc || SN._.isEmpty(follower_doc)) {
            //Create Document
            follower_doc = new FollowModel({
                user_id: args.target_id,
                followers_ct: 0,
                followers: [],
                following_ct: 1,
                following: following
            });
        } else {
            follower_doc.following_ct += 1;
            follower_doc.following.push(args.user_id);
        }
        
        follower_doc.save(function(err, follower_doc){
            if (err) {
                return cb('something went wrong', null);
            }
            return cb(null, {code: 'Saved'});
        });
    });
};

FollowModel.followTargetUser = function(args, cb) {
    if (!args || !args.user_id || !args.target_id) {
        return cb({err: 'Missing Params'}, null);
    }

    //Check if user_id is exist
    SN.Model.User.checkIfUserExist(args.user_id, function(err, result){
        if (err || !result) {
            return cb(err, null);
        }
        if (result) {
            SN.Model.User.checkIfUserExist(args.target_id, function(err, result){ 
                if (result) {
                    FollowModel.setFollowers(args, function(err, result){
                        if (err){ return cb(err, null); }
                        FollowModel.setFollowing(args, function(err, result){
                            if (err){ return cb(err, null); }
                            return cb(null, {code: 'OK'});
                        });
                    });
                }
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