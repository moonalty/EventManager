require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

const config = require("./config/config");

const PORT = process.env.PORT ?? 4000;

const mainRouter = require("./routes/main.route");
const categoriesRouter = require("./routes/APIroutes/categories.route");

config(app);
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(express.static(path.join(__dirname, "frontend", "build", "static")));

app.use("/", mainRouter);
app.use("/categories", categoriesRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`**** BOBM HAS BEEN PLANTED on ${PORT}`);
});
