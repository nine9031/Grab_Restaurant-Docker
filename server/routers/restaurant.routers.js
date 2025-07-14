import restaurantController from "../controllers/restaurant.controllers.js";

import express from "express";
const router = express.Router();
//POST http://localhost:5000/api/v1/restaurant
router.post("/",restaurantController.create);

module.exports = router;