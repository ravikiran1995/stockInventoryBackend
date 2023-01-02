const supplierSchema = require('../models/supplierSchema')

module.exports = {
    saveSupplier: (req, res, next) => {

        try {
            supplierSchema.create(req.body).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data:result,
                    message: "Saved Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to save supplier"
                })
            })

        } catch (error) {
            console.log("error", error)
        }

    },
    getAllSuppliers: (req, res, next) => {
        try {
            supplierSchema.find().then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "Success"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find supplier"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    getSupplierById: (req, res, next) => {
        try {
            supplierSchema.findOne({ supplier_id: req.params.id }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    data: result,
                    message: "find one Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to find supplier"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    updateSupplier: (req, res, next) => {
        try {
            supplierSchema.findOneAndUpdate({ supplier_id: req.params.id }, { $set: req.body }).then(result => {
                console.log(">>>>>>", result)
                res.json({
                    status: 200,
                    message: "updated Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to update supplier"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    },
    deleteSupplier: (req, res, next) => {
        try {
            supplierSchema.remove({ supplier_id: req.params.id }).then(result => {
                res.json({
                    status: 200,
                    message: "Deleted Successfully"
                })
            }).catch(err => {
                res.json({
                    status: 500,
                    message: "Failed to Delete supplier"
                })
            })
        } catch (error) {
            console.log("error", error)
        }
    }

}