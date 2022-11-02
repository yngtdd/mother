const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'about')));
app.use(express.static(path.join(__dirname, 'mother_us')));
app.use(express.static(path.join(__dirname, 'mother_me')));
app.use(express.static(path.join(__dirname, 'mother_you')));

app.get('/', function(req, res) {
    res.redirect('about.html');
});

app.get('/mother_us', function(req, res) {
    console.log('Redirecting to MotherUs');
    res.redirect('MotherUs.html');
});

app.get('/mother_me', function(req, res) {
    console.log('Redirecting to MotherMe');
    res.redirect('MotherMe.html');
});

app.get('/mother_you', function(req, res) {
    console.log('Redirecting to MotherYou');
    res.redirect('MotherYou.html');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

