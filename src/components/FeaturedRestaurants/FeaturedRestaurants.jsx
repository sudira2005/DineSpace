import "./FeaturedRestaurants.css";
import restaurants from "../../data/restaurants";

function FeaturedRestaurants() {
  return (
    <section className="featured">
      <h2>Featured Restaurants</h2>

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
            />

            <div className="card-content">
              <h3>{restaurant.name}</h3>

              <p>{restaurant.location}</p>

              <span>{restaurant.cuisine}</span>

              <h4>⭐ {restaurant.rating}</h4>

              <button>Reserve Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedRestaurants;