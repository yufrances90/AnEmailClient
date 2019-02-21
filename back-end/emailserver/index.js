const express = require('express')
const app = express();

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
            senderEmail: "francesyu90@yahoo.com",
            title: "Hello World",
            body: "This is a test!"
        }
    ]

    dbUtils.insertIntoDatabase(emails);
});

app.post('/email', (req, res) => {

    const emailsToInsert = req.body.emailsToInsert;

    if (emailsToInsert === undefined || emailsToInsert.length == 0) {
        res.status(500).send("Error: No emails are provided!");
    } else {
        res.send('Saving new emails...');
    }

    dbUtils.insertIntoDatabase(emailsToInsert);
})

app.listen(8000, () => {
    console.log('App listening on port 8000!')
});