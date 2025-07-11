import express from "express";
import {
  createInsuredDetails,
  getInsuredDetailsByID,
  updateInsuredDetails,
  deleteInsuredDetails, 
  getAllInsuredSummaries
} from "../controllers/insuredDetails.controller.js";

const router = express.Router();

router.post("/", createInsuredDetails);

router.get("/:caseNumber", getInsuredDetailsByID);

// router.get("/", getAllInsuredDetails);

router.get('/', getAllInsuredSummaries)

router.put("/:caseNumber", updateInsuredDetails);

router.delete("/:caseNumber", deleteInsuredDetails);

export default router;
