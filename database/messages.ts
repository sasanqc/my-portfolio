import mongoose from "mongoose";
const { Schema, models } = mongoose;
const messageSchema = new Schema({
  name: String,
  email: { type: String, require: true },
  message: String,
});

const Message = models.Message || mongoose.model("Message", messageSchema);
export default Message;
