const express = require("express");
const Car = require("./cars-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Car.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  res.json("get car by id");
});

router.post("/", (req, res, next) => {
  res.json("create new car");
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
