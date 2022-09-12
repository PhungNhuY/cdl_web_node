const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const { extname } = require('path')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/blog', (req, res) => {
    res.render('blog')
})
app.get('/tests', (req, res) => {
    res.render('tests')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/challenge', (req, res) => {
    res.render('challenge')
})
app.get('/CDL-Endorsements-and-Restrictions', (req, res) => {
    res.render('CDL-Endorsements-and-Restrictions')
})
app.get('/CDL-Federal-Requirements', (req, res) => {
    res.render('CDL-Federal-Requirements')
})
app.get('/How-long-does-it-take-to-get-a-CDL-in-2022', (req, res) => {
    res.render('How-long-does-it-take-to-get-a-CDL-in-2022')
})
app.get('/Steps-Required-to-Get-a-CDL-License-in-2022', (req, res) => {
    res.render('Steps-Required-to-Get-a-CDL-License-in-2022')
})
app.get("/what-is-a-commercial-driver's-license", (req, res) => {
    res.render("what-is-a-commercial-driver's-license")
})

app.listen(port, () => console.log(`listening at http://localhost:${port}`))