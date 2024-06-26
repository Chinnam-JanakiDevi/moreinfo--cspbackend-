const express = require("express");
const sellplant = require("../database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;                                  
  console.log(Details);
  sellplant.sellplant("flower", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

Router.get("/Read:_ID", (req, res) => {
  const Details = req.params._ID;
  sellplant.sellplant("flower", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.get("/sRead:_ID", (req, res) => {
  const Details = req.params._ID;
  sellplant.sellplant("flower", "Read1", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

Router.delete("/Delete:id", (req, res) => {
  let Details = req.params.id;
  console.log(Details);
  sellplant.sellplant("flower", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  sellplant.sellplant("flower", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports=Router;