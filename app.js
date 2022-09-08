const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/mother_you/MotherYou.html'));
});

router.get('/mother_us',function(req,res){
  res.sendFile(path.join(__dirname+'/mother_us/MotherUs.html'));
});

router.get('/mother_me',function(req,res){
  res.sendFile(path.join(__dirname+'/mother_me/MotherMe.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
