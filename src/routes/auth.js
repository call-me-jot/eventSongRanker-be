const express = require('express');
const { validateRequest } = require('../middleware/validator');
const { signupValidationRules, loginValidationRules } = require('../middleware/validators/authValidator');
const { signup, login } = require('../controller/authController');

const router = express.Router();

router.post('/signup', signupValidationRules, validateRequest, signup);
router.post('/login', loginValidationRules, validateRequest, login);

module.exports = router;