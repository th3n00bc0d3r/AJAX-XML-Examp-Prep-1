const express   = require('express');
const app       = express();
const port      = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/list', (req, res) => {
    var hotels = [
        {"id": 1, "name": "Hotel 1"},
        {"id": 2, "name": "Hotel 2"},
        {"id": 3, "name": "Hotel 3"},
        {"id": 4, "name": "Hotel 4"},
        {"id": 5, "name": "Hotel 5"},
    ];

    res
        .status(200)
        .json(hotels);
});

app.post('/list/add', (req, res) => {
    data = req.body;

    console.log(data);

    res.json({
        "success": true
    });
});


app.listen(port, () => {
    console.log('Listening to ' + port);
});