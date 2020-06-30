var express = require('express');
var userroute = express.Router();

var users =[
    {id:1, name: "User1", mail:"User1@gg", age:35},
    {id:2, name: "User2", mail:"User2@gg", age:24},
    {id:3, name: "User1", mail:"User3@gg", age:28}
]
userroute.get('/', function(req, res){
    res.render('user', {users:users});
} );
userroute.get('/search',function(req, res){
    var result = users.filter(function(user){
        if(user.name == req.query.search){
            return true
        }else return false;
    })
    res.render('search',{users: result});
})
userroute.get('/showinfo/:id',function(req, res){
    var result = users.find(function(user){
        if( parseInt(req.params.id) == user.id){
            return true;
        }else return false;
    })
    res.render('showinfo',{user:result});
})
userroute.get('/create',function(req, res){
    res.render('create');
})

module.exports = userroute;