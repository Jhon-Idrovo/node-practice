const fs = require("fs");
const path = require("path");
const getOrCreateDatabaseCollection = (dataPath) => {
  const databasePath = path.join(__dirname, "database", dataPath);
  if (!fs.existsSync(databasePath)) {
    fs.mkdirSync(databasePath, { recursive: true });
  }
  // Get all filenames in the directory
  return fs.readdirSync(databasePath, { encoding: "utf8" });
};
module.exports.getOrCreateDatabaseCollection = getOrCreateDatabaseCollection;
