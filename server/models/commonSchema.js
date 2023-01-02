const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commonSchema = new Schema({
    FLD_IDENTITY : { type: String, default: '' },
	category : { type: String, default: '' },
	code : { type: String, default: '' },
	title : { type: String, default: '' },
	description : { type: String, default: '' },
    row_ts: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("common", commonSchema);