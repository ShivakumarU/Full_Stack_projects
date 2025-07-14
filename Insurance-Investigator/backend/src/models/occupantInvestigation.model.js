import mongoose from "mongoose";

const OccupantSchema = new mongoose.Schema({
  occupantName: { type: String, required: true },
  occupantInjured: { type: String, enum: ["yes", "no"], required: true },

  medicalRecords: { type: String, enum: ["available", "not available"] },
  injuriesCorelating: { type: String, enum: ["yes", "no"] },

  occupantGoogleTimeline: {
    type: String,
    enum: [
      "corelating",
      "not co-relating",
      "No places visited",
      "driver not-cooperated",
      "basic mobile",
      "damaged mobile"
    ],
    required: true,
  },

  timelinePhonePhotosAttached: { type: String, enum: ["yes", "no"] },

  occupantsAccidentPhotosInMobile: {
    type: String,
    enum: ["available", "not available", "not co-operated"]
  },

  accidentPhotoDateInfo: {
    type: String,
    enum: ["On the same day", "Before accident date", "After the accident date"]
  },

  occupantsPhotosNoticedIn: {
    type: String,
    enum: [
      "Camera files",
      "Whatsapp files",
      "SnapChat files",
      "Instagram files",
      "Other person sent in Whatsapp"
    ]
  },

  occupantsphotosSenderName: { type: String },
  occupantsPhotosSenderNumber: { type: String },

  occupantDLStatus: {
    type: String,
    enum: [
      "having valid DL",
      "having invalid DL",
      "not having DL",
      "having LLR only",
      "not provided"
    ]
  },

  occupantCallData: {
    type: String,
    enum: ["Match", "Mismatch", "Not available"]
  },

  occupantsAddAnything: { type: String, enum: ["yes", "no"] },
  occupantsAdditionalComments: { type: String }
});

const Form8OccupantSchema = new mongoose.Schema(
  {
    caseNumber: {
      type: String,
      required: true,
      ref: "insuredDetails"
    },

    anyOccupantInIV: { type: String, enum: ["yes", "no"], required: true },

    anyOccupantVerified: { type: String, enum: ["yes", "no"], required: true },
    occupantNotVerifiedReason: { type: String },
    occupantsVerifiedCount: { type: Number },

    occupants: [OccupantSchema]
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Form8Occupant", Form8OccupantSchema);
