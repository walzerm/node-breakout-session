var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('../views/moleIndex.ejs');
});

router.get('/whack-a-mole.ejs', function(req, res) {
    res.render('../views/whack-a-mole.ejs');
})

module.exports = router;
