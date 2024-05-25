
const express = require('express');
const router = express.Router();
const { transferMoney, getBalance } = require('../controllers/transferController');

router.post('/transfer', transferMoney);
router.get('/balance/:accountId', getBalance);

module.exports = router;
