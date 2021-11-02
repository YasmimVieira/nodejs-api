module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('voce esta na rota de atendimentos'))
    app.post('/atendimentos', (req, res) => res.send("Voce esta na rota de atendimento e esta realizando um post"))
}