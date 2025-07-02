import SpotVerification from "../models/spotVerification.model.js";

export const createSpotVerification = async (req, res) => {
    try {
        const doc = new SpotVerification(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating spot verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getSpotVerificationByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await SpotVerification.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching spot verification by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllSpotVerification = async (req, res) => {
    try {
        const allDetails = await SpotVerification.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching spot verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateSpotVerification = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await SpotVerification.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating spot verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteSpotVerification = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await SpotVerification.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting spot verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}