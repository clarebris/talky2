import express, {
    NextFunction,
    Request,
    Response,
    json,
    
  } from "express";
  
  import dotenv from "dotenv";
import userRouter from "./routes/userRouter";
  dotenv.config();
  



  const PORT = process.env.SERVER_PORT || 5020;
  
 
  
  
  const app = express();
  
  app.use(json());
  
  

  app.get("/", (req, res) => {
    res.send({ status: "Ok", message: "Api!" });
  });

  app.use("/user",userRouter)
  
 
  
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });