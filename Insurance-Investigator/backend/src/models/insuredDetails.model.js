import mongoose from "mongoose";

const insuredDetailsSchema = new mongoose.Schema({

  insuranceCompany: {
    type: String,
    enum: [
      "TATA AIG General Insurance Co Ltd",
      "Chola MS General Insurance Co Ltd",
      "Reliance General Insurance Co Ltd",
      "Digit General Insurance Co Ltd"
    ],
    required: true,
  },

  caseNumber: { type: String, required: true },
  refNumber: {type:String, required:true},
  claimNumber: { type: String, required: true },
  policyNumber: { type: String, required: true },

  policyStartDate: { type: String, required: true },
  policyEndDate: { type: String, required: true },

  insuredName: { type: String, required: true },
  insuredAddress: { type: String, required: true },

  accidentDate: { type: String, required: true },
  accidentTime: { type: String, required: true },

  ivDriver: { type: String, required: true }, 
  claimIntimationDate: { type: String, required: true },

  ivNumber: { type: String, required: true },

  vehicleType: {
    type: String,
    enum: [
      "two wheeler",
      "three wheeler",
      "private car",
      "cab",
      "lorry",
      "goods vehicle",
      "bus",
      "miscellaneous vehicle"
    ],
    required: true,
  },

  invoiceAmount: { type: Number, required: true },
  lossLocation: { type: String, required: true },
  causeOfLoss: { type: String, required: true },

}, { timestamps: true });

export default mongoose.model("InsuredDetails", insuredDetailsSchema);
