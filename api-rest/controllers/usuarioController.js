
const db = require("../models");
const Usuario = db.Usuario;

exports.login = async (req, res) => {
  try {
    // ... (conteúdo do método login)
    return res.status(200).json({ message: "Retorno do login" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar o login." });
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    // ... (conteúdo do método criarUsuario)
    return res.status(200).json({ message: "Retorno do criar usuario" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar." });
  }
};

exports.listarTodosUsuarios = (req, res) => {
  try {
    // ... (conteúdo do método listarTodosUsuarios)
    return res.status(200).json({ message: "Retorno de todos os usuarios" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar todos." });
  }
};

exports.listarUsuarioPorId = (req, res) => {
  try {
    // ... (conteúdo do método listarUsuarioPorId)
    return res.status(200).json({ message: "Retorno do usuario por id" });

  } catch (error) {
    res.status(500).json({ error: "Erro ao listar por id." });
  }
};

exports.atualizarUsuario = (req, res) => {
  try {
    // ... (conteúdo do método atualizarUsuario)
    return res
      .status(200)
      .json({ message: "Retorno do atualizar usuario por id" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar por id." });
  }
};

exports.deletarUsuario = (req, res) => {
  try {
    // ... (conteúdo do método deletarUsuario)
    return res
      .status(200)
      .json({ message: "Retorno do deletar usuario por id" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar por id." });
  }
};
