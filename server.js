const express = require ("express");
const travelrouter = require ("./routes/travelRouter")
const StatesArray = require ("./model/countrysArray")
const carsRouts = require ("./routes/carsrouter") 
const app = express();
const port = 8080;
// const cors = require ("cors")

app.use(express.json(({exstended : true})))
app.use(express.urlencoded(({exstended : true})))
app.use("/StatesArray",travelrouter);
app.use("/cars",carsRouts);


//  app.get("/",(req,res)=>{
//     res.send({massage :"success",StatesArray})
//  });

//  app.post("/addCountry",(req,res) => {
//     StatesArray.push(req.body)
//     res.send({massage :"successfuly"})
    
//  })
//  app.get("/findById"),(req,res)=>{
//     StatesArray.find(req.params.id)
//  }

app.listen(port,()=>{
    console.log(`server listen on port :${port}`);
})
    
