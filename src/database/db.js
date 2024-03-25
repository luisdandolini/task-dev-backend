import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error('Erro ao criar o banco de dados em memória:', err.message);
  } else {
    console.log('Banco de dados em memória criado com sucesso.');
    createTable(); 
  }
});

function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    completed BOOLEAN DEFAULT 0
  )`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela:', err.message);
    } else {
      console.log('Tabela "tasks" criada com sucesso.');
    }
  });
}

export default db;