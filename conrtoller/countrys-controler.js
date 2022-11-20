const countrysArray = require("../model/countrysArray");

const getcountry = (req, res) => {
  res.send(countrysArray);
};

const addcountry = (req, res) => {
  countrysArray.push(req.body.country);
  res.send({ masseg: "new country add" });
};
// const updatecountry = (req, res) => {
//   const updateId = findCountryIndex(req);
//   if (updateId > -1) {
//     countrysArray[updateId] = req.body.state;
//     return res.send({ massge: "updat" });
//   }
//   res.send({ massge: "not found" });
// };
 const updatecountry = (req, res) => {
  const countyItem = countrysArray.find((counrty) => counrty.id == req.body.id);
  const startIndex = countrysArray.indexOf(countyItem)
  if (startIndex > -1) {
    countrysArray[startIndex] == req.body.newData;
    res.send("uodate success");
  }
  res.send("error")
};
const deliteCountry = (req,res)=>{
  const countryToDelite = countrysArray.find(contry => contry.id == req.params.id);
  const startIndex = countrysArray.indexOf(countryToDelite);
  if(startIndex > -1){
    countrysArray.splice(startIndex,1)?res.send({mesagge:"success",data:countrysArray}):res.send("error")
  }
}

function findCountryIndex(req) {
  const stateItem = countrysArray.find((state) => state.id == req.params.id);

  const startState = countrysArray.indexOf(stateItem);
  return startState;
}

module.exports = {
  getcountry,
  addcountry,
  updatecountry,
  deliteCountry
};
