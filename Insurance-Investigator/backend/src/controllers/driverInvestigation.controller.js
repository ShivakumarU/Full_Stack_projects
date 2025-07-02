import DriverInvestigation from "../models/driverInvestigation.model.js";

export const createDriverInvestigation = async (req, res) => {
    try {
        const doc = new DriverInvestigation(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating DriverInvestigation:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getDriverInvestigationByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await DriverInvestigation.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching DriverInvestigation by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllDriverInvestigation = async (req, res) => {
    try {
        const allDetails = await DriverInvestigation.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching DriverInvestigation:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateDriverInvestigation = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await DriverInvestigation.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating DriverInvestigation:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteDriverInvestigation = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await DriverInvestigation.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting DriverInvestigation:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}