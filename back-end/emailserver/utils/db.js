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
                collection.insert(email);
            });

            db.collection(emailCollectionName).count(function (err, count) {
                if (err) throw err;
                
                console.log('Total Rows: ' + count);
            });
        });

        client.close();
    });
}

function getDataFromDatabase(receiver) {

    return new Promise((resolve, reject) => {

        MongoClient.connect(url, function(err, client) {

            if (err) {
                reject(err);
            };
    
            console.log("Successfully connected to database...");

            const db = client.db(dbName);

            db.collection(emailCollectionName).find({receiver: receiver}, function(err, result) {

                if (err) {
                    reject(err);
                }

                resolve(result);
            })
    
            client.close();
        })
    });
}

function deleteEmailById(emailId) {

    MongoClient.connect(url, function(err, client) {

        if (err) throw err;

        console.log("Successfully connected to database...");

        const db = client.db(dbName);

        const query = { id: emailId };

        db.collection(emailCollectionName).deleteOne(query, function(err, _) {
            if (err) throw err;
            console.log("1 document deleted");
        });

        client.close()
    });
}

function archiveEmailById(emailId) {

    MongoClient.connect(url, function(err, client) {

        if (err) throw err;

        console.log("Successfully connected to database...");

        const db = client.db(dbName);

        const query = { id: emailId };
        const newvalues = { $set: {isArchive: true} };

        db.collection(emailCollectionName).updateOne(query, newvalues, function(err, result) {

            if (err) throw err;
            
            console.log("1 document updated");
        });

        client.close();
    });
}

module.exports = {
    connectDatabase,
    insertIntoDatabase,
    getDataFromDatabase,
    deleteEmailById,
    archiveEmailById
}