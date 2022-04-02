const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {    // Repare que é "/" e não "./"
    return res.json({ hello: "word" })

});



module.exports = routes;