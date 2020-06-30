var express = require('express');
var router = express.Router();
router.get('/',function(req, resp){
    resp.send("Ban da truy cap vao dia chi /user bang phuong thuc get");
})

module.exports = router;