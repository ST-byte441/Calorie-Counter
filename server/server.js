import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb'

const app = express();
const uri = "mongodb+srv://ST-byte441:Codesmith441@cluster0.wvsc7qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 3000;

// Mongoose client attach
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectMongo() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
  }
}
connectMongo();

// Server Functionality
app.use(express.static('./dist'));

app.get('/api/quote', async (_req, res) => {
  const database = [
    {
      text: "Enjoy life. There's plenty of time to be dead.",
      author: 'Hans Christian Andersen',
    },
    {
      text: 'We must learn to live together as brothers or perish together as fools.',
      author: 'Martin Luther King, Jr.',
    },
    {
      text: "A ship is safe in harbor, but that's not what ships are for.",
      author: 'William Shedd',
    },
    {
      text: 'The circumstances of ones birth are irrelevant. It is what you do with the gift of life that determines who you are.',
      author: 'Mewtwo',
    },
  ];

  res.json(database[Math.floor(Math.random() * database.length)]);
});


app.listen(PORT, () => {
  console.log(`express server listening on port ${PORT}`);
});