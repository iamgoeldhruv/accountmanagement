const mongoose=require('mongoose')
const connectdb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`conn string ${conn.connection.host}`)
    }catch(e){
        console.log(e)
        process.exit(1)
    }

}
module.exports=connectdb