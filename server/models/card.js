const mongoose = require('mongoose');
const { Schema } = mongoose;
// const bcrypt = require('bcrypt-as-promised');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const cardSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    theology: {
        type: String,
        required: true,
        trim: true
    },
    quote: {
        type: String,
        required: true,
        trim: true
    },
    bio: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: false,
        trim: true
    },
    number: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    terms: [{
        type: String,
        trim: true
    }],
    collectors: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })

module.exports = mongoose.model('Card', cardSchema);
