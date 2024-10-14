// /server.js
const express = require('express');
const dataRoutes = require('./src/routes/DataRoutes');

const app = express();

app.use(express.json());
app.use('/api', dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {});
