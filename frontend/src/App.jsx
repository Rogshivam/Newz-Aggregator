import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

function App() {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL, {
          params: { category },
        });
        setArticles(res.data.articles || []);
      } catch (err) {
        setError("Failed to fetch news.");
      }
      setLoading(false);
    };
    fetchNews();
  }, [category]);

  const categoryBarStyle = {
  marginBottom: 20,
  display: "flex",
  overflowX: "auto",
  whiteSpace: "nowrap",
  gap: "8px",
  paddingBottom: 4,
  WebkitOverflowScrolling: "touch",
  paddingLeft: "8px", // ensures first button isn't cut off
};

const categoryButtonStyle = (isActive) => ({
  background: isActive ? "#007bff" : "#f0f0f0",
  color: isActive ? "#fff" : "#000",
  border: "none",
  padding: "8px 16px",
  borderRadius: 20,
  cursor: "pointer",
  flex: "0 0 auto", // prevents stretching
  fontWeight: 500,
  fontSize: "14px",
  transition: "background 0.3s ease",
  
});



  const articleCardStyle = {
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  
  };
  
  return (
    <div
      className="App"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>NEWZILLA</h1>

      {/* Category bar */}
      {/* <div style={categoryBarStyle}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={categoryButtonStyle(cat === category)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div> */}
      <div style={categoryBarStyle} className="category-bar">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      style={categoryButtonStyle(cat === category)}
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
