// db.js
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const url = process.env.MONGODB_URI
const dbName = 'notesApp'

const client = new MongoClient(url)

export default async function connect() {
    try {
        await client.connect()
        console.log('Connected to the database')
        return client.db(dbName)
    } catch (error) {
        console.error('Error connecting to the database', error)
    }
}

