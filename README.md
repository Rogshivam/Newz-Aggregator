# 📰 Newz-Aggregator

A modern news aggregation app that fetches the latest articles from multiple categories using **NewsAPI.org**, powered by a **React frontend** and **Node.js/Express backend**.

Live Demo: [newzilla.vercel.app](https://newzilla.vercel.app)

---

## 🚀 Tech Stack

**Frontend:**  
- React (fast, component-based development)  
- CSS Modules / styled-components (modular, maintainable styling)  

**Backend:**  
- Node.js + Express (simple and efficient API layer)  
- NewsAPI.org (news data source)  

**Deployment:**  
- Frontend: Vercel / Netlify  
- Backend: Render / Heroku (or Vercel serverless)  

---

## ✨ Features

- **Category-based news**: Technology, Sports, Health, Business, Science, Entertainment, etc.  
- **Article summaries**: Display short descriptions of each article.  
- **External links**: Click through to the full source article.  
- **Responsive UI**: Works seamlessly on desktop and mobile.  

---

## 📂 Project Structure
```
Newz-Aggregator/
│
├── backend/ # Express backend fetching news from NewsAPI
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── news-frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # CategorySelector, NewsList, NewsCard
│ │ ├── App.jsx
│ │ └── index.jsx
│ ├── package.json
│ └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Rogshivam/Newz-Aggregator.git
cd Newz-Aggregator
```
### 2️⃣ Backend setup
```bash
cd backend
npm install
```
### Create a .env file
```bash
NEWS_API_KEY=your_newsapi_key_here
PORT=5000
```
### Run the backend:
```
npm run dev
```
### 3️⃣ Frontend setup

```
cd ../news-frontend
npm install
```

### Run the frontend:
```
npm run dev

```
### Visit the app at:
Frontend: http://localhost:5173
Backend API: http://localhost:5000/news

### 🛠 API Endpoint

Get news by category:

GET /news?category=technology


Example Response:
```

{
  "articles": [
    {
      "title": "Latest Tech News",
      "description": "Short summary here...",
      "url": "https://example.com/article",
      "urlToImage": "https://example.com/image.jpg"
    }
  ]
}
```
### 📌 Implementation Steps

Backend:

1. Set up Express server.

- Create /news endpoint fetching from NewsAPI.org.

2. Frontend:

- Build components: CategorySelector, NewsList, NewsCard.

- Fetch news from backend and display summaries.

3. Styling:

- Use CSS Modules or styled-components for scoped styles.

4. Testing & Deployment:

- Test locally, then deploy frontend to Vercel and backend to Render/Heroku (or Vercel serverless).


### 🤝 Contributing

Fork the repo.

Create a new branch (feature/awesome-feature).

Commit your changes.

Push and create a Pull Request.

### 📄 License

This project is licensed under the MIT License.
