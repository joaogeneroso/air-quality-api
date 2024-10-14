// /server.js
const express = require('express');
const dotenv = require('dotenv');
const dataRoutes = require('./src/routes/DataRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
