const express = require('express');
const router = express.Router();

const sendMailController = require('../app/controllers/SendMailController');

router.post('/', sendMailController.send);

module.exports = router;