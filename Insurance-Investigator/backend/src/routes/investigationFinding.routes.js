import express from "express";
import { createInvestigationFindingInsured, deleteInvestigationFindingInsured, getAllInvestigationFindingInsured, getInvestigationFindingInsuredByID, updateInvestigationFindingInsured } from "../controllers/investigationFinding.controller.js";

const router = express.Router();


router.post("/", createInvestigationFindingInsured);

router.get("/:caseNumber", getInvestigationFindingInsuredByID);

router.get("/", getAllInvestigationFindingInsured);

router.put("/:caseNumber", updateInvestigationFindingInsured);

router.delete("/:caseNumber", deleteInvestigationFindingInsured);

export default router;