var express = require('express');
var router = express.Router();

/* GET /product listing. */
router.get('/:id', function(req, res) {
  //문자열을 생성합니다.
  var output = "";
  output += '<h1>id: ' + req.param('id') + '</h1>';
  output += '<h1>name: ' + req.param('name') + '</h1>';
  
  //페이지를 출력합니다.
  res.end(output); 
});

module.exports = router;
