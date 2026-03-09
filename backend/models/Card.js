const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  dueDate: Date
});

module.exports = mongoose.model("Card", cardSchema);