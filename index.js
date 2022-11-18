const express = require('express');
const path = require('path');
const app = express();

const userRoutes = require("./server/routes/user.js");

app.use(express.json());

app.use(function(req, res, next){
  res.header("Allow-Control-Allow-Orgin", "*");
  res.header("Allow-Control-Allow-Headers", "Orgin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use("/users", userRoutes);

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public/index.html', 'index.html'))
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
