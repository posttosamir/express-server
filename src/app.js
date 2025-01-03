console.log("Welcome");

const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("this is response from the server test.   njnskcndjn");
});

app.use((req, res) => {
  res.send("this is response from the server22.");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
