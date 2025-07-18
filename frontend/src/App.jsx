import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

function App() {
  const [category, setCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL, {
          params: { category },
        });
        setArticles(res.data.articles || []);
      } catch (err) {
        setError('Failed to fetch news.');
      }
      setLoading(false);
    };
    fetchNews();
  }, [category]);

  return (
    <div className="App">
      <h1>NEWZILLA</h1>
      <div style={{ marginBottom: 20 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              marginRight: 8,
              background: cat === category ? '#007bff' : '#eee',
              color: cat === category ? '#fff' : '#000',
              border: 'none',
              padding: '8px 16px',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {articles.map((article, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <h2 style={{ margin: 0 }}>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
