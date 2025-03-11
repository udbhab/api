import mongoose from 'mongoose'

export const dbConn = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error)=>{
        console.log('Connection error: ', error)
    })
}