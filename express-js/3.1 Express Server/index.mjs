//How to reach port 3000: localhost:3000

//Check which ports on our computer are listening for interactions: netstat -ano | findstr "LISTENING"
//nodemon restarts the server when changes are made


import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
})

app.listen(port, () => {
    console.log("Server running on port " + port + ".")
})