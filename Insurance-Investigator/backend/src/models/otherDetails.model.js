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
  overSeatingEvidence: {
    type: String,
  },

  policeCaseFiledOthers: {
    type: String,
    enum: ["yes", "no", "panchanama-only"],
    required: true,
  },
  policeStationNameOthers: {
    type: String,
  },
  asPerPsDriverName: {
    type: String,
  },
  asPerPsAccidentDate: {
    type: String,
  },

  insuredNameMatchInRC: {
    type: String,
    enum: ["matching", "not matching"],
    required: true,
  },
  insuredNameMismatchReason: {
    type: String,
  },

  tsEChallan: {
    type: String,
    enum: ["no pending challan", "no suspects found", "old damages"],
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

  feildFastag: {
    type: String,
    enum: ["no suspects", "suspects"]
  },

  breakInPolicy: {
    type: String,
    enum: ["yes", "no"]
  },
  drunkAndDrive: {
    type: String,
    enum: ["yes", "no"]
  },
  conclusionOpinion: {
    type: String,
    enum: ["payable", "repudiation"],
    required: true,
  },
  suspectsEvidenceReason: {
    type: String,
  }
}, {
  timestamps: true,
});

export default mongoose.model("OtherDetails", otherDetailsSchema);
