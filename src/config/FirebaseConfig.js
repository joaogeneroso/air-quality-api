const admin = require('firebase-admin');
const serviceAccount = require('../../keys/qualidade-ar-370f6-firebase-adminsdk-6lr3s-1ed80a9f3b.json'); // Caminho para o arquivo JSON

class FirebaseConfig {
  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://qualidade-ar-370f6-default-rtdb.firebaseio.com"
      });
    }
  }

  getDatabase() {
    return admin.database();
  }
}

module.exports = FirebaseConfig;