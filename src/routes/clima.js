const { Router } = require("express");

const router = Router();

const { getAllCities, getClimatebyCode } = require("../controllers/clima");

// endpoint http://localhost:3000/api/v1/aeropuertos?at=2022-01-01T09:00:00 ==>query fecha actual
router.get("/", getAllCities);

router.get("/:code", getClimatebyCode);

module.exports = router;
