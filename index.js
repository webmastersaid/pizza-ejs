const express = require("express");
const { Router } = require("express");
const router = Router();
const config = require("config");
const path = require("path");

const PORT = config.get('port') || 5000;


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));

async function start() {
  try {
    app.listen(PORT, () => console.log("Сервер успешно запущен..."));
  } catch (e) {
    console.log("Ошибка сервера...", e);
    process.exit(1);
  }
}

start();
