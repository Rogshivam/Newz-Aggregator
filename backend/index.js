const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

app.use(cors());

// Endpoint to fetch news by category
app.get('/news', async (req, res) => {
  const category = req.query.category || 'general';
  try {
    const response = await axios.get(process.env.NEWS_API_HEAD_KEY, {
      params: {
        apiKey: NEWS_API_KEY,
        category,
        country: 'us',
        pageSize: 20,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
