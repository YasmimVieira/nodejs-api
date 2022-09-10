import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router 
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)                         
    .post("/livros", LivroController.cadastrarLivros)                         
    .put("/livros/:id", LivroController.atualizaLivro)                         
    .delete("/livros/:id", LivroController.excluirLivro)                         

export default router;