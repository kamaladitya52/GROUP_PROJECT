import mongoose, { Schema } from "mongoose";

const callSessionSchema = new Schema(
  {
    roomId: ObjectId, // Reference to the Room where the call is happening
    hostId: ObjectId, // Reference to the User who created the call
    startTime: Date, // Timestamp of when the call started
    endTime: Date, // Timestamp of when the call ended
    activeParticipants: [ObjectId], // Array of User IDs who joined the call
  },
  {
    timestamps: true,
  }
);

export const CallSession = mongoose.model("CallSession", callSessionSchema);
