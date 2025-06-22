import express, { json, urlencoded } from "express"
import dotenv from "dotenv"
import { connectDB } from "./database/db.js"
import categoriesRoute from "./routes/category.route.js"
import productsRoute from "./routes/products.route.js"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

connectDB()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

//middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req, res) =>{
    res.send("home")
})

//category routes
app.use("/api/categories", categoriesRoute)
app.use("/api/products", productsRoute)

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`);
    
})