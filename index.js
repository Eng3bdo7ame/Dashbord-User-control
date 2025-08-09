const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
