import express from "express";
import { createDriverStatement, deleteDriverStatement, getAllDriverStatement, getDriverStatementByID, updateDriverStatement } from "../controllers/driverStatement.controller.js";

const router = express.Router();


router.post("/", createDriverStatement);

router.get("/:caseNumber", getDriverStatementByID);

router.get("/", getAllDriverStatement);

router.put("/:caseNumber", updateDriverStatement);

router.delete("/:caseNumber", deleteDriverStatement);

export default router;