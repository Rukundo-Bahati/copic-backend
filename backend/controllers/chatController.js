import ChatModel from "../models/chatModel.js";

export const createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      // members: { $all: [req.params.userId] },
    });
    console.log(req.params.userId);
    res.status(200).json(chat);
    console.log(chat);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    if(!chat){
      console.log("No current Chat")
    }
    res.status(200).json(chat)
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
