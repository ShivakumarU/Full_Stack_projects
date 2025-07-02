import GarageVerification from "../models/garageVerification.model.js";


export const createGarageVerification = async (req, res) => {
    try {
        const doc = new GarageVerification(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating Garage verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getGarageVerificationByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await GarageVerification.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching Garage verification by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllGarageVerification = async (req, res) => {
    try {
        const allDetails = await GarageVerification.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching Garage verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateGarageVerification = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await GarageVerification.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating Garage verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteGarageVerification = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await GarageVerification.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting Garage verification:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}