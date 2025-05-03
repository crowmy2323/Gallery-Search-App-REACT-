import { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImage = () => {
    if (!value.trim()) return;

    fetch(`https://api.unsplash.com/search/photos?client_id=ygdwzyA4eZ6KLoFZfSj9tabYKh_W4ZtPeHXPS7fmU5U&query=${value}&page=${page}&per_page=12`)
      .then(res => res.json())
      .then(data => {
        setResult(data.results);
      });
  };

  useEffect(() => {
    if (value.trim()) {
      fetchImage();
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchImage();
  };

  return (
    <div className="app-container bg-dark text-light min-vh-100">
      <div className="container py-5">
        <h2 className="text-center mb-4 text-accent"> photo searcher</h2>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="example: city"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn btn-accent" onClick={handleSearch}>search</button>
        </div>

        <div className="row g-3 mb-4">
          {result.map((item) => (
            <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div className="img-box">
                <img src={item.urls.small} alt={item.alt_description || "image"} className="gallery-img" />
              </div>
            </div>
          ))}
        </div>

        {result.length > 0 && (
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-accent"
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              PREV
            </button>
            <button
              className="btn btn-accent"
              onClick={() => setPage(prev => prev + 1)}
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
