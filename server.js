var app = require('express')();
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://<dbuser>:<dbpassword>@server_address/database";

app.get('/', (req, res) => {
    MongoClient.connect(uri, function (err, db) {
        db.db('biher').collection('data').find({}).toArray(function (err, data) {
            res.send(data);
        })
    })
});

app.listen(4000, () => {
    console.log('Server started on port : 4000');
});