import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function RestaurantDetails() {
  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "120px 8% 80px",
          background: "#f8f8f8",
          minHeight: "100vh",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
          alt="Restaurant"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        />

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
            color: "#1f2937",
          }}
        >
          The Gallery Café
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          📍 Colombo | ⭐ 4.8 | Sri Lankan Cuisine
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
            maxWidth: "900px",
          }}
        >
          Experience one of Colombo's finest restaurants. Enjoy authentic
          Sri Lankan and international cuisine in a relaxing atmosphere.
          Reserve your table online and experience unforgettable dining with
          your friends and family.
        </p>

        <button
          style={{
            marginTop: "35px",
            padding: "15px 40px",
            background: "#D4AF37",
            color: "#1f2937",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
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