import express, { json } from "express"
import dotenv from "dotenv"
import { initDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"
import transactionsRoute from "./routes/transactionsRoute.js"


dotenv.config()

const app = express()

app.use(rateLimiter)
app.use(express.json())

// app.use((req, res, next) => {
//     console.log("The method is: ", req.method);
//     next()
// })

const PORT = process.env.PORT || 5001


app.use("/api/transactions", transactionsRoute)



initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running", PORT);
    })
})