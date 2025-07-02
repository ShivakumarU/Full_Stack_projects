import express from "express";
import { createDriverInvestigation, deleteDriverInvestigation, getAllDriverInvestigation, getDriverInvestigationByID, updateDriverInvestigation } from "../controllers/driverInvestigation.controller.js";

const router = express.Router();


router.post("/", createDriverInvestigation);

router.get("/:caseNumber", getDriverInvestigationByID);

router.get("/", getAllDriverInvestigation);

router.put("/:caseNumber", updateDriverInvestigation);

router.delete("/:caseNumber", deleteDriverInvestigation);

export default router;