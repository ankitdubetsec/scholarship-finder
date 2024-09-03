const connectToMongoDB = require("./database");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// CONFIG .ENV FILE.
dotenv.config({ path: __dirname + "/.env" });

// CONNECTION TO THE DATABASE.
connectToMongoDB();

// CREATING EXPRESS APP.
const app = express();
const port = 5000;

// MIDDLEWARES.
app.use(cors());
app.use(express.json());

// AVAILABLE ROUTES.
app.use("/api/auth", require("./routes/auth"));
app.use("/api/authOrganisation", require("./routes/authOrganisation"));
app.use("/api/scholorship", require("./routes/scholor"));
app.use("/api/apply", require("./routes/apply"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/onedata", require("./routes/onedata"));
//app.use('/api/getdata', require('./routes/admin'));
//app.use('/api/admin', require('./routes/admin'));
// app.use('/api/getAll', require('./routes/getAll'));

// RUNNING THE APPLICATION ON THE LOCALHOST PORT.
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
