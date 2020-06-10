const mongoose = require('mongoose');
const MONGO_URI="";

const connectDB = async ()=>{
  try{
   const conn = await mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true
   });
   console.log(`Mongodb conneted ${conn.connection.host}`);
  }catch(error){
    console.log(error);
    process.exit(1);
  }
}
module.exports = connectDB;
