const Card = require("../models/Card");
exports.createCard = async (req, res) => {
  try {
    const card = await Card.create({
      title: req.body.title,
      description: req.body.description,
      listId: req.body.listId,
      dueDate: req.body.dueDate
    });
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({ listId: req.params.listId });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};