const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    address: { type: String, default: '' },
    phone: { type: String, default: '' },
    image_url: { type: String, default: '' },
    row_ts: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("supplier", supplierSchema);