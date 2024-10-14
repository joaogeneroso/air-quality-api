class DataService {
  constructor(firebaseService) {
    this.firebaseService = firebaseService;
  }

  async fetchData(path) {
    return await this.firebaseService.getData(path);
  }
}

module.exports = DataService;