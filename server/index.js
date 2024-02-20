const express = require("express");
const axios = require("axios");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());
const SalesData = require("./models/Data");

app.get("/initialize-database", async (req, res) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const jsonData = response.data;
    await SalesData.insertMany(jsonData);
    res.send("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/", require("./routes/transactionData"));
app.listen(2000, () => {
  console.log("Server running on port 2000");
});
