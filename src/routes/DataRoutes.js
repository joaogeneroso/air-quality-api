const express = require('express');
const router = express.Router();
const FirebaseConfig = require('../config/FirebaseConfig');
const FirebaseService = require('../services/FirebaseService');
const DataService = require('../services/DataService');
const DataController = require('../controllers/DataController');

const firebaseConfig = new FirebaseConfig();
const firebaseService = new FirebaseService(firebaseConfig);
const dataService = new DataService(firebaseService);
const dataController = new DataController(dataService);

router.get('/data/:path', (req, res) => dataController.getData(req, res));

module.exports = router;