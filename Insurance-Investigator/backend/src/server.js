import express from "express" ;
import dotenv from "dotenv";
import { connectDB } from "./config/mongoDB.js";
import insuredDetailsRoutes from "./routes/insuredDetails.routes.js";
import insuredStatementRoutes from "./routes/insuredStatement.routes.js"
import driverStatementRoutes from "./routes/driverStatement.routes.js";
import spotVerificationRoutes from "./routes/spotVerification.routes.js";
import garageVerificationRoutes from "./routes/garageVerification.routes.js";
import investigationFindingRoutes from "./routes/investigationFinding.routes.js";
import driverInvestigationRoutes from "./routes/driverInvestigation.routes.js";
import occupantInvestigationRoutes from "./routes/occupantInvestigation.routes.js";
import otherDetailsRoutes from "./routes/otherDetails.routes.js"


dotenv.config();
const app = express();
const PORT = process.env.PORT  ;

app.use(express.json());

app.use("/api/insured-details", insuredDetailsRoutes);
app.use("/api/insured-statement", insuredStatementRoutes);
app.use("/api/driver-statement", driverStatementRoutes);
app.use("/api/spot-verification", spotVerificationRoutes);
app.use("/api/garage-verification", garageVerificationRoutes);
app.use("/api/investigationfinding-insured", investigationFindingRoutes);
app.use("/api/driver-investigation", driverInvestigationRoutes);
app.use("/api/occupants-investigation", occupantInvestigationRoutes);
app.use("/api/other-details", otherDetailsRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server started on PORT :", PORT);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();

