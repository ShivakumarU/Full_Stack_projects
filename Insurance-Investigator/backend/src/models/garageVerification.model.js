import mongoose from "mongoose";

const GarageVerificationSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails"
  },

  garageVisited: {
    type: String,
    enum: ["yes", "no"],
    required: true
  },

  notVisitedReason: {
    type: String
  },

  damagesMatching: {
    type: String,
    enum: ["co-relating", "not co-relating"]
  },

  multipleDamages: {
    type: String,
    enum: ["yes", "no"]
  },

  photosTaken: {
    type: String,
    enum: ["yes", "no"]
  },

  photoUpload: {
    type: String 
  },

  noPhotoReason: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("GarageVerification", GarageVerificationSchema);
