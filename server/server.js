import express from 'express';
import { CommandSucceededEvent, MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import DailyController from './controllers/DailyController';
import PresetController from './controllers/PresetController.js';

dotenv.config();
const app = express();
const uri = process.env.MONGO_URI;
const PORT = 3000;

app.use(express.json());

// Mongoose client attach
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

await client.connect();
const db = client.db("calorieApp"); 

const collection = db.collection("items");
const dailyController=DailyController(collection);

const presetCollection = db.collection("presetCollection");
const presetController=PresetController(presetCollection);


// Server Functionality
app.use(express.static('./dist'));

app.get('/api/quote', async (_req, res) => {
  const database = [
    {
      text: "Age is something that doesn't matter, unless you are a cheese.",
      author: 'Luis Bunuel',
    },
    {
      text: `A nickel ain't worth a dime anymore.`,
      author: 'Yogi Berra',
    },
    {
      text: "I love deadlines. I like the whooshing sound they make as they fly by.",
      author: 'Douglas Adams',
    },
    {
      text: `If two wrongs don't make a right, try three.`,
      author: 'Laurence J. Peter',
    },
    {
      text: 'Do not take life too seriously. You will never get out of it alive.',
      author: 'Elbert Hubbard',
    },
    {
      text: 'Common sense is the collection of prejudices aquired by age eighteen.',
      author: 'Albert Einstein',
    },
    {
      text: 'Between two evils, I always pick the one I never tried before.',
      author: 'Mae West',
    },
    {
      text: `I want my children to have all the things I couldn't. Then I want to move in with them.`,
      author: 'Phyllis Diller',
    },
    {
      text: `If at first you don't succeed... so much for skydiving.`,
      author: 'Henny Youngman',
    },
  ];

  res.json(database[Math.floor(Math.random() * database.length)]);
});


app.get('/api/items', dailyController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.items)
});

app.post('/api/items', dailyController.addItem, (req, res) => {
  res.status(200).json(res.locals.newItem)
});

app.delete('/api/items/:id', dailyController.deleteItem, (req, res) => {
  res.status(200).json(res.locals.deletedItem)
})

app.get('/api/preset', presetController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.items)
});

app.post('/api/preset', presetController.addItem, (req, res) => {
  res.status(200).json(res.locals.newItem)
});

app.delete('/api/preset/:id', presetController.deleteItem, (req, res) => {
  res.status(200).json(res.locals.deletedItem)
})

//-//-//-//-//-//-//-//-//-//-//-//-//-//-//Errors & Listener//-//-//-//-//-//-//-//-//-//-//-//-//-//-//

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

//Global Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`express server listening on port ${PORT}`);
});