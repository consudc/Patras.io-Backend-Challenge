const { Router } = require("express");
const { addAeropuerto, getAeropuerto } = require("../controllers/aeropuertos");

const router = Router();

router.post("/", addAeropuerto);

router.get("/", getAeropuerto);

module.exports = router;
