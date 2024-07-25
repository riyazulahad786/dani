const joi = require('joi');
const signupValidations = (req,res,next)=>{
    const schema = joi.object({
        firstName:joi.string().min(3).max(100).required(),
        lastName:joi.string().min(3).max(100).required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"bad request"})
    }
    next();
}

const loginValidations = (req,res,next)=>{
    const schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"bad request"})
    }
    next();
}

module.exports={
    signupValidations,
    loginValidations
}