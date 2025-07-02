import mongoose from "mongoose";

const SpotVerificationSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },

  spotVerified: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },

  notVerifiedReason: {
    type: String,
  },

  spotMatching: {
    type: String,
    enum: ["co-relating", "not co-relating"],
  },

  photosTaken: {
    type: String,
    enum: ["yes", "no"],
  },

  photoUpload: {
    type: String, 
  },

  noPhotoReason: {
    type: String,
  }
}, {
  timestamps: true
});

export default mongoose.model("SpotVerification", SpotVerificationSchema);
