const mongoose = require("mongoose");

const autosSchema = mongoose.Schema({

    image_url: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    model:{
        type:String,
        required: true
    },

    country:{
        type: String,
        required: true 
    }
});

module.exports = mongoose.model('test', autosSchema);