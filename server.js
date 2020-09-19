const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Schmoopy123!',
    //password: 'root',
    database: 'artbynikki',
    //insecureAuth : true,
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
var urlGetHello = "/api/hello";
app.get(urlGetHello, (req, res) => {
    var str = urlGetHello + " (GET) " + "just called";
    console.log(str);
    res.send({ express: str });
});

/*---------------------------------------------------------------------------*/

//                  CODE FOR ORDERS

/*---------------------------------------------------------------------------*/

var urlGetOrder = "/api/orders";
app.get(urlGetOrder, (req, res) => {
    var sqlString = "SELECT * FROM orders";
    connection.query(sqlString,
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }

            console.log('The reponse is: ', rows);
            var jString = JSON.stringify(rows);

            res.send(JSON.parse(jString));
        });
});

/*---------------------------------------------------------------------------*/

//                  CODE FOR EMAILS

/*---------------------------------------------------------------------------*/

// Email Send Stuff
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.office365.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var details = req.body.message
    console.log(req.body.name);
    var content = `name: ${name} \n email: ${email} \n message: ${details} `

    var mail = {
        from: 'sammit@live.com',
        to: 'sammit@live.com',  // Change to email address that you want to receive messages on
        subject: 'New Order For ArtByNikki',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);