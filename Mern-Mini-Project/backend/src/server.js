import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'

dotenv.config();

console.log(process.env.MONGO_URI)
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());

app.use('/api/notes', rateLimiter, notesRoutes)

connectDB().then( ()=>{
    app.listen(PORT, ()=>{
    console.log("server started on PORT :", PORT)
})
});