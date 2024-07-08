/*console.log("This is a first function")
setTimeout(function(){
    console.log("this is second function")
},3000)
console.log("this is  thirs function ")



const {Socket}=require('dgram');
const net=require('net');
const server=net.createServer((socket)=>{
    socket.on('close',()=>{
        console.log("socket closed")
    })
})
server.listen(8000)

const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("number must be non zero ")
            }
            return resolve(a*b) 
           },3000)
        
    })
}
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
})

const value=(str)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof str == 'string'){
                resolve("promise intiated"+str)
            }
            reject("the data is not string ");
        },3000)
    }
        
    )
}
value("function 1").then((myvalue)=>{
    console.log(myvalue)
    return value("function 2" )
}).then((myvalue2)=>{
    console.log(myvalue2)
})


const events={
    name:'party',
    guests:['raju','rani'],
    printGuest(){
        console.log("guest list for"+this.name)
        this.guests.forEach(guest=> {
            console.log(guest+' is attending '+this.name)
        });
    }
}
events.printGuest()

const http=require('http')
http.createServer((request,response)=>{
    response.writeHead(200,('content-type','text/plain'))
    response.end('server is live gv')

}).listen(8000,()=>{console.log('server live ')})


///super agent

const http = require('http');
const superagent = require('superagent');
(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message || err);
    }
})(); 

//axios
const axios=require('axios')
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>console.log(res.data)).catch((err)=>
    console.log(err.message || err)) 


const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'abhi',
        password: '1234',
        userid: 1001
    };

    axios.post('http://localhost:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error: ' + (err.message || err));
        });
});





//express.js



const express=require('express');
const { head } = require('superagent');
const app=express()
const port=3001;
app.use(express.json())
app.use('/abc',(req,res,next)=>{
   if( req.method === 'GET'){
    res.send("get methid is initated")
   }
   else if(req.method === 'POST'){
    res.send(res.json({
        message:"post iniated",
        data=req.body
    }
    ))
   }
   else{
       res.send("invalid method")
   }
})
const LocalDB={
    item:"smart-phone",
    price:12345,
    color:"black"
}

app.get('/product',(req,res)=>{
    res.json(LocalDB)
})
app.post('/product',(req,res)=>{
    const data=req.body;
    res.json({
        message:"Post Request Received",
        itemData:data
    })
})
app.patch('/product',(req,res)=>{
    const data=req.body
    res.json({
        message:"  data updated",
        itemData:data
    })
})
app.delete('/product',(req,res)=>{
    const data=req.body
    res.json({
        message:"  data deleted",
        itemData:data
    })
})


app.options('/product',(req,res)=>{
    res.json({
        message:"options available",
        allocateMethods:"get,put,pacth,options"
    })
})
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
});


const express=require('express');
const { head } = require('superagent');
const app=express()
const port=3001;
app.use(express.json())
app.use('/abc',(req,res,next)=>{
   if( req.method === 'GET'){
    res.send("get methid is initated")
   }
   else if(req.method === 'POST'){
    res.send(res.json({
        message:"post iniated",
        data:res.body
    }
    ))
   }
   else{
       res.send("invalid method")
   }
})
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
})


const express=require('express');
const app=express();

const port=3001
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const reqfunction=(req,res,next)=>{//1st
    console.log(`recieved a ${req.method},request to api ${req.url}`);
    next();
}
//route handler to pass parameters
const formDataFun=(req,res,next)=>{
    const {name ,pass}=req.body;
    console.log(req.body);
    req.name=name
    req.pass=pass
    next();
}
const userShow=(req,res)=>{
   
    res.send(`<h1>Name ${req.name} ,Pass ${req.pass}</h1>`);
}
app.get('/login',reqfunction,(req,res)=>{
    res.send(
        `<form method="post" action="/login-auth">
            <input type="text" name="name" required/>
            <input type="password" name="pass" required/>
            <button type="submit"> submit</button>
        </form>`
    )
})
app.post('/login-auth',reqfunction,formDataFun,userShow)
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
})


const express=require('express');
const app=express();
const port=3001
const router=express.Router();
const homeApi=require('./roots/Home.js')
const loginApi=require('./roots/Login.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',homeApi);
app.use('/',loginApi);

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
})



//sessions

const express=require('express')
const app=express();
const session=require('express-session')
const port=3001
app.use(express.json())
app.use(session({
    secret:'itsecret',
    resave: false,
    saveUninitialized:true,
})) 
app.get('/login',(req,res)=>{
    req.session.sessionData={
        name:'raju',
        userid:'1234',
        emailid:'raju@gmail.com'};
    res.send(`<h1> you logged in </h1><a href="profile/">profile</a>`)
})//session should set
app.get('/profile',(req,res)=>{
    const data=req.sessionData  || 'no session found'
    res.send(`<h1>welcome ${data.name}</h1>
        <p>Email:${data.emailid}</p>`)
})
app.listen(port,()=>console.log(`server is live on port ${port}`)) 



//error handling
const express=require('express')
const app=express();
const session=require('express-session')
const port=3001
app.use(express.json())
app.get('/',(req,res)=>{
    try{
    throw new Error("server died")
}
    catch(err){
        res.status(500).send(`<h1>error occured</h1>
            <p>${err.message}</p>`)

    }
})
app.listen(port,()=>console.log(`server is live on port ${port}`)) 

// index.js
const express = require('express')
 const mongoose = require('mongoose') //npm i mongoose mongodb
 const UserApi = require('./routes/users')
 const app = express()
 const port = 3001;

 app.use(express.json())
 const url='mongodb+srv://sindhulinga18:JEdVAinM1xxzdwxv@cluster0.9x5rzyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 //connecting my express app to my mongodb server
 mongoose.connect(url).then(()=>{
    console.log('MongDB connected')})
 .catch((err)=>console.log(err));
//route to handle /users api endpoint
app.use('/users',UserApi)
//ApiEndPoint, router

 app.listen(port,()=>{console.log('server live')});

 const express = require('express')
 const mongoose = require('mongoose')
 const authorApi = require('./routes/author')
 const bookApi = require('./routes/book')

 const app = express()
 const port = 3001;
 app.use(express.json())
 const url='mongodb+srv://sindhulinga18:JEdVAinM1xxzdwxv@cluster0.9x5rzyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(url).then(()=>{console.log('MongDB connected')}).catch((err)=>console.log(err));
 app.use('/author',authorApi)
 app.use('/book',bookApi)
 app.listen(port,()=>{console.log('server live')})*/

 const express=require('express')
const mongoose = require('mongoose')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs = require('./schema');
const resolvers=require('./resolver');

const app = express()
const port = 3001

 const url='mongodb+srv://sindhulinga18:JEdVAinM1xxzdwxv@cluster0.9x5rzyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)});
//start my apollo-express-server
const server=new ApolloServer({typeDefs,resolvers});
app.get('/users/search/:name',async(req,res)=>{
    try{
        const name=req.params.name;
        const {data,error}=await server.executeOperation({
            query:gql`query{
            searchUsers(name:${name}){id name email}}`
        });
        if(error){
            
            return res.status(500).send({error})
        }res.status(201).send(data);
    }
        catch(err){
            res.status(500).send(`<h1>Error occured</h1><p>${err.message}</p>`);
        }
        })
       
    


async function  StartServer(){

}
function Testing(){
    return 1;
}

Testing()
StartServer()
