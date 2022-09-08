const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'about')));
app.use(express.static(path.join(__dirname, 'mother_you')));
app.use(express.static(path.join(__dirname, 'mother_us')));
app.use(express.static(path.join(__dirname, 'mother_me')));

app.get('/', function(req, res) {
    res.redirect('about.html');
});

app.get('/mother_you', function(req, res) {
    res.redirect('MotherYou.html');
});

app.get('/mother_us', function(req, res) {
    res.redirect('MotherUs.html');
});

app.get('/mother_me', function(req, res) {
    res.redirect('MotherMe.html');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
