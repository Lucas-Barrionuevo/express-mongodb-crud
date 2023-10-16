import app from "./app";
import './database'
import { PORT } from "./config";
import connectToDatabase from './database';
connectToDatabase();

app.listen(PORT);
console.log("Server on port", PORT);
