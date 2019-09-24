const express = require("express"),
      authController = require('../controller/auth');
      router = express.Router();

// seperate file for authentication purpose


router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

module.exports = router;