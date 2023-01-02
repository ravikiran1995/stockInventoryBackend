const manufactureSchema = require('../models/manufacturesSchema')

module.exports = {
    saveManufacture: (req, res, next) => {

        try {
            manufactureSchema.create(req.body).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data:result,
                    message: "Saved Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to save Manufacture"
                })
            })

        } catch (error) {
            console.log("error", error)
        }

    },
    getAllManufactures: (req, res, next) => {
        try {
            manufactureSchema.find().then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Success"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find Manufacture"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    getManufactureById: (req, res, next) => {
        try {
            manufactureSchema.findOne({ manufacture_id: req.params.id }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "find one Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find Manufacture"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    updateManufacture: (req, res, next) => {
        try {
            manufactureSchema.findOneAndUpdate({ manufacture_id: req.params.id }, { $set: req.body }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    message: "updated Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to update Manufacture"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    deleteManufacture: (req, res, next) => {
        try {
            manufactureSchema.remove({ manufacture_id: req.params.id }).then(result => {
                res.json({
                    status: 200,
                    message: "Deleted Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to Delete Manufacture"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    }

}