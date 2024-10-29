import mongoose, { Schema } from "mongoose";

const peerConnectionSchema = new Schema(
  {
    sessionId: ObjectId, // Reference to the CallSession in which the connection was created
    callerId: ObjectId, // Reference to the User who initiated the connection
    receiverId: ObjectId, // Reference to the User receiving the connection
    status: String, // Status of the connection, e.g., "connected", "disconnected"
  },
  {
    timestamps: true,
  }
);

export const PeerConnection = mongoose.model(
  "PeerConnection",
  peerConnectionSchema
);
