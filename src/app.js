import express from "express";
import routes from "./routes.js";
import cors from "cors"
const app = express();

// indicar para o express ler body com json
app.use(express.json());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();
  
  });
// usar o routes
app.use(routes)

export default app;
