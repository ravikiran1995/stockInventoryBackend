const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    barcode: { type: String, default: '' },
    supplier: { type: String, default: '' },
    manufacture: { type: String, default: '' },
    invoiceNumber: { type: String, default: '' },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    meta: {},
    history: {},
    isUnboxed:{
        type: Boolean,
        default:false
    },
    isReturned:{
        type: Boolean,
        default:false 
    },
    row_ts: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("stock", StockSchema);