const express = require("express");
const contactus = require("../database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
    let Details = req.body;
    console.log(Details);
    contactus.contactus("contactus", "Insert", Details)
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch((err) => {
            res.send(err.message);
        });
});
module.exports = Router;