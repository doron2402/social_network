var userSchema = SN.Mongoose.Schema({
    username: String,
    password: String,
    name: {
        first: String,
        middle: String,
        last: String
    },
    phone: Number,
    email: String,
    birthdate: Date,
    follower_ct: Number,
    followers: [],
    following_ct: Number,
    following: [],
    createAt: Date,
    updateAt: { type: Date, default: Date.now }
});

module.exports = userSchema;