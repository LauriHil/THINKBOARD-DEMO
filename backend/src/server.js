import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;



//Middleware
app.use(express.json()); //middleware parses JSON bodies: req.body

//Small custom middleware
app.use((req, res, next) => {
    console.log(`We just got a new request. Req method is ${req.method} & Req URL is ${req.url}`);
    next();
})

//using ratelimiter middleware
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
    console.log("localhost:", PORT);
});
})