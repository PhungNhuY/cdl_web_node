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

//middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//router
const route = require('./routes');
route(app);

app.listen(port, () => console.log(`listening at http://localhost:${port}`))