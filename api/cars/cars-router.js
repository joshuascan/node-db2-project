const express = require("express");
const Car = require("./cars-model");
const md = require("./cars-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  Car.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(next);
});

router.get("/:id", md.checkCarId, (req, res, next) => {
  res.json(req.car);
});

router.post(
  "/",
  md.checkCarPayload,
  md.checkVinNumberValid,
  md.checkVinNumberUnique,
  async (req, res, next) => {
    try {
      const newCar = await Car.create(req.body);
      res.status(201).json(newCar);
    } catch (err) {
      next(err);
    }
  }
);

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
