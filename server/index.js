const express = require("express");
const app = express();
import dotenv from "dotenv";
import restaurantRouter from "./routers/restaurant.routers";
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Restful API 555");
});

app.use("/api/v1/restaurant", restaurantRouter);
app.listen(PORT, () => {
  console.log("listening to http://localhost:" + PORT);
});
