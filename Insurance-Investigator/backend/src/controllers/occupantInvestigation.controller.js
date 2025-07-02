import Form8Occupant from "../models/occupantInvestigation.model.js";

export const createForm8Occupant = async (req, res) => {
    try {
        const doc = new Form8Occupant(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error("Error creating Form8Occupant:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getForm8OccupantByID = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const getData = await Form8Occupant.findOne({ caseNumber });
        if (!getData) {
        return res.status(404).json({ message: "No record found" });
        }
        res.status(200).json(getData);

    } catch (error) {
        console.error("Error fetching Form8Occupant by ID :", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const getAllForm8Occupant = async (req, res) => {
    try {
        const allDetails = await Form8Occupant.find();
        res.status(200).json(allDetails);
    } catch (error) {
        console.error("Error fetching Form8Occupant:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const updateForm8Occupant = async (req, res) => {
    try {
    const { caseNumber } = req.params;
    const updateDetails = await Form8Occupant.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
    } catch (error) {
        console.error("Error updating Form8Occupant:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}


export const deleteForm8Occupant = async (req, res) => {
    try {
            const { caseNumber } = req.params;
            const deleteDetails = await Form8Occupant.findOneAndDelete({ caseNumber }); 
        
            if (!deleteDetails) {
              return res.status(404).json({ message: "No record found to delete" });
            }
        
            res.status(200).json(deleteDetails);
    } catch (error) {
        console.error("Error deleting Form8Occupant:", error);
        res.status(500).json({ message: "Server Error", error });
    }
}