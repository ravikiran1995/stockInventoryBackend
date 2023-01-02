var express = require('express');
const { saveManufacture, getManufactureById, getAllManufactures, updateManufacture, deleteManufacture } = require('../controllers/manufactureController');
var router = express.Router();

/* GET manufactures listing. */
router.post('/', saveManufacture);
router.get('/', getAllManufactures);
router.get('/:id', getManufactureById);
router.put('/:id', updateManufacture);
router.delete('/:id', deleteManufacture);

module.exports = router;
