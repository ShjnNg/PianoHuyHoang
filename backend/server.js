/* require("dotenv").config(); */
const express = require('express');
const cors = require('cors');
const productRoutes = require("./routes/productRoutes");
const productRoutes2 = require("./routes/router2");
const productRoutes3 = require("./routes/router3");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/search", productRoutes2);
app.use("/api/count", productRoutes3);





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
