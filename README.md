
# Livraria CRUD
Simples CRUD utilizando boas praticas com nodejs e mongoDB

## Documentação da API

### Livros - CRUD

#### Cria um livro

```http
  POST /localhost/livros
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `titulo` | `string` | **Obrigatório**|
| `autor` | `string` | **Obrigatório**|
| `editora` | `string` | **Obrigatório**|
| `numeroDePaginas` | `string` | **Obrigatório**|

#### Lista os livros criados

```http
  PUT /localhost/livros/:id
```

| Parâmetro   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `631bf990e86f473e2f05a3ae` | **Obrigatório** |

##### No body voce manda o que quer alterar. Exemplo: eu quero alterar o nome do autor...
```http
  {
    "titulo": "CSS Grid avancado"
  }
```

#### Deleta um livro

```http
  DELETE /localhost/livros/:id
```

| Parâmetro   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `631bf990e86f473e2f05a3ae` | **Obrigatório** |

#### Lista um livro especifico

```http
  GET /localhost/livros/:id
```

| Parâmetro   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `631bf990e86f473e2f05a3ae` | **Obrigatório** |

#### Lista todos livros

```http
  GET /localhost/livros
```

### Autores - CRUD

#### Cria um autor

```http
  POST /localhost/autores
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**|
| `nacionalidade` | `string` | **Opcional**|

#### Lista os autores criados

```http
  PUT /localhost/autores/:id
```

| Parâmetro   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `631bf990e86f473e2f05a3ae` | **Obrigatório** |

##### No body voce manda o que quer alterar. Exemplo: eu quero alterar o nome do autor...
```http
  {
    "autor": "Yasmim Vieira"
  }
```

#### Deleta um autor

```http
  DELETE /localhost/autores/:id
```

| Parâmetro   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `631bf990e86f473e2f05a3ae` | **Obrigatório** |

#### Lista um autor especifico

```http
  GET /localhost/autores/:id
```

| Parâmetro   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `631bf990e86f473e2f05a3ae` | **Obrigatório** |

#### Lista todos autores

```http
  GET /localhost/autores
```

## Apêndice

Criado por [Yasmim Barbosa Vieira](linksdev.netlify.app/)