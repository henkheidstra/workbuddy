const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// location of our static files(css,js,etc..)
app.use(express.static(__dirname + '/views'));
app.use('/public', express.static(__dirname + '/public'));

// set the view engine to use ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
  }));

// render index page
app.get('/', (req, res) => {
    // console.log('index rendered');
    res.render('index')
  });

// render login/register landing page
app.get('/login', (req, res) => {
    // console.log('landing rendered');
    res.render('login')
  });

/*
// render profile page

// render statistics page

*/



app.listen(port, console.log(`Listening to ${port}`));