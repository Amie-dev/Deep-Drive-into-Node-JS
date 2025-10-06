import mongoose from 'mongoose';


const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
    } catch (error) {
        console.log(`DB Connections fail due to ${error}`);
        process.exit(1)
    }
}

export default connectDB