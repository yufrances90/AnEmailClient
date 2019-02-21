const express = require('express')
const app = express();

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

app.listen(8000, () => {
    console.log('App listening on port 8000!')
});