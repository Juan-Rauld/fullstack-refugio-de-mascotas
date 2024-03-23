// importando las librerias
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

//importando las rutas

//creando el servidor
const app = express();

//configurando el servidor
app.listen(8080);
app.use(express.json());
app.use(cors());

const testSchema = new mongoose.Schema({ name: 'string' });
const Test = mongoose.model('Test', testSchema);

const testDoc = new Test({ name: 'test' });
testDoc.save()
    .then(() => console.log('funcionooo!'))
    .catch((e) => console.log('no funciono'));

// conectar el servidor con mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/refugioDB")
    .then(() => console.log("Conexion Correcta:[ puerto 8080 ]"))
    .catch((e) => console.log("Error" + e));