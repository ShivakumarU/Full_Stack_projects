import mongoose from "mongoose";

const InsuredStatementSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },

  insuredType: {
    type: String,
    enum: ["insured", "insured cum driver"],
    required: true,
  },

  insuredVerified: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },

  insuredNotVerifiedReason: { type: String },

  insuredPhotosUpload: {
    type: [String], 
  },

  insuredGender: {
    type: String,
    enum: ["he", "she"],
    required: true,
  },

  insuredNameInInsuredStatement: { type: String },
  insuredOccupation: { type: String },

  ivNumberInInsuredStatement: { type: String },
  ivUse: {
    type: String,
    enum: ["personal work", "commercial use"],
  },

  accidentDateInInsuredStatement: { type: String },
  accidentTimeInInsuredStatement: { type: String },

  travellingPersonRelationInInsuredStatement: { type: String },
  driverGender: {
    type: String,
    enum: ["he", "she"],
  },
  travellingPersonNameInInsuredStatement: { type: String },

  accidentPlaceInInsuredStatement: { type: String },
  travelFromInsuredStatement: { type: String },
  travelToInsuredStatement: { type: String },
  accidentMannerInInsuredStatement: { type: String },
  totalPersonsInInsuredStatement: { type: Number },

  anyInjuryInInsured: {
    type: String,
    enum: ["No one injured", "injured"],
  },
  injuredNameRelationInInsured: { type: String },

  policeCaseInInsured: {
    type: String,
    enum: ["yes", "no", "Panchanama"],
  },
  policeStationNameInInsured: { type: String },

  ivDriverNameInInsured: { type: String },
  driverDLInInsured: {
    type: String,
    enum: [
      "having valid DL",
      "having invalid DL",
      "not having DL",
      "having LLR only",
    ],
  },

  statementGivenInInsured: {
    type: String,
    enum: ["yes", "no"],
  },
  withdrawOfClaim : {type:String, enum: ["yes", "no"]},
  withdrawAdditionalComments: { type: String }

}, {
  timestamps: true,
});

export default mongoose.model("InsuredStatement", InsuredStatementSchema);
