const express = require("express");

const router = express.Router();

const {
    homeController,
    aboutController,
    contactController,
    servicesController,
    loginController
} = require("../controllers/apiController");


router.get("/", homeController);

router.get("/about", aboutController);

router.get("/contact", contactController);

router.get("/services", servicesController);

router.post("/login", loginController);

router.get("/login", (req, res) => {
    res.json({
        message: "Use POST /login with email and password."
    });
});

module.exports = router;
