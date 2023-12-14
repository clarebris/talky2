import { Request,Response } from "express";
import { v4 } from "uuid";
import { Jwt } from "jsonwebtoken";
import DatabaseHelper from "../dbHelpers/dbconnect";
import { validateLoginUser,validateRegisterUser, validateUserEmail, validateuserId } from "../validators/userValidator";

const dbConnect= DatabaseHelper.getInstance()

export const registerUser=async(req:Request,res:Response)=>{
    try {
        const _id=v4()
        const{username,email,password}=req.body
        let{error}=validateRegisterUser.validate(req.body)
        if(error){
            return res.status(400).json({message:"invalid input "})

        }
         let result=await dbConnect.exec('registerUser',{_id,username,email,password})
          console.log(result);

          return res.status(201).json({message:"users registered successfully"})
          

        
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

export const loginUser=async( req:Request, res:Response)=>{
   try {

    const{email, password}=req.body

    const user=await dbConnect.exec('getByEmail',{email,password})
    console.log(user)

    if (!user.recordset.length){
        return res.status(401).json({error:"invalid credentials"})
    }

    const(password: dbpassword, ...rest) = user.recordset[0]

    const correctPassword= await bcry





   


    
   } catch (error) {
    
   }

}