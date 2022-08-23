const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRouter = require("./routes/bookRoutes");
app.use("/api/book", bookRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
