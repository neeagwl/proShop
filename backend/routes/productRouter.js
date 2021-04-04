const express = require('express');
const router = express.Router();
const {getProductById,getProducts, createProductReview} = require('../controllers/productControllers');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/:id/reviews').post(protect, createProductReview);



module.exports= router;