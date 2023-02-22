import express, {Express} from 'express';
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const config = require("./config/config");
const mongoose = require("mongoose")

const authRoutes = require("./routes/userRoutes.ts");

const app: Express = express();

mongoose.connect(config.mongo.url, {retryWrites: true, w: "majority"})
    .then(() => {
        console.log("connected");
    })
    .catch((err: Error)=> {
        console.log(err.message)
    })

app.use(bodyParser.json())

app.use(cors({
    origin: "*"
}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/user", authRoutes);


app.listen(config.server.port, () => {
        console.log("Listening on port: " + config.server.port)
    }
)