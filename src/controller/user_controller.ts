import { user } from "../entity/User";
import { Request, Response ,NextFunction } from "express";
import { getRepository, Repository } from "typeorm";
//For Password hashing
import *as bcrypt from "bcrypt";
export const createUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const userRepository = getRepository(user);
    const { first_name, last_name, email, password, phone } = req.body;
    await userRepository
      .findOne({ where: { email: email } })
      .then(async function (userData) {
        if (userData) {
          res.status(401).json({
            message: "This email is already exist.",
          });
        } else {
          const roleId = 1;
          const userName = first_name + " " + last_name;
          const encryptpassword = await bcrypt.hash(password, 10); //Encrypt password using bcrypt technique
          const data = {
            userName: userName,
            email: email,
            password: encryptpassword,
            roleId: roleId,
            phone: phone,
          };
          const userData = await userRepository.save(data);
          res.status(200).json({
            message: "User created successfully.",
            UserData: userData,
          });
          console.log("data",data);
        }
      });
  } catch (error) {
      console.log("Eror",error);
    res.status(401).json({
      message: "Could not create user somthing wrong ",
      ERROR:error,
    });
  }
};

export const login = async(req:Request , res: Response , next: NextFunction)=>{

  const userRepository = getRepository(user)
  const {email , password} = req.body;
  userRepository.findOne({where :{email:email}} )
  .then (async function (userData){
    if(!userData){
      res.status(401).json({
        message: "invalid Email Address"
      })
    }else{
     const response_campare = await bcrypt.compare(password , userData.password);
      if(response_campare){
        res.status(200).json({message: "Login Successfully." , data :userData})
        console.log("userdata" , userData)
      }else{
        res.status(401).json({message: "Incorrect Password"});
      }

    }
  });
};