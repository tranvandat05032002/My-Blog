import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
const URL =
  "mongodb+srv://admin:iAadQT3QdDnyJx6E@cluster0.wkyzgne.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Sever is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
// app.get("/", (req, res) => {
//   res.send("Successfully!");
// });
app.use("/posts", posts);
