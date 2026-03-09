const List = require("../models/List");
exports.createList = async (req, res) => {
  try {
    const list = await List.create({
      title: req.body.title,
      boardId: req.body.boardId
    });
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLists = async (req, res) => {
  try {
    const lists = await List.find({ boardId: req.params.boardId });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};