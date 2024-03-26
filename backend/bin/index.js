#! /usr/bin/env node
import { program } from 'commander';
import connect from '../db.js';
//import './bin/runNote.js';

program.version('1.0.0');

program
    .command('add <title> <content>')
    .description('Add a new note')
    .action(async (title, content) => {
        const db = await connect();
        const notes = db.collection('notes');
        await notes.insertOne({ title, content });
        console.log('Note added successfully');
        process.exit();
    });

program
    .command('list')
    .description('List all notes')
    .action(async () => {
        const db = await connect();
        const notes = await db.collection('notes').find().toArray();
        console.log('Notes:');
        notes.forEach((note) => {
            console.log(`- ${note.title}: ${note.content}`);
        });
        process.exit();
    });

program
    .command('read <title>')
    .description('Read a note')
    .action(async (title) => {
        const db = await connect();
        const note = await db.collection('notes').findOne({ title });
        if (note) {
            console.log(`- ${note.title}: ${note.content}`);
        } else {
            console.log('Note not found');
        }
        process.exit();
    });

program
    .command('search <term>')
    .description('Search for a note')
    .action(async (term) => {
        const db = await connect();
        const notes = db.collection('notes');
        const query = { $text: { $search: term } };
        const results = await notes.find(query).toArray();
        console.log(results);
    });

program
    .command('remove <title>')
    .description('Remove a note')
    .action(async (title) => {
        const db = await connect();
        const result = await db.collection('notes').deleteOne({ title });
        if (result.deletedCount > 0) {
            console.log('Note removed successfully');
        } else {
            console.log('Note not found');
        }
        process.exit();
    });

program.parse(process.argv);
