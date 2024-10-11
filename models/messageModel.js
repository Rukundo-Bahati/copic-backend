import mongoose from "mongoose";
const MessageSchema = mongoose.Schema(
  {
    chatId: { type: String, required: true, index: true },
    senderId: { type: String, required: true, index: true }, //to optimize querying large datasets (e.g., retrieving all messages for a chat).
    text: { type: String, required: true },
    mediaUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;
