var express=require('express');
// const fs = require('fs');
// const path = require('path');
const bodyParser = require('body-parser') // post 数据时需要
var app=express();
var apiRoutes = express.Router();
app.use(bodyParser.json())
app.use('/api', apiRoutes);
//app.use(express.static(path.resolve(__dirname, './dist')))

// app.get('*', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
//     res.send(html)
// })



apiRoutes.get('/200',function(req,res){
    res.status(200).json({"state":"ok","status":200,"message":"Accepted!"})
})
apiRoutes.get('/404',function(req,res){
    res.status(404).json({"state":"no","status":404,"message":"Refused!"})
})
apiRoutes.get('/500',function(req,res){
    res.status(500).json({"state":"no","status":500,"message":"Server Error!"})
})
apiRoutes.post('/login',function(req,res){
    let username=req.body.username;
    let password=req.body.password;
    // console.log(username)
    // console.log(password)
    // console.log(req.body)
    if(username==null||password==null)
    {
        res.status(404).json({"message":"Incomplete!"})
    }
    else if(username!="admin")
    {
        res.status(402).json({"message":"Username Error!"})
    }
    else if(password!="admin")
    {
        res.status(403).json({"message":"Password Error!"})
    }
    else 
    {
        res.status(200).json({"message":"Accepted!"})
    }
})
console.log("正在监听8082端口......");
app.listen(8082);