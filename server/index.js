import app from "./server.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 8000

mongoose.connect(process.env.DB_URI);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});