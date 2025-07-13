import mongoose from "mongoose";

const DriverStatementSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails"
  },

  driverVerified: {
    type: String,
    enum: ["yes", "no"],
    required: true
  },

  driverNotVisitReason: {
    type: String
  },

  driverPhotosTaken: {
    type: String,
    enum: ["yes", "no"]
  },

  driverPhotosUpload: {
    type: [String] 
  },

  driverGenderInDriver: {
    type: String,
    enum: ["he", "she"]
  },

  driverNameInDriver: {
    type: String
  },

  driverOccupation: {
    type: String
  },

  travelFromInDriver: {
    type: String
  },

  travelToInDriver: {
    type: String
  },

  carNoInDriver: {
    type: String
  },

  ivTotalPersonsInDriver: {
    type: Number
  },

  accidentPlaceInDriver: {
    type: String
  },

  accidentDateInDriver: {
    type: String
  },

  accidentTimeInDriver: {
    type: String
  },

  accidentMannerInDriver: {
    type: String
  },

  whoIsInjuredInDriver: {
    type: String,
    enum: ["no one injured", "injured"]
  },

  injuredNameRelationInDriver: {
    type: String
  },

  policeCaseInDriver: {
    type: String,
    enum: ["yes", "no","Panchanama"]
  },

  policeStationNameInDriver: {
    type: String
  },

  carDrivenByInDriver: {
    type: String,
    enum: ["himself", "herself", "other-person"]
  },

  driverNameInDriverStatement: {
    type: String
  },

  driverDLInDriver: {
    type: String,
    enum: [
      "having valid DL",
      "having invalid DL",
      "not having DL",
      "having LLR only"
    ]
  },

  statementGivenInDriver: {
    type: String,
    enum: ["yes", "no"]
  }

}, {
  timestamps: true
});

export default mongoose.model("DriverStatement", DriverStatementSchema);
