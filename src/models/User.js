const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    password: {
        type: String, required: true
    },
    rol: { type: String, default: 'user', enum: { values: ['user', 'admin'] } },
    state: { type: Boolean, default: true },
    images: { type: Object },
    cart: { type: Array, default: [] }
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

module.exports = model('User', userSchema);
