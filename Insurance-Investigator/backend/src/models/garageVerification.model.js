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

  garageNotVisitedReason: {
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

  bloodMarks: {
    type: String,
    enum: ["yes", "no"]
  },

  bloodMarksDescription: {
    type: String,
  },

  garagePhotosTaken: {
    type: String,
    enum: ["yes", "no"]
  },

  garagePhotosUpload: {
    type: [String] 
  },

  garagePhotosNotTakenReason: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("GarageVerification", GarageVerificationSchema);
