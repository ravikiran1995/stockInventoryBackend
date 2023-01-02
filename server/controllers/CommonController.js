const commonCollectionSchema = require('../models/commonSchema')

module.exports = {
    saveCommonCollection: (req, res, next) => {

        try {
            commonCollectionSchema.create(req.body).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Saved Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to save CommonCollection"
                })
            })

        } catch (error) {
            console.log("error", error)
        }

    },
    getAllCommonCollections: (req, res, next) => {
        try {
            commonCollectionSchema.find().then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Success"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find CommonCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    getAllCommonCollectionsByFilter: (req, res, next) => {
        try {
            commonCollectionSchema.find(req.body).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Success"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find CommonCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    getCommonCollectionById: (req, res, next) => {
        try {
            commonCollectionSchema.findOne({ CommonCollection_id: req.params.id }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "find one Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find CommonCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    updateCommonCollection: (req, res, next) => {
        try {
            commonCollectionSchema.findOneAndUpdate({ CommonCollection_id: req.params.id }, { $set: req.body }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    message: "updated Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to update CommonCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    deleteCommonCollection: (req, res, next) => {
        try {
            commonCollectionSchema.remove({ CommonCollection_id: req.params.id }).then(result => {
                res.json({
                    status: 200,
                    message: "Deleted Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to Delete CommonCollection"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    }

}