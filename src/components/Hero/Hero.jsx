import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find & Reserve Your Perfect Table</h1>

          <p>
            Discover the best restaurants near you and reserve instantly with
            DineSpace.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Book Now
            </button>

            <button className="secondary-btn">
              Explore Restaurants
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;