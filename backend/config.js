const DB_NAME = "test_sequelizer";
const DB_USERNAME = "root";
const DB_PASSWORD = "asd123";
const DB_SERVER = "localhost";

// const DB_NAME = "sql11657710";
// const DB_SERVER = "sql11.freesqldatabase.com";
// const DB_USERNAME = "sql11657710";
// const DB_PASSWORD = "63JxIF6YfQ";

//this will exclude default created columns such as createdAt and updatedAt
const attributes = { exclude: ["createdAt", "updatedAt"] };

module.exports = {
  DB_NAME,
  DB_SERVER,
  DB_USERNAME,
  DB_PASSWORD,
  attributes
};
