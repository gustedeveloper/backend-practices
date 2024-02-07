import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl || req.url;
  const logMessage = timestamp + method + url;

  console.log(logMessage);

  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
