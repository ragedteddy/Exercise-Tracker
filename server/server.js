import express from "express"
import cors from "cors"
import exerciseRoute from "./routes/exercise.route.js"
import userRoute from "./routes/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/exercises', exerciseRoute);
app.use('/users', userRoute);
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app