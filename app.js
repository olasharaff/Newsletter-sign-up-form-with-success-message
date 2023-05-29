const express = require('express');
const bodyParser = require('body-parser');
const port = 3000


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
    const post = req.body.email
    console.log(post)
    res.sendFile(__dirname + '/success.html')
})

app.post('/success', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(){
    console.log(' listening on port ' + port)
})


