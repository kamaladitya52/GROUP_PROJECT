import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema(
  {
    roomName: String, // Name or identifier for the room
    participants: [ObjectId], // Array of User IDs in the room
  },
  {
    timestamps: true,
  }
);

export const Room = mongoose.model("Room", roomSchema);
