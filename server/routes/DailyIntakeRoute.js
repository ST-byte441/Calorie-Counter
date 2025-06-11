app.post('/api/intake', async (req, res) => {
  const intake = {
    date: new Date(),
    calories: 2000,
    protein: 100,
    carbs: 250,
    fat: 70
  };
  const db = client.db('cluster0');
  await db.collection('dailyintakes').insertOne(intake);
  res.json({ success: true });
});