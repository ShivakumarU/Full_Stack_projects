import mongoose from "mongoose";

const DriverStatementSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },

  photosTaken: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  photoUpload: { type: String }, 
  noPhotoReason: { type: String }, 
  driverGender: { type: String, enum: ["he", "she"], required: true },
  driverName: { type: String, required: true },
  driverOccupation: { type: String },

  travellingFrom: { type: String },
  travellingTo: { type: String },
  travellingCarNo: { type: String },

  totalPersonsInIV: { type: Number },

  accidentPlace: { type: String },
  accidentDate: { type: String },
  accidentTime: { type: String },
  accidentManner: { type: String },

  whoInjured: {
    type: String,
    enum: [
      "No one injured",
      "All persons in IV injured",
      "IV driving person injured",
      "IV occupant injured",
      "IV pillion rider injured",
      "TP driving person injured",
      "All persons in TP injured",
      "TP pillion rider injured",
      "TP occupant injured"
    ]
  },
  injuredNameIfAny: { type: String },

  policeCaseFiled: { type: String, enum: ["yes", "no"] },
  policeStationName: { type: String },

  carDrivenBy: {
    type: String,
    enum: ["himself", "herself", "other-person"],
    required: true
  },
  otherDriverName: { type: String },

  driverNameAsPerStatement: { type: String },

  ivDriverDL: {
    type: String,
    enum: ["having valid DL", "having invalid DL", "not having DL", "having LLR only"]
  },

  statementGiven: { type: String, enum: ["yes", "no"] }
}, {
  timestamps: true
});

export default mongoose.model("DriverStatement", DriverStatementSchema);
