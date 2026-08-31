import { useState } from "react";
import { registerUser } from "../../services/authService";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await registerUser(form);

      console.log("Registration successful:", result);

      alert("Registration successful!");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      window.location.href = "/login";
    } catch (error) {
      console.error("Registration error:", error);

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Registration failed";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            position: "relative",
            margin: "10px 0",
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              paddingRight: "50px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#d4af37",
            color: "white",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Already have an account?{" "}

        <button
          type="button"
          onClick={() => {
            window.location.href = "/login";
          }}
          style={{
            border: "none",
            background: "none",
            color: "#d4af37",
            cursor: "pointer",
            fontSize: "16px",
            textDecoration: "underline",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register; 