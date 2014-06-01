var authSchema = SN.Mongoose.Schema({
    username: String,
    user_id: String,
    token: String,
    createdAt: { type: Date, default: Date.now },
    expiredAt: { type: Date, default: Date.now },
});

module.exports = authSchema;