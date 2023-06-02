const mongoose=require("mongoose")

const connectDb=async()=>{
 try {
    await mongoose.connect("https://github.com/radhi75/ws-api-f3-final.git")
    console.log("db is connected")
 } catch (error) {
    console.log("db is not connected")
 }
}
module.exports=connectDb