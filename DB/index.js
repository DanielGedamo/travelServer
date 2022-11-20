const mongoose = require("mongoose")
const DBConcotionString = process.env.CONNECTION_STRING;
mongoose.connect(DBConcotionString,
    {
        userNewUrlParser: true,
        userUnifildTopology:true,
    })
.then(()=> console.log('MongoDB Connection succeed'))
.catch(error =>{
    console.error('Connection felid', err.massage);
})
module.export = mongoose.connection 