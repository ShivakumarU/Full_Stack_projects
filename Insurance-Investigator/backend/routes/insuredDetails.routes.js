import express from "express";
import {
  createInsuredDetails,
  getAllInsuredDetails,
  getInsuredDetailsByID,
  updateInsuredDetails,
  deleteInsuredDetails
} from "../controllers/insuredDetails.controller.js";

const router = express.Router();

router.post("/", createInsuredDetails);

router.get("/:caseNumber", getInsuredDetailsByID);

router.get("/", getAllInsuredDetails);

router.put("/:caseNumber", updateInsuredDetails);

router.delete("/:caseNumber", deleteInsuredDetails);

export default router;
