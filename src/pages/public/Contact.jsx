import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
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
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "50px",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#D4AF37",
              color: "#1f2937",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;