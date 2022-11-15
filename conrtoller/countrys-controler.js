const countrysArray = require("../model/countrysArray");

const getcountry = (req, res) => {
  res.send(countrysArray);
};

const addcountry = (req,res) => {
  countrysArray.push(req.body)
  res.send({masseg :"new country add"})
}
const updatecountry = (req,res)=>{
const updateId = findCountryIndex(req)
if (updateId > -1) {
  countrysArray[updateId] = req.body.state
  return res.send({massge:"updat"})
}
 res.send({massge:"not found"})
}

function findCountryIndex(req){
  const stateItem = countrysArray.find(state => state.id == req.params.id);
  const startState = countrysArray.indexOf(stateItem);
  return startState;
}



module.exports = {
  getcountry,
  addcountry,
  updatecountry
};
