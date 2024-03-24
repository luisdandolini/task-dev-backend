import express from "express";
import db from "../database/db.js";

const router = express.Router();
router.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      console.error('Erro ao consultar dados:', err.message);
      res.status(500).json({ error: 'Erro ao buscar as tarefas.' });
    } else {
      console.log('Dados consultados com sucesso:');
      console.log(rows);
      res.json(rows); 
    }
  });
});

router.post('/tasks', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'O nome da tarefa é obrigatório.' });
  }

  db.run('INSERT INTO tasks (name) VALUES (?)', [name], function(err) {
    if (err) {
      console.error('Erro ao inserir dados:', err.message);
      return res.status(500).json({ error: 'Erro ao criar a tarefa.' });
    }
    
    console.log('Tarefa criada com sucesso:', name);
    res.status(201).json({ message: 'Tarefa criada com sucesso.' });
  });
});

router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'O nome da tarefa é obrigatório.' });
  }

  db.run('UPDATE tasks SET name = ? WHERE id = ?', [name, id], function(err) {
    if (err) {
      console.error('Erro ao atualizar dados:', err.message);
      return res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
    }
    
    console.log('Tarefa atualizada com sucesso:', name);
    res.json({ message: 'Tarefa atualizada com sucesso.' });
  });
});

router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {
    if (err) {
      console.error('Erro ao deletar dados:', err.message);
      return res.status(500).json({ error: 'Erro ao deletar a tarefa.' });
    }
    
    console.log('Tarefa deletada com sucesso:', id);
    res.json({ message: 'Tarefa deletada com sucesso.' });
  });
});

export default router;