import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "120px 8%",
          background: "#f8f8f8",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "30px",
          }}
        >
          About DineSpace
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          DineSpace is a Smart Restaurant Table Reservation System developed
          to help customers easily discover restaurants, check table
          availability, and reserve tables online. Our mission is to make
          restaurant reservations simple, fast, and convenient.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "80px",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              width: "250px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              textAlign: "center",
            }}
          >
            <h2>100+</h2>
            <p>Restaurants</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              width: "250px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              textAlign: "center",
            }}
          >
            <h2>10,000+</h2>
            <p>Reservations</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              width: "250px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              textAlign: "center",
            }}
          >
            <h2>4.9 ★</h2>
            <p>Customer Rating</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;