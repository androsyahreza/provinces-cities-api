const router = require("./app/routes/route");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})