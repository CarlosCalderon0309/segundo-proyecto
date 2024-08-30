const express = require('express');
const { createProduct, getProducts } = require('../Controllers/ProductController');

const router = express.Router();

router.post('/', createProduct);

router.get('/', getProducts);

module.exports = router;
