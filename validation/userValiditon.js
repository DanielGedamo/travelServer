const validateEmail = (email) => {
  const temp = email.indexOf("@");
  const last = email.slice(email.length - 4);
  if (temp > 0 && last == ".com") return true;
  return false;
};

const passvordValidate = (paasword, confirmPassword) => {
  const Userpaasword = req.body.paasword;
  const UserConfirmpaasword = req.body.confirmpaasword;
  Userpaasword === UserConfirmpaasword
    ? console.log("password are mache")
    : console.log("password not maching");
};
const userValidtion = (email,age,paasword,confirmpaasword)=>{
    if(validateEmail && passvordValidate && age>18)
    console.log("user created")
    else{}
}
module.exports = { validateEmail, passvordValidate };
