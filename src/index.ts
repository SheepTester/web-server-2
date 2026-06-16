import cors from "cors";
import express from "express";
import { router } from "./test";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/assets", express.static("dist/assets"));

app.get("/", (_req, res) => {
  res.send("hey gamers: <a href=./test>css</a>");
});

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`http://localhost:${PORT}/`);
});
