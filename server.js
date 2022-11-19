const ditenv = require("dotenv");

const express = require("express");
const travelrouter = require("./routes/travelRouter");
const app = express();
const port = 8090;
const validat = require("./validation/userValiditon")
const usersArray = require("./model/usersArray");
dotenv.config()
app.use(express.json({ exstended: true }));
app.use(express.urlencoded({ exstended: true }));

// const moddleware = (req ,res,next)=>{
//     console.log("MIDDLEWARW was activated");
//     !req.params?console.log(""):console.log("");
//     next()
// }
// const secandMeddlewr =(req ,res, next) =>{
//     console.log("this is flihgts");
//     next()
// }
// const urlMeddlewr =(req,res,next) =>{
// next()
// }
// const bypostMeddlwer= (req , res, next)=>{
//  req.method == "POST"? console.log("my post"):console.log("not post")
// next()
// }
// app.use()
// app.use(moddleware)
// app.use(urlMeddlewr)
// app.use("/states",bypostMeddlwer,travelrouter)
const moddleware = (req, res, next) => {
  const userItem = usersArray.find (itememail => itememail.email == req.body.email
  );
  userItem? console.log(userItem):res.send("email not found");
  userItem.password === req.body.password? res.send("hi user"):console.log("check password");
  next();
};
const paaswordMidellwer = (req,res,next) => {

}


app.use("/states",moddleware,travelrouter);

app.get("/", (req, res) => {
  res.send({ massage: "success" });
});

app.listen(port, () => {
  console.log(`server listen on port :${port}`);
});
