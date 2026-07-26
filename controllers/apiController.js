const jwt = require("jsonwebtoken");

const SECRET_KEY = "mern_assignment_secret";

const homeController = (req, res) => {

    res.json({
        success: true,
        message: "Welcome to Express.js API"
    });

};


const aboutController = (req, res) => {

    res.json({
        success: true,
        message: "This is the About API"
    });

};


const contactController = (req, res) => {

    res.json({
        success: true,
        email: "support@example.com",
        phone: "+8801700000000"
    });

};


const servicesController = (req, res) => {

    res.json({
        success: true,
        services: [
            "Web Development",
            "Mobile App Development",
            "UI/UX Design"
        ]
    });

};


const loginController = (req, res) => {

    const { email, password } = req.body;

    if (
        email === "student@example.com" &&
        password === "123456"
    ) {

        const token = jwt.sign(
            { email },
            SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );

        return res.json({
            success: true,
            message: "Login Successful",
            token
        });

    }

    return res.status(401).json({
        success: false,
        message: "Invalid Email or Password"
    });

};


module.exports = {

    homeController,
    aboutController,
    contactController,
    servicesController,
    loginController

};
