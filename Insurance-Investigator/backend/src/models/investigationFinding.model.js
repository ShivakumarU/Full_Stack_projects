import mongoose from "mongoose";

const InvestigationFindingInsuredSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails",
  },


  insuredInVehicle: { type: String, enum: ["yes", "no"], required: true },

 
  insuredInjured: { type: String, enum: ["yes", "no"] },
  insuredHospitalized: {type: String,enum: ['yes', 'no'],},
  insuredHospitalName: {type: String},
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
      "damaged mobile"
    ],
    required: true,
  },

  insuredTimelinePhotosAttached: { type: String, enum: ["yes", "no"] },

  insuredAccidentPhotosInMobile: {
    type: String,
    enum: ["available", "not available", "not co-operated"],
  },

  insuredPhotosDateInfo: {
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

  insuredDLStatus: {
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

  insuredAddAnything: { type: String, enum: ["yes", "no"] },
  insuredAdditionalComments: { type: String },
},
{ timestamps: true });

export default mongoose.model("InvestigationFindingInsured", InvestigationFindingInsuredSchema);
