const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const serviceAccount = require('../../keys/qualidade-ar-370f6-firebase-adminsdk-6lr3s-1ed80a9f3b.json');

class FirebaseConfig {
  constructor() {
    if (!admin.apps.length) {
      const privateKeysPath = path.resolve(__dirname, '../../keys/PrivateKeys.json');
      const privateKeysFile = fs.readFileSync(privateKeysPath);
      const privateKeys = JSON.parse(privateKeysFile);
      
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: privateKeys.databaseURL
      });
    }
  }

  getDatabase() {
    return admin.database();
  }
}

module.exports = FirebaseConfig;