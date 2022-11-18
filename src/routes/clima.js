const { Router } = require("express");

const router = Router();

const { getAllCities, getClimatebyCode } = require("../controllers/clima");

router.get("/", getAllCities);

router.get("/:code", getClimatebyCode);

module.exports = router;
