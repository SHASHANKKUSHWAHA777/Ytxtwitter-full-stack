import dotenv from "dotenv";

import connectdb from "./db/indexx.js";

dotenv.config({
    path : './env'
})

connectdb()



 









/*import express from "express";

const app = express();

( async () => {
    try {
       await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("errrror" , (error) => {
        console.log("Error:", error);
        throw error
       })

       app.listen(process.env.PORT , () => {
        console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("connecton could not be established : " , error);
        throw error
    }
}) */


