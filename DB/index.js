const mongoose = require("mongoose")
// const DBConcotionString = process.env.CONNECTION_STRING;
// mongoose.connect(DBConcotionString,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
//     })
// .then(()=> console.log('MongoDB Connection succeed'))
// .catch(error =>{
//     console.error('Connection felid', error.message);
// })
// module.export = mongoose.connection 
// const mongoose = require("mongoose");

const DBConcotionString = process.env.CONNECTION_STRING;

mongoose.connect(DBConcotionString, {
    useNewUrlParser: true,
    useUnifiedTopology:true

})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.error("Connection error", err.message))

module.exports = mongoose.connection