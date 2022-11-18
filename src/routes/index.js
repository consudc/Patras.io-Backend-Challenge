const { Router } = require("express");

const aeropRoute = require("./aeropuertos");
const climaRoute = require("./clima");

const router = Router();

router.use("/api/v1/", aeropRoute);
router.use("/api/v1/aeropuertos", climaRoute);

module.exports = router;
