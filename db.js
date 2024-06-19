import mongoose from "mongoose"

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Connected to MONGO_Db");
    } catch (error) {
        console.log("MongoDb connection Error",error);
    }
}
export default connect;