const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use((req, res) => {
    res.status(404).json({
        status: "error",
        code: 404,
        message: `Use api on routes: ${req.baseUrl} /api/books`,
        data: "Not found",
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: "fail",
        code: 500,
        message: `${err.message.replace(/"/g, "")}`,
        data: "Internal Server Error",
    });
});

module.exports = app;
