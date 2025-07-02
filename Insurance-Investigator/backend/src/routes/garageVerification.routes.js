import express from "express";
import { createGarageVerification, deleteGarageVerification, getAllGarageVerification, getGarageVerificationByID, updateGarageVerification } from "../controllers/garageVerification.controller.js";

const router = express.Router();


router.post("/", createGarageVerification);

router.get("/:caseNumber", getGarageVerificationByID);

router.get("/", getAllGarageVerification);

router.put("/:caseNumber", updateGarageVerification);

router.delete("/:caseNumber", deleteGarageVerification);

export default router;