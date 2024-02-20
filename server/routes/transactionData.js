const express = require('express');
const { getAllData } = require('../controllers/TransactionDataController');
const router = express.Router();

router.get('/transaction-data', getAllData);

module.exports = router;