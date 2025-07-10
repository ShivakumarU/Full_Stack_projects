import mongoose from "mongoose";

const InvestigationFindingInsuredSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },


  insuredInVehicle: { type: String, enum: ["yes", "no"], required: true },

 
  insuredInjured: { type: String, enum: ["yes", "no"] },
  hospitalized: {type: String,enum: ['yes', 'no'],},
  hospitalName: {type: String},
  insuredMedicalRecords: { type: String, enum: ["available", "not available"] },
  insuredInjuriesCorelating: { type: String, enum: ["yes", "no"] },


  insuredGoogleTimeline: {
    type: String,
    enum: [
      "corelating",
      "not co-relating",
      "no places visited",
      "insured not-cooperated",
      "basic mobile",
    ],
    required: true,
  },

  insuredTimelinePhotosAttached: { type: String, enum: ["yes", "no"] },

  insuredAccidentPhotosInMobile: {
    type: String,
    enum: ["available", "not available", "basic mobile"],
  },

  photosDateInfo: {
    type: String,
    enum: ["on the same day", "before accident date", "after accident date"],
  },
  insuredPhotosSource: {
    type: String,
    enum: [
      "camera files",
      "whatsapp files",
      "snapchat files",
      "instagram files",
      "other person sent in whatsapp",
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

  insuredCallData: { type: String, enum: ["match", "mismatch", "not available"] },

  addAnything: { type: String, enum: ["yes", "no"] },
  additionalComments: { type: String },
},
{ timestamps: true });

export default mongoose.model("InvestigationFindingInsured", InvestigationFindingInsuredSchema);
