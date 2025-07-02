import express from "express";
import { createForm8Occupant, deleteForm8Occupant, getAllForm8Occupant, getForm8OccupantByID, updateForm8Occupant } from "../controllers/occupantInvestigation.controller.js";

const router = express.Router();


router.post("/", createForm8Occupant);

router.get("/:caseNumber", getForm8OccupantByID);

router.get("/", getAllForm8Occupant);

router.put("/:caseNumber", updateForm8Occupant);

router.delete("/:caseNumber", deleteForm8Occupant);

export default router;