import express from "express";
import { createSpotVerification, deleteSpotVerification, getAllSpotVerification, getSpotVerificationByID, updateSpotVerification } from "../controllers/spotVerification.controller.js";

const router = express.Router();


router.post("/", createSpotVerification);

router.get("/:caseNumber", getSpotVerificationByID);

router.get("/", getAllSpotVerification);

router.put("/:caseNumber", updateSpotVerification);

router.delete("/:caseNumber", deleteSpotVerification);

export default router;