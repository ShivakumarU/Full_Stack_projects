import InvestigationFindingInsured from "../models/investigationFinding.model.js";

export const createInvestigationFindingInsured = async (req, res) => {
    try {
        const doc = new InvestigationFindingInsured(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating InvestigationFindingInsured:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getInvestigationFindingInsuredByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await InvestigationFindingInsured.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching InvestigationFindingInsured by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllInvestigationFindingInsured = async (req, res) => {
    try {
        const allDetails = await InvestigationFindingInsured.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching InvestigationFindingInsured:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateInvestigationFindingInsured = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await InvestigationFindingInsured.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating InvestigationFindingInsured:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteInvestigationFindingInsured = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await InvestigationFindingInsured.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting InvestigationFindingInsured:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}