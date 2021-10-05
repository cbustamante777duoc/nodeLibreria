const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDatabase = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDatabase();

//importacion de las rutas
const libro = require("./routes/libro");
const autor = require("./routes/autor");

const app = express();
//explico que de formato json al express
app.use(express.json());
app.use(cors());

//uso de middleware (morgan) en modo desarrollo
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//rutas que se van a usar
app.use("/api/libro", libro);
app.use("/api/LibreriaAutor", autor);

app.use(errorHandler);

//encaso que el valor sea indefinido utiliza el 5000
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("servidor se ejecuta en ambiente", process.env.NODE_ENV)
);

//Si hay error en la conexion a la base de datos
process.on('unhandledRejection',(err, promise) =>{
    console.log('Errores', err.message);
    server.close(() => process.exit(1));

})