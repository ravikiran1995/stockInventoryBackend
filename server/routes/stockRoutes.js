var express = require('express');
const { getAllStockCollections,getStockCollectionById,deleteStockCollection,updateStockCollection,saveStockCollection, getAllStockCollectionsByFilter } = require('../controllers/stockController');
var router = express.Router();

/* GET StockCollections listing. */
router.post('/', saveStockCollection);
router.get('/', getAllStockCollections);
router.post('/filter', getAllStockCollectionsByFilter);
router.get('/:id', getStockCollectionById);
router.put('/:id', updateStockCollection);
router.delete('/:id', deleteStockCollection);

module.exports = router;
