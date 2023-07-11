const express=require('express');
const login=require('../database');
const Router=express.Router();
Router.get("/Read:_ID", (req, res) => {
    const Details = req.params._ID;
    login.login("signup", "Read", Details)
      .then((result) => {
        res.send({ Message: result.Message, Result: result.rows });
        console.log(result);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
module.exports=Router;