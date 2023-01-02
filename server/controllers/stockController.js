const stockCollectionSchema = require('../models/StockSchema')
const _ = require('lodash');

module.exports = {
    saveStockCollection: (req, res, next) => {
        req.body.barcode = _.uniqueId('STC_INV_');
        try {
            stockCollectionSchema.create(req.body).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Saved Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to save StockCollection"
                })
            })

        } catch (error) {
            console.log("error", error)
        }

    },
    getAllStockCollections: (req, res, next) => {
        try {
            stockCollectionSchema.find().then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Success"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find StockCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    getAllStockCollectionsByFilter: (req, res, next) => {
        try {
            console.log("REQ BODD", req.body)
            stockCollectionSchema.find(req.body).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Success"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    error: err,
                    message: "Failed to find StockCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    getStockCollectionById: (req, res, next) => {
        try {
            stockCollectionSchema.findOne({ StockCollection_id: req.params.id }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "find one Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find StockCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    updateStockCollection: (req, res, next) => {
        try {
            stockCollectionSchema.findOneAndUpdate({ StockCollection_id: req.params.id }, { $set: req.body }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    message: "updated Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to update StockCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    deleteStockCollection: (req, res, next) => {
        try {
            stockCollectionSchema.remove({ StockCollection_id: req.params.id }).then(result => {
                res.json({
                    status: 200,
                    message: "Deleted Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to Delete StockCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    }

}