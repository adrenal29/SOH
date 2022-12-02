const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'public/index.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});


router.get('/industry/:id',function(req,res){
    res.sendFile(path.join(__dirname+'/public/industryDashboard.html'));
  });
router.get('/employeeLog',function(req,res){
    res.sendFile(path.join(__dirname+'/public/employeeLogin.html'));
});
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');