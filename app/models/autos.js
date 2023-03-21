const mongoose = require("mongoose");

const autosSchema = new mongoose.Schema({

    img_url: {
        type: String
    },

    brand: {
        type: String
    },

    age:{
        type: Number
    },

    model:{
        type:String
    },

    country:{
        type: String
    },

    description:{
        type: String
    },
},
{
    timestamps: true, // create date
    versionKey: false // delete V
})

module.exports = mongoose.model('test', autosSchema);