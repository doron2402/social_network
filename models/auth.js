var Auth = SN.Mongoose.model('auth', SN.Schema.Auth);

Auth.authenticateUserByPassword = function(args, cb) {
    if (!args || !args.username || !args.password) {
        return cb({err: "Missing Params"},null);
    }
    //Validate the user and return a signature
    return cb(null,{code: 'OK', data: args});
};

module.exports = Auth;