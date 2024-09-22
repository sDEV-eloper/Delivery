import 'dotenv/config'
import fastifySession from '@fastify/session'
import ConnectMongoDBSession from 'connect-mongodb-session'

const MongoDBStore=ConnectMongoDBSession(fastifySession);
export const sessionStore= new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection:"sessions",
})

sessionStore.on("error", (error)=>{
    console.error("Error in session store", error);
})

export const authenticate= async(email, password)=>{
    if(email==="suraj@gmail.com" && password==="suraj")
        return Promise.resolve({email, password})
    else{
        return null;
    }
}

export const PORT=process.env.PORT ||3000
export const COOKIE_PASSWORD=process.env.COOKIE_PASSWORD