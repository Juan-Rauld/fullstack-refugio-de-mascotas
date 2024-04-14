// importando las librerias
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://<jarauldidiaquez>:<fJciFFozhmIdEe1U>@refugiodb1.gitj3cy.mongodb.net/?retryWrites=true&w=majority&appName=RefugioDB1";


//importando las rutas
import router from "./routes/petsRoutes.js";

//creando el servidor
const app = express();

//configurando el servidor
app.listen(8080);
app.use(express.json());
app.use(cors());
app.use(router);


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);






// conectar el servidor con mongoDB
/* mongoose.connect("mongodb://127.0.0.1:27017/refugioDB")
    .then(() => console.log("Conexion Correcta:[ puerto 8080 ]"))
    .catch((e) => console.log("Error" + e));
 */
// test de conexion con mongoDB
/* const testSchema = new mongoose.Schema({ name: 'string' });
const Test = mongoose.model('Test', testSchema);

const testDoc = new Test({ name: 'test' });
testDoc.save()
    .then(() => console.log('funcionooo!'))
    .catch((e) => console.log('no funciono'));
 */
