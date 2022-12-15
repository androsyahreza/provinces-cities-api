const express = require("express");
const router = express.Router();

// Require controller modules
const provincesController = require("../controllers/provinces_controller");
const citiesController = require("../controllers/cities_controller");

// Provinces Routes
router.get("/provinces", provincesController.provincesList);
router.get("/provinces/:id", provincesController.provincesDetail);
router.get("/provinces/:id/city", provincesController.provincesIncludeCity);
router.post("/provinces", provincesController.provincesCreate);
router.put("/provinces/:id", provincesController.provincesUpdate);
router.delete("/provinces/:id", provincesController.provincesDelete);

// Cities Routes
router.get("/cities", citiesController.citiesList);
router.get("/cities/:id", citiesController.citiesDetail);
router.post("/cities", citiesController.citiesCreate);
router.put("/cities/:id", citiesController.citiesUpdate);
router.delete("/cities/:id", citiesController.citiesDelete);

module.exports = router;