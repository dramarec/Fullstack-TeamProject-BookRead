const express = require('express');
const validate = require('../../utils/validations/validationTraining');
const guard = require('../../utils/guard');

const router = express.Router();

router.post('/', guard, validate.addTraining);
router.patch('/', guard, validate.addRead);
router.get('/', guard);

module.exports = router;
