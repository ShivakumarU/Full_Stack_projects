import express from "express" ;
import dotenv from "dotenv";
import { connectDB } from "../config/mongoDB.js";
import insuredDetails from "../routes/insuredDetails.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT  ;

app.use(express.json());

app.use("/api/insured-details", insuredDetails);

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

