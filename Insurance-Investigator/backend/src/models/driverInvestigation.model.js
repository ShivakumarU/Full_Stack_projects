import mongoose from "mongoose";

const DriverInvestigationSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
    ref: "insuredDetails"
  },

  driverInVehicle: { type: String, enum: ["yes", "no"], required: true },

  driverInjured: { type: String, enum: ["yes", "no"] },
  driverMedicalRecords: { type: String, enum: ["available", "not available"] },
  driverInjuriesCorelating: { type: String, enum: ["yes", "no"] },

  driverGoogleTimeline: {
    type: String,
    enum: [
      "corelating",
      "not co-relating",
      "No places visited",
      "drivernot-cooperated",
      "basic mobile"
    ],
    required: true
  },

  driverTimelinePhotosAttached: { type: String, enum: ["yes", "no"] },

  driverAccidentPhotosMobile: {
    type: String,
    enum: ["available", "not available", "Basic mobile"]
  },

  driverAccidentPhotosDate: {
    type: String,
    enum: ["On the same day", "Before accident date", "After the accident date"]
  },

  driverPhotosSource: {
    type: String,
    enum: [
      "Camera files",
      "Whatsapp files",
      "SnapChat files",
      "Instagram files",
      "Other person sent in Whatsapp"
    ]
  },

  driverPhotosSenderName: { type: String },
  driverPhotosSenderNumber: { type: String },

  driverDL: {
    type: String,
    enum: [
      "having valid DL",
      "having invalid DL",
      "not having DL",
      "having LLR only",
      "not provided"
    ],
    required: true
  },

  driverCallData: {
    type: String,
    enum: ["Match", "Mismatch", "Not available"],
    required: true
  },

  addAnything: { type: String, enum: ["yes", "no"] },
  additionalComments: { type: String }

}, {
  timestamps: true
});

export default mongoose.model("DriverInvestigation", DriverInvestigationSchema);
