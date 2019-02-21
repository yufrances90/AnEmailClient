const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = 'emailDb';

const dbUrl = url + dbName;

const emailCollectionName = "Emails";

function connectDatabase() {
    MongoClient.connect(dbUrl, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
}

function insertIntoDatabase(emailsToInsert) {

    MongoClient.connect(url, function(err, client) {

        if (err) throw err;

        console.log("Successfully connected to database...");

        const db = client.db(dbName);

        db.collection(emailCollectionName, function(err, collection) {

            emailsToInsert.forEach(email => {
                collection.insert(email)
            });

            db.collection(emailCollectionName).count(function (err, count) {
                if (err) throw err;
                
                console.log('Total Rows: ' + count);
            });
        });

        client.close();
    });
}

module.exports = {
    connectDatabase,
    insertIntoDatabase
}