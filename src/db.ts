import {MongoClient, MongoError} from "mongodb";

export let db: MongoClient;

MongoClient.connect("mongodb://localhost:27017/fbs", (err: MongoError, dbClient: MongoClient) => {
    if (err) {
        throw err;
    }
    db = dbClient;
});
