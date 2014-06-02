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
        return cb(null, {code: 'Saved'});
    });
};

UserModel.getUser = function(args, cb) {
    
    UserModel.findOne({ username: args.username }, function(err, result){
        if (err) {
            return cb('something went wrong', null);
        }
        
        if (SN._.isEmpty(result)){
            return cb(null, {code: 'Resource Not Found'});
        }

        return cb(null, {code: 'Found', data: result});
    });
};

module.exports = UserModel;