import "./Search.css";

function Search() {
  return (
    <section className="search-section">
      <div className="search-container">
        <h2>Find Your Perfect Table</h2>

        <div className="search-box">
          <input type="text" placeholder="Restaurant Name" />

          <select>
            <option>Location</option>
            <option>Colombo</option>
            <option>Kandy</option>
            <option>Galle</option>
          </select>

          <input type="date" />

          <select>
            <option>Guests</option>
            <option>2 Guests</option>
            <option>4 Guests</option>
            <option>6 Guests</option>
            <option>8 Guests</option>
          </select>

          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Search;