import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    roomId: ObjectId, // Reference to the Room in which the message was sent
    sessionId: ObjectId, // Reference to the CallSession in which the message was sent
    userId: ObjectId, // Reference to the User who sent the message
    message: String, // Content of the message
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model("Message", messageSchema);
