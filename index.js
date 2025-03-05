//to run express application the module imports take place here
const express = require('express');
//this creates a express application instance
const app = express();

//port number which the server listen on
const port = 3000;

//enables json data objects to pass in express
app.use(express.json());

//shows the current request methods path and the current time stamp
app.use((req,res, next) =>{
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
});


app.get('/',(req,res)=>{
    res.json({message:"Welcome to first api"});
})

app.get('/users/:id',(req,res)=>{
    const userId = req.params.id;
    res.json({message: `Fetched userId : ${userId}`});
})


//starts the application server listening on port 3000 for incoming request
app.listen(port,()=>{
    console.log("Server is running on port "+ port);
});



