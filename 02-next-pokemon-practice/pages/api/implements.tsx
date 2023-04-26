// Docuementación en 02.MD
import { NextApiResponse, NextApiRequest } from "next";


type implementType = {
  name:string,
  age:number
}

export default function nextTestApi(req:NextApiRequest, res:NextApiResponse){
  const data:implementType = {name:'Rapha', age:22};
  res.status(200).json(data);
}
