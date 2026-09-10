import http,{IncomingMessage ,ServerResponse} from 'http'
import { songsRoute } from './routes/songs.ts';

const PORT = 3000;

const requestListener = (req : IncomingMessage, res : ServerResponse) => {
       if(req.url?.startsWith("/songs")){
        songsRoute(req,res);
       }else{
           res.writeHead(200, {"Content-type": "application/json"});
          res.end(JSON.stringify({message: "Hello Vutlhari , you have successfully ran the server. I am so proud of you!"}))
       }






  
}

const server = http.createServer(requestListener)
 
server.listen(PORT, () =>{
 console.log(`Server is running on http://localhost: ${PORT}`);
}) 



