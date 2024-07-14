
import {connectToDatabase} from "./db.js"
import express from "express"
import cors from "cors"
//Routes
import productRoutes from "./routes/productroutes.js"




connectToDatabase();

const app =express();

app.use(express.json())
app.use(cors())

app.use("/api/products", productRoutes)

const port = 5000;
app.get('/',  (req, res)=> {
    res.send("API is running...")
  })
app.listen(port, ()=> {
    console.log(`server runnig at ${port}`)
})