import mongoose from "mongoose";
import user from '../model/usermodel';
import addtask from '../model/addtask';
import jwt from 'jsonwebtoken'
import paginate from 'mongoose-paginate-v2';
import bcrypt from 'bcrypt';
import {sentEmail} from  '../middleware/sendmail'

export const userSignup = async(req,res) => {
    const otp = Math.floor(Math.random() * 1234 + 1000);
    const userData = new user ({
        fullname : req.body.fullname,
        email : req.body.email,
        phone : req.body.phone,
        password : bcrypt.hashSync(req.body.password,9),
        address : req.body.address,
        otp
    })
    const message = `Hello your verification code is ${otp} . `;
    const userDetails = await userData.save();
    var emailDetails = await sentEmail('azmsiddhant1@gmail.com',req.body.email,'Verificaton code',message)
    if(userDetails){
    return res.send({
        status : true,
        message : "user ne successfully signup kar liya",
        result : {}
    })}
}

export const verifyOTP = async (req,res) => {
    const EMAIL = req.body.email;
    const OTP = req.body.otp;
    const newotp = Math.floor(Math.random() * 1234 + 1000);
    console.log("Verify working");
    const isValid = await user.find({
      email : EMAIL,
      otp: OTP
    }).count();
    //console.log("isValid",isValid);
    if(isValid){
      //  update
      const jsondata = {
        verified : true,
        otp: newotp
      }
      await user.updateOne({email:EMAIL},
    {$set:jsondata},
    {new:true},
    )
      res.send({ "status": 200, "message": "OTP VERIFIED SUCCESFULLY", result: {} })
    }else{
      res.send({ "status": 200, "message": "Incorrect otp", result: {} })
    }

}

export const login = async(req,res) => {
    try{
        const{email,password} = req.body;
        const result = await user.findOne({email})
        console.log(result)
        const isValid = bcrypt.compareSync(password,result.password)
        
        let payload = {};
        payload.id = result.id;
        jwt.sign(payload,"key",{
            'expiresIn':'24h'
        },
        (err,token) => {
            if(isValid){
            console.log(token)
                res.send({status:true,message:"successfull",userdata:result,result:token})
            }else{
                res.send({status:200,message:"failed",result:err})
            }
        })
    }catch(e){
        throw e
    }
}

export const getUserId = async (req,res) => {

    try{
        var id = req.result.id;
    
     let userId = await user.findById(id)

  
    res.send({status:200,message:"success", result:userId})
    }catch(e){
        throw e
    }
}

export const addTask = async(req,res) => {
    const taskData = new addtask({
        title : req.body.title,
        date : req.body.date,
        time : req.body.time,
        dateofcompletion : req.body.dateofcompletion
    })
    const taskDetails = await taskData.save();
    res.send({
        status : true,
        message : "book add successfully",
        result : taskDetails
    })
}


export const showList = async (req,res) => {
    // let Details = await addtask.find({},{title:1,date:1,time:1,dateofcompletion:1})
    let Details = await addtask.find({})
        // {
        // sort:{title:req.body.sort},
        // page:req.body.page,
        // limit:req.body.limit
        // },
        // (err,result)=>{
        //     console.log(result)
        //     res.send({status:400,message:"successfull",result:result})
        // })
        console.log(Details)

    res.send({status:200,message:"success",result:Details})
}

export const getTaskId = async (req,res) => {

    let taskId = await addtask.find({_id:mongoose.Types.ObjectId(req.query.id)})
  
    res.send({status:200,message:"success", result:taskId})
}

export const updateTask= async (req,res) => {
    try{
        let jsondata = {};  
        if(req.body.title){
            jsondata.title = req.body.title;
        }
        if(req.body.date){
            jsondata.date = req.body.date;
        }
        if(req.body.time){
            jsondata.time = req.body.time;
        }
        if(req.body.dateofcompletion){
            jsondata.dateofcompletion = req.body.dateofcompletion;
        }
        
        addtask.updateOne({
            _id:mongoose.Types.ObjectId(req.body._id)
        },
        {$set : jsondata},
        {new : true},
        (err, result) => {
            if(err){
                res.send ({status:true,message:"task not updated ",result:err})

            }else{
                res.send ({status:200,message:"task updated successfully",result:result})

            }
        })
    }catch(e){
        throw e
    }
}

export const deleteTask = async (req, res,) => {
    
    try {
      
                let _id = req.params._id
                console.log(_id)
                const Customer = await addtask.deleteOne({_id:mongoose.Types.ObjectId(_id)})
                if(Customer){
                    res.send({
                        status : true,
                        message:"success",
                        result:Customer
                    })
                }
            
    }
    catch (e) {
        throw e
    }
}


