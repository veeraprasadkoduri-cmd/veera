const express = require("express");
const cors = require("cors");
const bikeRouter = require("./Routes/bikes/bikes.router");
const bikeTypeRouter = require("./Routes/bikeTypes/bikeType.router");
const customersRouter = require("./Routes/customers/customers.router");
const rentalRouter = require("./Routes/rent/rent.router");
const invoicesRouter = require("./Routes/Invoices/invoices.router");
const { connectToDatabase } = require("./DB/connection");
const { syncTables, syncOneTable } = require("./DB/syncTables");
const path = require("path");

const app = express();
//middlewares
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(express.json());
//this will be called when we access localhost on port 5000 default root "/"
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Access below resource:<h1> <h3>localhost:5000/api/v1/allbikes</h3>"
    );
});

const appRoutes = [
  bikeRouter,
  bikeTypeRouter,
  customersRouter,
  rentalRouter,
  invoicesRouter
];

app.use(appRoutes);

connectToDatabase();
// syncOneTable();
//syncTables();

module.exports = app;
