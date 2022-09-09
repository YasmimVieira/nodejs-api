import express from "express";
import db from './config/dbConnect.js';
import livros from './models/Livros.js';

db.on("erro", console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
    console.log("Conexao com o banco feita com sucesso")
})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Curso de node')
});

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);

    livros[index].titulo = req.body
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivros(id);

    livros.splice(index, 1);
    res.send(`Livro ${id} excluido com sucesso`)
})


app.get('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);

    res.json(livros[index])
})


function buscaLivros(id) {
    return livros.findIndex(livro => livro.id === id);
}



export default app; 