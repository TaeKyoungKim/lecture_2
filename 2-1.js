var express = require('express')
var route = express()
var router = require('./2-1-main')(route)

route.set('views' , __dirname+'/views')
route.set('view engine','ejs')
route.engine('html' ,require('ejs').renderFile)
app.use('/static', express.static(__dirname + '/public'));

route.listen(3000, ()=>{
    console.log("웹 서버가 실행되었다. http://127.0.0.1:3000")
})
