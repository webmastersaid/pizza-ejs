const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (_req, res) => res.render('pages/index'))
app.get('/menu', (_req, res) => res.render('pages/menu/index'))
app.get('/app', (_req, res) => res.render('pages/app/index'))
app.get('/profile', (_req, res) => res.render('pages/profile/index'))
app.get('/basket', (_req, res) => res.render('pages/basket/index'))
app.get('/auth', (_req, res) => res.render('pages/auth/index'))
app.listen(PORT, () => console.log(`Серевер успешно запущен на порту ${ PORT }`))
