//Dependencias
const mongoose = require("mongoose");

//O Schema a ser utilizado
const MS_ZakuSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    type: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    color: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("MS_Zaku", MS_ZakuSchema);