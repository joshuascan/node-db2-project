const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("get all cars");
});

router.get("/:id", (req, res, next) => {
  res.json("get car by id");
});

router.post("/", (req, res, next) => {
  res.json("create new car");
});

module.exports = router;
