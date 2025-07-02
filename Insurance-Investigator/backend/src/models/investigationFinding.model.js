import mongoose from "mongoose";

const InvestigationFindingInsuredSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },


  insuredInVehicle: { type: String, enum: ["yes", "no"], required: true },

 
  insuredInjured: { type: String, enum: ["yes", "no"] },
  insuredMedicalRecords: { type: String, enum: ["available", "not available"] },
  insuredInjuriesCorelating: { type: String, enum: ["yes", "no"] },


  insuredGoogleTimeline: {
    type: String,
    enum: [
      "corelating",
      "not co-relating",
      "No places visited",
      "Insured not-cooperated",
      "basic mobile",
    ],
    required: true,
  },

  insuredTimelinePhotosAttached: { type: String, enum: ["yes", "no"] },

  insuredAccidentPhotosMobile: {
    type: String,
    enum: ["available", "not available", "Basic mobile"],
  },

  insuredAccidentPhotosDate: {
    type: String,
    enum: ["On the same day", "Before accident date", "After the accident date"],
  },
  insuredPhotosSource: {
    type: String,
    enum: [
      "Camera files",
      "Whatsapp files",
      "SnapChat files",
      "Instagram files",
      "Other person sent in Whatsapp",
    ],
  },
  insuredPhotosSenderName: { type: String },
  insuredPhotosSenderNumber: { type: String },

  insuredDL: {
    type: String,
    enum: [
      "having valid DL",
      "having invalid DL",
      "not having DL",
      "having LLR only",
      "not provided",
    ],
    required: true,
  },

  insuredCallData: { type: String, enum: ["Match", "Mismatch", "Not available"] },

  addAnything: { type: String, enum: ["yes", "no"] },
  additionalComments: { type: String },
},
{ timestamps: true });

export default mongoose.model("InvestigationFindingInsured", InvestigationFindingInsuredSchema);
