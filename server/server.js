import express, { json } from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import { config } from "dotenv";
import router from "./routes/index.js";
config()
const app = express();

const port = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/v1/api/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
connectDb(url);
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});