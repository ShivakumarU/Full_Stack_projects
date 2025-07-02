import mongoose from "mongoose";

const otherDetailsSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },

  overSeating: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  evidence: {
    type: String,
  },

  policeCaseFiled: {
    type: String,
    enum: ["yes", "no", "panchanama-only"],
    required: true,
  },
  policeStationName: {
    type: String,
  },
  psDriverName: {
    type: String,
  },
  psAccidentDate: {
    type: String,
  },

  insuredNameMatchInRCExtractPolicy: {
    type: String,
    enum: ["matching", "not matching"],
    required: true,
  },
  insuredNameMismatchReason: {
    type: String,
  },

  tsEChallan: {
    type: String,
    enum: ["No pending challan", "No suspects found", "old damages noted"],
    required: true,
  },

  thirdPartyVehicleInvolved: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  thirdPartyDetails: {
    type: String,
  },

  anyOtherInfo: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  otherInfoDescription: {
    type: String,
  },

  suspects: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  suspectsEvidence: {
    type: String,
  }
}, {
  timestamps: true,
});

export default mongoose.model("OtherDetails", otherDetailsSchema);
