const express = require('express');
const router = express.Router();
const FirebaseConfig = require('../config/FirebaseConfig');

const firebaseConfig = new FirebaseConfig();
const db = firebaseConfig.getDatabase();

router.get('/data', async (req, res) => {
  try {
    const ref = db.ref('/');
    
    ref.once('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Nenhum dado encontrado no Realtime Database' });
      }
    }, (errorObject) => {
      res.status(500).json({ message: `Erro ao ler dados: ${errorObject.code}` });
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao acessar o Firebase', error });
  }
});

module.exports = router;