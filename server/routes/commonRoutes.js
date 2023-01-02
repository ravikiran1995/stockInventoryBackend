var express = require('express');
const { getAllCommonCollections,getCommonCollectionById,deleteCommonCollection,updateCommonCollection,saveCommonCollection, getAllCommonCollectionsByFilter } = require('../controllers/CommonController');
var router = express.Router();

/* GET CommonCollections listing. */
router.post('/', saveCommonCollection);
router.get('/', getAllCommonCollections);
router.post('/filter/', getAllCommonCollectionsByFilter);
router.get('/:id', getCommonCollectionById);
router.put('/:id', updateCommonCollection);
router.delete('/:id', deleteCommonCollection);

module.exports = router;
