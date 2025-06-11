import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('.'));

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