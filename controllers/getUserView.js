var users =[
    {name: "User1", mail:"User1@gg", age:35},
    {name: "User2", mail:"User2@gg", age:24}
]
var getUserView = function(req, res){
    res.render('user',{users:users});
} 
exports.getUserView = getUserView;