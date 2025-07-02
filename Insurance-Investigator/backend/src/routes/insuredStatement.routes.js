import express from "express";
import { createInsuredStatement, deleteInsuredStatement, getAllInsuredStatement, getInsuredStatementByID, updateInsuredStatement } from "../controllers/insuredStatement.controller.js";


const router = express.Router();

router.post("/", createInsuredStatement);

router.get("/:caseNumber", getInsuredStatementByID);

router.get("/", getAllInsuredStatement);

router.put("/:caseNumber", updateInsuredStatement);

router.delete("/:caseNumber", deleteInsuredStatement);

export default router;