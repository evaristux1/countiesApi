const { Router } = require("express");
const router = Router();
const customRoutes = require("./customRoutes");

router.get("/api/city?",customRoutes.counties);

module.exports = router;
