const { Router } = require("express");
// Importar todos los routers;

const aeropRoute = require("./aeropuertos");
const climaRoute = require("./clima");

const router = Router();

// Configurar los routers

router.use("/api/v1/", aeropRoute);
router.use("/api/v1/aeropuertos", climaRoute);

module.exports = router;
