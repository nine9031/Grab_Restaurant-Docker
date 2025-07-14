const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const restaurantRouter = require("./routers/restaurant.router");

// แปลง จาก string(text) เป็น json
app.use(express.json());
// tooltip
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Restful API");
});

// use routers
app.use("/api/v1/restaurant", restaurantRouter);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
