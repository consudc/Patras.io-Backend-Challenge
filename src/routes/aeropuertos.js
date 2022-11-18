const { Router } = require("express");

// const Aeropuertos = require("../models/Aeropuertos");
const { addAeropuerto, getAeropuerto } = require("../controllers/aeropuertos");

// require("dotenv").config();

const router = Router();

router.post("/", addAeropuerto);

router.get("/", getAeropuerto);

module.exports = router;
