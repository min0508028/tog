var express = require('express');
var router = express.Router();

/* GET /product listing. */
router.get('/redirect', function(req, res) {
  var agent = req.header('User-Agent');
  res.redirect('http://mail.widetns.com');
});

module.exports = router;
