import express from "express";
import { createOtherDetails, deleteOtherDetails, getAllOtherDetails, getOtherDetailsByID, updateOtherDetails } from "../controllers/otherDetails.controller.js";

const router = express.Router();


router.post("/", createOtherDetails);

router.get("/:caseNumber", getOtherDetailsByID);

router.get("/", getAllOtherDetails);

router.put("/:caseNumber", updateOtherDetails);

router.delete("/:caseNumber", deleteOtherDetails);

export default router;