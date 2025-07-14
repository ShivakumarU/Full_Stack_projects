import mongoose from "mongoose";

const DriverInvestigationSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails"
  },

  driverInVehicle: { type: String, enum: ["yes", "no"], required: true },
  driverInjured: { type: String, enum: ["yes", "no"] },
  driverHospitalized : {type: String, enum: ["yes", "no"]},
  driverHospitalName: {type: String},
  driverMedicalRecords: { type: String, enum: ["available", "not available"] },
  driverInjuriesCorelating: { type: String, enum: ["yes", "no"] },

  driverGoogleTimeline: {
    type: String,
    enum: [
      "corelating",
      "not co-relating",
      "no places visited",
      "driver not-cooperated",
      "basic mobile",
      "damaged mobile"
    ],
    required: true
  },

  driverTimelinePhotosAttached: { type: String, enum: ["yes", "no"] },

  driverAccidentPhotosInMobile: {
    type: String,
    enum: ["available", "not available", "driver not-cooperated"]
  },

  driverAccidentPhotosDateInfo: {
    type: String,
    enum: ["on the same day", "before accident date", "after accident date"]
  },

  driverPhotosSource: {
    type: String,
    enum: [
      "camera files",
      "whatsapp files",
      "snapchat files",
      "instagram files",
      "other person sent in whatsapp"
    ]
  },

  driverPhotosSenderName: { type: String },
  driverPhotosSenderNumber: { type: String },

  driverDLStatus: {
    type: String,
    enum: [
      "is having valid DL",
      "is having invalid DL",
      "is not having DL",
      "is having LLR only",
      "not provided"
    ],
    required: true
  },

  driverCallData: {
    type: String,
    enum: ["match", "mismatch", "not available"],
    required: true
  },

  driverAddAnything: { type: String, enum: ["yes", "no"] },
  driverAdditionalComments: { type: String }

}, {
  timestamps: true
});

export default mongoose.model("DriverInvestigation", DriverInvestigationSchema);
