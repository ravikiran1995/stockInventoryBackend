const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufactureSchema = new Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    image_url: { type: String, default: '' },
    row_ts: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("manufactures", manufactureSchema);