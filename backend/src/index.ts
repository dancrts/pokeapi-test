import "dotenv/config"
import mongoose from "mongoose";

import app from "./app";

//Agregaria ENValid, pero serian demasiadas librerias para un proyecto tan pequeño
const mongoURL = process.env.MONGO_URL!;
const port = process.env.PORT!;

mongoose.connect(mongoURL).then(() => {
    console.log("mongoose connected"); 
    app.listen(port, () => {
        console.log(`its runniiiiiiiing on port ${port}`);
    })
}).catch(console.error)