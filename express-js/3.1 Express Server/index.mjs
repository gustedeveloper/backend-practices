//How to reach port 3000: localhost:3000

//Check which ports on our computer are listening for interactions: netstat -ano | findstr "LISTENING"
//nodemon restarts the server when changes are made


import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my blog!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>On Instagram @mwgbt</p><p>Via Gmail: 219_guste@gmail.com</p>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>My name is Guste and I'm a Full Stack Javascript Web Developer</p>")
})

app.listen(port, () => {
    console.log("Server running on port " + port + ".")
})