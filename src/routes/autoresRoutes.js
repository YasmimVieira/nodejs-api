import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router 
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)                         
    .post("/autores", AutorController.cadastrarAutores)                         
    .put("/autores/:id", AutorController.atualizaAutor)                         
    .delete("/autores/:id", AutorController.excluirAutor)                         

export default router;