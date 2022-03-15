const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/menu', (req, res) => res.render('pages/menu/index'))
app.get('/app', (req, res) => res.render('pages/app/index'))
app.get('/contacts', (req, res) => res.render('pages/contacts/index'))
app.get('/basket', (req, res) => res.render('pages/basket/index'))
app.get('/auth', (req, res) => res.render('pages/auth/index'))
app.listen(PORT, () => console.log(`Серевер успешно запущен на порту ${ PORT }`))
