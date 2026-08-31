import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>DineSpace</h2>
          <p>Smart Restaurant Table Reservation System</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Restaurants</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📍 Colombo, Sri Lanka</p>
          <p>📞 +94 77 123 4567</p>
          <p>✉ info@dinespace.com</p>
        </div>
      </div>

      <hr />

      <p className="copyright">
        © 2026 DineSpace. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;