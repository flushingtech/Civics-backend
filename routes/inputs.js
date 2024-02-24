const express = require('express');
const inputController = require('../controllers/inputs');

const router = express.Router();

router.get('/inputs', inputController.getInput);
router.post('/inputs/create', inputController.createInput);


module.exports = router;