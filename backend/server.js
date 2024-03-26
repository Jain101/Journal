import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './db.js'
//import Note from './models/note.js'

dotenv.config()
const app = express()
app.use(cors())
const port = process.env.PORT

// Define routes
app.get('/notes', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("notes"); // replace "test" and "notes" with your database and collection name
        const notes = await collection.find().toArray();
        res.json(notes);
    } catch (error) {
        console.error('Error fetching notes', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/notes', async (req, res) => {
    const note = req.body;
    try {
        const db = await connect();
        const collection = db.collection("notes"); // replace "test" and "notes" with your database and collection name
        await collection.insertOne(note);
        res.json(note);
    } catch (error) {
        console.error('Error creating note', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// fetch a note with a specific id
app.get('/notes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const db = await connect();
        const collection = db.collection("notes"); // replace "test" and "notes" with your database and collection name
        const note = await collection.findOne({ _id: id });
        if (!note) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.json(note);
    } catch (error) {
        console.error('Error fetching note', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/notes/search', async (req, res) => {
    const searchTerm = req.query.term;
    try {
        const notes = await Note.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { content: { $regex: searchTerm, $options: 'i' } },
            ],
        });
        res.json(notes);
    } catch (error) {
        console.error('Error searching notes', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
    connect()
})

app.route('/book')
    .get((req, res) => {
        res.send('Get a random book')
    })
    .post((req, res) => {
        res.send('Add a book')
    })
    .put((req, res) => {
        res.send('Update the book')
    })