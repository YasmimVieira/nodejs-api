import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos aneis"},
    {id: 2, "titulo": "Senhor dos aneis 2"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de node')
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
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