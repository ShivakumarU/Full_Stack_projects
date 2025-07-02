import mongoose from "mongoose";

const InsuredStatementSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },

  insuredVerified: { type: String, enum: ["yes", "no"], required: true },
  insuredNotVerifiedReason: { type: String }, 
  insuredVisitPhoto: { type: String }, 
  insuredType: {
    type: String,
    enum: ["insured", "insured cum driver"],
    required: true,
  },

  insuredGender: { type: String, enum: ["he", "she"], required: true },
  insuredName: { type: String }, 
  insuredOccupation: { type: String },

  ivNumber: { type: String }, 
  ivUsingFor: {
    type: String,
    enum: ["personal work", "commercial use"],
  },

  accidentDate: { type: String }, 
  accidentTime: { type: String }, 

  travellingPerson: {
    type: String,
    enum: [
      "insured",
      "insured husband",
      "insured wife",
      "insured brother",
      "insured sister",
      "insured son",
      "insured daughter",
      "insured neighbor",
      "insured friend",
      "driver",
      "insured colleague",
      "insured relatives",
    ],
  },

  driverGender: { type: String, enum: ["he", "she"] },
  travellingPersonName: { type: String },

  accidentPlace: { type: String },
  travellingFrom: { type: String },
  travellingTo: { type: String },
  accidentManner: { type: String },
  totalPersonsTravelling: { type: Number },

  injuredPerson: {
    type: String,
    enum: [
      "No one injured",
      "IV driving person injured",
      "IV occupant injured",
      "IV pillion rider injured",
      "TP driving person injured",
      "TP pillion rider injured",
      "TP occupant injured",
    ],
  },
  injuredNameIfAny: { type: String },

  policeCaseFiled: { type: String, enum: ["yes", "no"] },
  policeStationName: { type: String },

  ivDriverName: { type: String },
  ivDriverDL: {
    type: String,
    enum: [
      "having valid DL",
      "having invalid DL",
      "not having DL",
      "having LLR only",
    ],
  },

  statementGiven: { type: String, enum: ["yes", "no"] },
}, {
  timestamps: true,
});

export default mongoose.model("InsuredStatement", InsuredStatementSchema);
