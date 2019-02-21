const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

const dbUtils = require('./utils/db')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/db', (req, res) => {

    res.send('Testing db...');

    const emails = [
        {
            sender: "test@yahoo.com",
            receiver: "test@yahoo.ca",
            title: "Hello World",
            body: "This is a test!"
        }
    ]

    dbUtils.insertIntoDatabase(emails);
});

app.post('/email', (req, res) => {

    const operationType = req.body.operationType; // 0: insert, 1: delete: 2: update(used for archive)

    switch(operationType) {
        case "0": 

            const emailsToInsert = req.body.emailsToInsert;

            if (emailsToInsert === undefined || emailsToInsert.length == 0) {
                res.status(500).send("Error: No emails are provided!");
            } else {

                console.log('Saving new emails...');
                dbUtils.insertIntoDatabase(emailsToInsert).then(res => {
                    console.log(res);
                });
            }

            break;
        case "1":
            
            let emailId = req.body.emailId;

            if (emailId === undefined) {
                res.status(500).send("Error: No email id is provided!");
            } else {

                res.send("Deleting email...");

                dbUtils.deleteEmailById(emailId);
            }

            break;
        case "2": 
            
            emailId = req.body.emailId;

            if(emailToUpdate === undefined || Object.keys(emailToUpdate).length == 0) {
                res.send(500).send("Error: No email id is provided!");
            } else {

                res.send("Updating email...");

                dbUtils.archiveEmailById(emailId);
            }

            break;
        default:
            res.status(500).send("Error: Invalid post operation!")
    }
});

app.get('/email', (req, res) => {

    const receiver = req.query.receiver;
    const sender = req.query.sender;

    if (receiver === undefined && sender === undefined) {
        res.status(500).send("Error: No user id is provided");
    } else if (receiver === undefined && sender) {
        dbUtils.getDataFromDatabase(sender, 1).then(data => {
            res.send(data);
        });
    } else {
        dbUtils.getDataFromDatabase(receiver, 0).then(data => {
            res.send(data);
        });
    }
})

app.listen(8000, () => {
    console.log('App listening on port 8000!')
});