import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});