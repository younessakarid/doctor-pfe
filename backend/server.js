import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())



app.use("/api/user", userRouter)
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)



app.get('/',(req,res)=> {
    res.send('api working')
})

app.listen(port,()=> console.log("server Started",port))