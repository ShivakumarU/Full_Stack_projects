import mongoose from "mongoose";


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
    occupantFindings: {type: String},
    occupantsAddAnything: { type: String, enum: ["yes", "no"] },
    occupantsAdditionalComments: { type: String }

  },
  {
    timestamps: true
  }
);

export default mongoose.model("Form8Occupant", Form8OccupantSchema);
