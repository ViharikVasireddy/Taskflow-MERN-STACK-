const Board = require("../models/Board");
exports.createBoard = async(req,res)=>{
  const board = await Board.create({
    title:req.body.title,
    createdBy:req.user.id
  });
  res.json(board);
};
exports.getBoards = async(req,res)=>{
  const boards = await Board.find();
  res.json(boards);
};