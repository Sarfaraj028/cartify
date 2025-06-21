import express, { json, urlencoded } from "express"
import dotenv from "dotenv"
import { connectDB } from "./database/db.js"
import categoriesRoute from "./routes/category.route.js"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

//middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//category routes
app.use("/api/categories", categoriesRoute)

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`);
    
})