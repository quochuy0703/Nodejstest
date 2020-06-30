const express = require('express');
var hellorouter = require('./controllers/HelloController.js');
var userroute= require('./routes/user')

const app = express();
app.use(express.static('asset'));

app.set('view engine', 'pug');
app.set('views', './view');
app.get('/',hellorouter.getHelloView);
app.use('/user', userroute);


app.listen(process.env.PORT || 3000,function(){
    console.log('server running!')
});