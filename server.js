const express = require("express");
const travelrouter = require("./routes/travelRouter")
const app = express();
const port = 8090;

app.use(express.json(({exstended : true})))
app.use(express.urlencoded(({exstended : true})))
app.use("/states",travelrouter)


app.listen(port,()=>{
    console.log(`server listen on port :${port}`);
})
    
