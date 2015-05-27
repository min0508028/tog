var express = require('express');
var router = express.Router();

/* GET /product listing. */
router.get('/onlychrome', function(req, res) {
  // User-Agent 속성 추출
  var agent = req.header('User-Agent');
  
  if(agent.toLowerCase().match(/chrome/)){
  	res.writeHead(200,{ 'Content-Type' : 'text/html' });
  	res.end('<h1>Welcome Chrome .. !</h1>');
  }else{
  	res.redirect('/');
  }    
  
});

module.exports = router;
