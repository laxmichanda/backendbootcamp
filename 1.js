/*
1. Hello Server
Task: Create a simple server that responds with "Hello, World!" on any route.

Hint:
Use the http module to create a server.
Use res.end("Hello, World!") to send the response.
server.listen(PORT) to run the server.

*/
import http from 'http';

const server=http.createServer((req,res)=>
{
    if(req.method=='GET')
    {
        res.end("Hello, World!");
    }
});
server.listen(3000,()=>
{
    console.log(`Server is running at http://localhost:3000`);
});