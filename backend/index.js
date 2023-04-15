const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./routes/routeController');
require("./connection")

var corsOptions = {
  origin: '*'
}


const port = process.env.PORT || 3001;

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes);


app.listen(port, () => {
    console.log(`app listening in port: ${port}`);
  });