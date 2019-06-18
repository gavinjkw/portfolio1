const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function () {
    console.log("Listening on port 8000");
})