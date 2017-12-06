const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-as-promised');
const validator = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    cardCollection: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }],
    status: {
        type: String,
        required: true,
        trim: true,
        default: 'user'
    },
    communicate: {
      type: Boolean,
      required: true,
      trim: true,
      default: false
    }
}, { timestamps: true })

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) { return next(); }

    bcrypt.hash(this.password, 10)
        .then(hashed => {
            this.password = hashed;
            next();
        })
        .catch(next);
})

userSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
    return bcrypt.compare(candidatePassword, hashedPassword);
};


module.exports = mongoose.model('User', userSchema);
