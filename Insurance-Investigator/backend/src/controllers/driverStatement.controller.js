import DriverStatement from "../models/driverStatement.model.js";

export const createDriverStatement = async (req, res) => {
    try {
        const doc = new DriverStatement(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating driver statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getDriverStatementByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await DriverStatement.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching driver statement by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllDriverStatement = async (req, res) => {
    try {
        const allDetails = await DriverStatement.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching driver statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateDriverStatement = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await DriverStatement.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating driver statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteDriverStatement = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await DriverStatement.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting driver statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}