import InsuredDetails from "../models/insuredDetails.model.js";

export const createInsuredDetails = async (req, res) => {
  try {
    const doc = new InsuredDetails(req.body);

    doc.caseNumber = doc._id.toString();

    await doc.save();

    res.status(201).json(doc);
  } catch (error) {
    console.error("Error creating insured details:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};


export const getInsuredDetailsByID = async (req, res) => {
  try {
    const { caseNumber } = req.params;
    const details = await InsuredDetails.findOne({ caseNumber }); 

    if (!details) {
      return res.status(404).json({ message: "No record found" });
    }

    res.status(200).json(details);
  } catch (error) {
    console.error(" Error fetching insured details by ID:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getAllInsuredDetails = async (req, res) => {
  try {
    // Parse pagination parameters
    const page = parseInt(req.query.page, 10) || 1;
    let limit = parseInt(req.query.limit, 10) || 10;
    limit = Math.min(limit, 10); // Always cap at 10

    const skip = (page - 1) * limit;

    // ✅ Handle status filter
    const status = req.query.status;
    let query = {};
    if (status === "pending") query.isFinished = false;
    if (status === "finished") query.isFinished = true;

    // Total count based on filter
    const totalRecords = await InsuredDetails.countDocuments(query);
    const totalPages = Math.ceil(totalRecords / limit);

    // Fetch required fields
    const allDetails = await InsuredDetails.find(query, {
      insuranceCompany: 1,
      caseNumber: 1,
      claimNumber: 1,
      ivNumber: 1,
      insuredName: 1,
      vehicleType: 1,
      accidentDate: 1,
      policyStartDate: 1,
      createdAt: 1,
      isFinished: 1,
      _id: 0
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: allDetails,
      pagination: {
        totalRecords,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching insured details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};




export const updateInsuredDetails = async (req, res) => {
  try {
    const { caseNumber } = req.params;
    const updateDetails = await InsuredDetails.findOneAndUpdate(
      { caseNumber },           
      { $set: req.body },       
      { new: true }             
    );

    if (!updateDetails) {
      return res.status(404).json({ message: "No record found to update" });
    }

    res.status(200).json(updateDetails);
  } catch (error) {
    console.error("Error updating insured details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const deleteInsuredDetails = async (req, res) => {
  try {
    const { caseNumber } = req.params;
    const deleteDetails = await InsuredDetails.findOneAndDelete({ caseNumber }); 

    if (!deleteDetails) {
      return res.status(404).json({ message: "No record found to delete" });
    }

    res.status(200).json(deleteDetails);
  } catch (error) {
    console.error("Error deleting insured details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
