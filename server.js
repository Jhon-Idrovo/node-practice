const express = require("express");
const path = require("path");
const fs = require("fs");
const { getOrCreateDatabaseCollection } = require("./helpers");
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
app.get("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signUp.html"));
});
app.post("/sign-up-attempt", (req, res) => {
  const { username, password } = req.body;
  // Try to get the user to check for existing one
  const users = getOrCreateDatabaseCollection("users");
  if (users.includes(username))
    res.status(401).json({ message: "User already exists" });
  // Create user
  fs.writeFileSync(
    path.join(__dirname, "database", "users", username),
    JSON.stringify({ password })
  );
  res.status(200).send();
});
app.post("/login-attempt", (req, res) => {});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
