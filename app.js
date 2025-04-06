import express from "express";
import habitacionesRouter from "./routes/habitaciones.router.js";
 
//variables
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/habitaciones", habitacionesRouter);

//escuchando servidor
app.listen(PORT, () => {
        console.log(`Server running on http://${HOST}:${PORT}`);
});
