
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Rota: POST /login
router.post("/login", usuarioController.login);

// Rota: GET /
router.get("/", usuarioController.listarTodosUsuarios);

// Rota: GET /:id
router.get("/:id", usuarioController.listarUsuarioPorId);

// Rota: POST /
router.post("/", usuarioController.criarUsuario);

// Rota: PUT /:id
router.put("/:id", usuarioController.atualizarUsuario);

// Rota: DELETE /:id
router.delete("/:id", usuarioController.deletarUsuario);

module.exports = router;
