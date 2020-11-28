const myModelUserData = require('../models/myUser');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
let password = '123Ravan';
const hasPassword = bcrypt.hashSync(password, salt);
const userData = async(req, res)=>{
    // Store hash in your password DB.
    

  const insretedData = await myModelUserData.create({
        name:"Ravan",
        last:"Raaj",
        email:'ravan@gmail.com',
        age:"45",
        password:hasPassword
    });
    console.log('Data inserted ',insretedData);
    
    res.json({Data:insretedData});
}
// login function of user 
const userLogin = async(req,res)=>{
    // Load hash from your password DB.
    const password = req.body.password;
    const email = req.body.eamil;
    // Load hash from your password DB.
    const hasedPassword = await bcrypt.compareSync(password, hasPassword); // true
    if(hasedPassword){
        const userData = await myModelUserData.findOne({emal:email});
        return res.json({data:userData});
    }else{
        return res.json({message:'possword is not correct'});
    }

}

exports.userData = userData;
exports.userLogin1 = userLogin;