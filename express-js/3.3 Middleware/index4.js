import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function generateBandName(street, pet) {
  return street + pet;
}

app.use(express.urlencoded({extended: true}));  //Middleware

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;

  const bandName = generateBandName(street, pet);

res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`); //Las comillas deben ser comas, si no, no detecta el valor de la constante que hay dentro del h2
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
