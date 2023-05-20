const http =require('http');
const users = require('./users');
 http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(users));
    resp.end();

 }).listen(5000);




