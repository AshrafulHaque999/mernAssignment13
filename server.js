const express = require("express");

const app = express();

const apiRoutes = require("./routes/apiRoutes");

app.use(express.json());

app.use("/", apiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});