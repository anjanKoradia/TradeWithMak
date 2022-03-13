const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const moment = require("moment");

const User = require("./app/models/user");

/* ---------------------------------------- 
  Database connection 
---------------------------------------- */
const url = "mongodb://localhost/TradeWithMak";
mongoose.connect(url).then(
    () => {
        console.log("Database connected...");
    },
    (err) => {
        console.log("Connection failed...");
    }
);

/* ---------------------------------------- 
  Set template engine
---------------------------------------- */
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

/* ---------------------------------------- 
  Routes
---------------------------------------- */
app.get("/", async (req, res) => {
    const users = await User.find();

    return res.render("layout", { users: users, moment: moment });
})

/* ---------------------------------------- 
  Start server
---------------------------------------- */
const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});