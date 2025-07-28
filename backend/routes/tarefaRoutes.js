const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefaController");
const autenticarToken = require("../middlewares/authMiddleware");
const tarefaController = require("../controllers/tarefaController");


router.get("/",autenticarToken, tarefaController);
router.post("/",autenticarToken, tarefaController);
router.patch("/:id",autenticarToken, tarefaController);
router.delete("/:id",autenticarToken, tarefaController);

module.exports = router;