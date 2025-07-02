import InsuredStatement from "../models/insuredStatement.model.js";

export const createInsuredStatement = async (req, res) => {
    try {
        const doc = new InsuredStatement(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating insured statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getInsuredStatementByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await InsuredStatement.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching insured statement by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllInsuredStatement = async (req, res) => {
    try {
        const allDetails = await InsuredStatement.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching insured statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateInsuredStatement = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await InsuredStatement.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating insured statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteInsuredStatement = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await InsuredStatement.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting insured statement:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}