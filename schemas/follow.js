var followSchem = SN.Mongoose.Schema({
    user_id: String,
    followers_ct: Number,
    followers: [],
    following_ct: Number,
    following: []
});

module.exports = followSchem;