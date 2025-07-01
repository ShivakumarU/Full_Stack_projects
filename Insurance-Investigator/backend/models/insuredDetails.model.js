import mongoose from "mongoose";

const insuredDetailsSchema = new mongoose.Schema({

  insuranceCompany: {
    type: String,
    enum: [
      "TATA AIG General Insurance Co Ltd",
      "Chola MS General Insurance Co Ltd",
      "Reliance General Insurance Co Ltd"
    ],
    required: true,
  },

  caseNumber: { type: String, required: true },
  claimNumber: { type: String, required: true },
  policyNumber: { type: String, required: true },

  policyStartDate: { type: Date, required: true },
  policyEndDate: { type: Date, required: true },

  insuredName: { type: String, required: true },
  insuredAddress: { type: String, required: true },

  accidentDateTime: { type: Date, required: true },

  ivDriver: { type: String, required: true }, 
  claimIntimationDate: { type: Date, required: true },

  ivNumber: { type: String, required: true },

  vehicleType: {
    type: String,
    enum: [
      "Two Wheeler",
      "Three Wheeler",
      "Private Car",
      "Cab",
      "Lorry",
      "Goods Vehicle",
      "Bus",
      "Miscellaneous Vehicle"
    ],
    required: true,
  },

  invoiceAmount: { type: String, required: true },
  lossLocation: { type: String, required: true },
  causeOfLoss: { type: String, required: true },

}, { timestamps: true });

export default mongoose.model("insuredDetails", insuredDetailsSchema);
