const express=require('express');
const signup=require('../database');
const Router=express.Router();
Router.post('/Insert',(req,res)=>{
    let Details=req.body;
    signup.signup("signup","insert",Details)
    .then((result)=>{
        res.send(result);
        console.log(result);
    })
    .catch((err)=>{
        res.send(err);
    })
});
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