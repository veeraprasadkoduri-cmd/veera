const DB_NAME = process.env.DB_NAME || "veeradb";
const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "Root@123";
const DB_SERVER = process.env.DB_SERVER || "localhost";

const attributes = { exclude: ["createdAt", "updatedAt"] };

module.exports = {
  DB_NAME,
  DB_SERVER,
  DB_USERNAME,
  DB_PASSWORD,
  attributes
};
