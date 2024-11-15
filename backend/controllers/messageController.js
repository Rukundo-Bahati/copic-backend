import MessageModel from "../models/messageModel.js";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new MessageModel({ chatId, senderId, text });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await MessageModel.find({ chatId })
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
};
