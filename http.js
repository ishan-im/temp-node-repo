const http = require('http');
const { url } = require('inspector');


const server = http.createServer((req,res) =>{
   
    
        res.write(`<h1>Hello welcome to my server</h1>`)
        res.write(`<a href="google.com">google</a>`)
        res.end()


        // if(req.url==='/history'){
        //         return res.end(`<h1>Hello welcome to history page</h1><a href="/">Click here to return Home Page</a>`);
        // }
   
  
})

server.listen(5000);


