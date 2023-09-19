import { connect } from "mongoose";

export default async function connectMongoDB() {
    try {
        await connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}