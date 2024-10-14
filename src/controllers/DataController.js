class DataController {
  constructor(dataService) {
    this.dataService = dataService;
  }

  async getData(req, res) {
    const { path } = req.params;
    try {
      const data = await this.dataService.fetchData(path);
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = DataController;