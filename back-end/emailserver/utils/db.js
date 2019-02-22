const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

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

    return new Promise((resolve, reject) => {

        MongoClient.connect(url, function(err, client) {

            if (err) {
                reject(err);
            }
    
            console.log("Successfully connected to database...");
    
            const db = client.db(dbName);
    
            db.collection(emailCollectionName, function(err, collection) {
    
                emailsToInsert.forEach(email => {
                    collection.insert(email);
                });
    
                db.collection(emailCollectionName).count(function (err, count) {
                    if (err) {
                        reject(err);
                    }

                    console.log('Total Rows: ' + count);

                    resolve(count);
                });
            });
    
            client.close();
        });
    });
}

function getDataFromDatabase(emailAddress, type) {

    return new Promise((resolve, reject) => {

        MongoClient.connect(url, function(err, client) {

            if (err) {
                reject(err);
            };
    
            console.log("Successfully connected to database...");

            const db = client.db(dbName);

            const query = (type == 0)? 
                {
                    receiver: emailAddress
                } : {
                    sender: emailAddress
                };

            db.collection(emailCollectionName).find(query).toArray(function(err, result) {

                if (err) reject(err)

                console.log(result);

                resolve(result);

                client.close();
            });
    
            
        })
    });
}

function deleteEmailById(emailId) {

    MongoClient.connect(url, function(err, client) {

        if (err) throw err;

        console.log("Successfully connected to database...");

        const db = client.db(dbName);

        const query = { _id: ObjectID(emailId) };

        db.collection(emailCollectionName).deleteOne(query, function(err, result) {
            if (err) throw err;
            console.log("1 document deleted", result);
        });

        client.close()
    });
}

function archiveEmailById(emailId) {

    MongoClient.connect(url, function(err, client) {

        if (err) throw err;

        console.log("Successfully connected to database...");

        const db = client.db(dbName);

        const query = { _id: ObjectID(emailId) };
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