var reqst=require('http')
var logPage=require('fs')
var url=require('url')

reqst.createServer(function (req,res){
    var qr=url.parse(req.url,true)
   // console.log(query.pathname)
    if(qr.pathname==='/'){
        logPage.readFile('main.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(qr.pathname==='/sign-up'){
        logPage.readFile('sign.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(qr.pathname==='/buttoncliclked') {
        res.writeHead(200,{'Content-Type':'text/html'})
        console.log(qr.query.mail)
        res.write("succesfully Data Stored")
        res.end()
    }else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("page did't find!!!")
        res.end()
    }
   
    
   
}).listen(8000,()=>console.log("server started"))