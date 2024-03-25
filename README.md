# task-dev-backend

Projeto para criação de tasks para desenvolvedores.

## Pré-requisitos

- Node.js instalado
- npm
- Banco de dados SQLite

## Instalação

1. Clone o repositório:

```bash
# Clonar o repositório:
git clone https://github.com/luisdandolini/task-dev-backend.git

# Instalar as dependências
npm install

# Executar o projeto
npm run dev
```

2. Instale as dependências:

```bash
npm run dev
```

4. O servidor estará rodando em `http://localhost:3000`.

## Rotas da API

### GET `/tasks`

- Descrição: Retorna todas as tarefas não concluídas.
- Parâmetros da consulta: Nenhum.
- Resposta de exemplo:

```json
[
  {
    "id": 1,
    "name": "Tarefa 1",
    "completed": false
  },
  {
    "id": 2,
    "name": "Tarefa 2",
    "completed": false
  }
]
```

### POST `/tasks`

- Descrição: Criar uma nova tarefa.
- Corpo da solicitação:

```json
[
  {
    "name": "Nome da Tarefa",
    "completed": false
  },
]
```

- Resposta de exemplo:

```json
{
  "message": "Tarefa criada com sucesso."
}
```

### PUT `/tasks/:id`

- Descrição: Atualiza uma tarefa existente.
- Parâmetros da URL: `id` da tarefa a ser atualizada.
- Corpo da solicitação:

```json
{
  "name": "Novo nome da Tarefa",
  "completed": true
}
```

- Resposta de exemplo:

```json
{
  "message": "Tarefa deletada com sucesso."
}
```

## Tecnologias Utilizadas
- Express.js
- SQLite
