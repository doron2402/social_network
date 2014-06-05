var UserModel = SN.Mongoose.model('users', SN.Schema.User);

UserModel.createUser = function(args, cb) {
    var user = new UserModel({
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
        createAt: new Date(),
        updateAt: new Date()
    });

    user.save(function(err, user){
        if (err) {
            return cb('something went wrong', null);
        }
        console.log(user);
        SN.Model.Follow.createEmptyDoc(user._id, function(err, result){
            if (err) { return cb({err: "Internal Error"}, null); }
            console.log(result);
            return cb(null, {code: 'Saved'});
        })

    });
};

UserModel.getUserById = function(args, cb) {
    if (!args || !args.user_id) {
        return cb({err: 'Params are Missing'}, null);
    }
    var ObjectId = SN.Mongoose.Types.ObjectId;
    var query = { _id: new ObjectId(args.user_id) };
    return UserModel.getUserQuery(query, cb);
};

UserModel.getUserByUsername = function(args, cb) {
    if (!args || !args.username) {
        return cb({err: 'Params are Missing'}, null);
    }
    var query = { username: args.username };
    return UserModel.getUserQuery(query, cb);
};

UserModel.getUserQuery = function(query, cb) {
    UserModel.findOne(query, function(err, result){
        if (err) {
            return cb('something went wrong', null);
        }

        if (SN._.isEmpty(result)){
            return cb(null, {code: 'Resource Not Found'});
        }

        return cb(null, {code: 'Found', data: result});
    });
};

UserModel.deleteUserQuery = function(query, cb) {
    UserModel.remove(query, function(err, result){
        return cb(err, result);
    });
}

UserModel.checkIfUserExist = function(user_id, cb) {

    if (!user_id){
        return cb({err: 'Params are Missing'}, null);
    }
    var ObjectId = SN.Mongoose.Types.ObjectId;
    var query = { _id: new ObjectId(user_id) };
    UserModel.findOne(query, function(err, result) {
        if (err || SN._.isEmpty(result)) {
            return cb(err, null);
        }
        return cb(null, result);
    });
};

UserModel.deleteUserById = function(user_id, cb) {
    if (!user_id) {
        return cb({err: 'Params are Missing'}, null);
    }
    var ObjectId = SN.Mongoose.Types.ObjectId;
    var query = { _id: new ObjectId(user_id) };
    UserModel.deleteUserQuery(query, cb);
};

module.exports = UserModel;