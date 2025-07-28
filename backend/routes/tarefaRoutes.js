const express = require("express");
const router = express.Router();
const autenticarToken = require("../middlewares/authMiddleware");
const tarefaController = require("../controllers/tarefaController");

// Rotas com as funções corretas do controller
router.get("/", autenticarToken, tarefaController.listar);
router.post("/", autenticarToken, tarefaController.criar);
router.patch("/:id", autenticarToken, tarefaController.alterarStatus);
router.delete("/:id", autenticarToken, tarefaController.remover);

module.exports = router;
