var express = require('express');
var router = express.Router();

/* GET /product listing. */
router.get('/:id', function(req, res) {
  //���ڿ��� �����մϴ�.
  var output = "";
  output += '<h1>id: ' + req.param('id') + '</h1>';
  output += '<h1>name: ' + req.param('name') + '</h1>';
  
  //�������� ����մϴ�.
  res.end(output); 
});

module.exports = router;