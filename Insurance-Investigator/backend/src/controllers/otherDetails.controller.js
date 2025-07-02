import OtherDetails from "../models/otherDetails.model.js";

export const createOtherDetails = async (req, res) => {
  try {
    const doc = new OtherDetails(req.body);

    doc.caseNumber = doc._id.toString();

    await doc.save();

    res.status(201).json(doc);
  } catch (error) {
    console.error("Error creating Other details:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};


export const getOtherDetailsByID = async (req, res) => {
  try {
    const { caseNumber } = req.params;
    const details = await OtherDetails.findOne({ caseNumber }); 

    if (!details) {
      return res.status(404).json({ message: "No record found" });
    }

    res.status(200).json(details);
  } catch (error) {
    console.error(" Error fetching Other details by ID:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getAllOtherDetails = async (req,res) =>{
    try {
        const allDetails = await OtherDetails.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error(" Error fetching Other details:", error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateOtherDetails = async (req, res) => {
  try {
    const { caseNumber } = req.params;
    const updateDetails = await OtherDetails.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
  } catch (error) {
    console.error("Error updating Other details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const deleteOtherDetails = async (req, res) => {
  try {
    const { caseNumber } = req.params;
    const deleteDetails = await OtherDetails.findOneAndDelete({ caseNumber }); 

    if (!deleteDetails) {
      return res.status(404).json({ message: "No record found to delete" });
    }

    res.status(200).json(deleteDetails);
  } catch (error) {
    console.error("Error deleting Other details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
