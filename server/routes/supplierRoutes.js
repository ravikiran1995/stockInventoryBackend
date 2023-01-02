var express = require('express');
const { getAllSuppliers,getSupplierById,deleteSupplier,updateSupplier,saveSupplier } = require('../controllers/SupplierController');
var router = express.Router();

/* GET Suppliers listing. */
router.post('/', saveSupplier);
router.get('/', getAllSuppliers);
router.get('/:id', getSupplierById);
router.put('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);

module.exports = router;
