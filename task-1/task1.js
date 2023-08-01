//Basic Node.js Server(run node task1.js to run)

const http = require('http')

const PORT = 3000

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hello, World!" )
}).listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})
