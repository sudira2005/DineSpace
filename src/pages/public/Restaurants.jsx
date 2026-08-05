import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function RestaurantDetails() {
  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "120px 8%",
          minHeight: "100vh",
          background: "#f8f8f8",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
          alt="Restaurant"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        />

        <h1>The Gallery Café</h1>

        <p style={{ margin: "20px 0", fontSize: "18px" }}>
          Colombo • Sri Lankan Cuisine • ⭐ 4.8
        </p>

        <p style={{ lineHeight: "1.8", color: "#555" }}>
          Experience one of the finest dining destinations in Colombo.
          Reserve your table online and enjoy authentic Sri Lankan and
          international cuisine in a relaxing atmosphere.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "#D4AF37",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Reserve Table
        </button>
      </section>

      <Footer />
    </>
  );
}

export default RestaurantDetails;