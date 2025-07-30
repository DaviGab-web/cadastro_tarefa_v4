const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

//Rota registrar novo usuario

router.post("/register", authController.register);

//rota para login de usuario

router.post("/login", authController.login);

module.exports = router;
