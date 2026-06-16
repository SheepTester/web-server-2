import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (_req, res) => {
  res.send("hey gamers");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`http://localhost:${PORT}/`);
});
