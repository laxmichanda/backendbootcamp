/*
3. Static Text Response
Task: Respond with specific messages:
/hello → "Hi there!"
/bye → "Goodbye!"
Any other path → "Unknown Route"

Hint:
Use simple if...else or switch for checking req.url.
Match the path exactly.
Use res.end() for each response.
*/
import http from 'http';
const server=http.createServer((req,res)=>
{
    if(req.url==='/hello' && req.method=='GET')
    {
        res.end("Hi there!");
    }   
    else if(req.url==='/bye' && req.method=='GET')
    {
        res.end("Good Bye");
    }
    else
    {
        res.statusCode=404;
        res.end("Unknown route");
    }
});
server.listen(3000,()=>
{
    console.log(`sever runnning at http://localhost:3000`);
});