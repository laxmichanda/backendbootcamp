/*
2. Time Server
Task: When a user visits /time, show the current server time.

Hint:
Use new Date().toLocaleTimeString() to get the current time.
Check if req.url === "/time" inside your createServer callback.
Send the time as response using res.end().

*/

import http from 'http';

const server=http.createServer((req,res)=>
{
    if(req.url==="/time" && req.method=='GET')
    {
        const data=new Date().toLocaleTimeString();
        res.end(data);
    }
});

server.listen(3000,()=>
{
    console.log(`server running at http://localhost:3000`);
});