const blogRouter = require('./blog');
const mailRouter = require('./mail');

function route(app){
    app.get('/', (req, res) => {
        res.render('index')
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
 
    app.use('/blog', blogRouter);

    app.use('/mail', mailRouter);

    // 404 not found
    app.get('*', function(req, res){
        res.send('404 not found', 404);
    })
}

module.exports = route;