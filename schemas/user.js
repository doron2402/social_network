var userSchema = SN.Mongoose.Schema({
    username: String,
    password: String,
    name: {
        first: String,
        middle: String,
        last: String
    },
    phone: Number,
    email: { type: String, lowercase: true },
    birthdate: Date,
    createAt: Date,
    updateAt: { type: Date, default: Date.now }
});

module.exports = userSchema;