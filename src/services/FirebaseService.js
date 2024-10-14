class FirebaseService {
  constructor(firebaseConfig) {
    this.db = firebaseConfig.getDatabase();
  }

  async getData(path) {
    try {
      const snapshot = await this.db.ref(path).once('value');
      return snapshot.val();
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}

module.exports = FirebaseService;