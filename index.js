const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const db_password = "ABDOalaa177213";
const uri = `mongodb+srv://Eng_3bdo_7amed:${db_password}@cluster0.hqrcc64.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
