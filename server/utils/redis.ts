import { Redis } from "ioredis";
require('dotenv').config();
const redisClient=()=>{
      if(process.env.REDIS_URI){
        console.log(`Redis connected`);
        return process.env.REDIS_URI;
      }
      throw new Error("Redis Connection Failed ;)");
}
export const redis=new Redis(redisClient());