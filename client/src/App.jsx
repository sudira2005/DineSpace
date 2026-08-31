import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import Restaurants from "./pages/public/Restaurants";
import RestaurantDetails from "./pages/public/RestaurantDetails";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import BookTable from "./pages/customer/BookTable";
import MyReservations from "./pages/customer/MyReservations";
import Profile from "./pages/customer/Profile";

import Dashboard from "./pages/admin/Dashboard";
import ManageRestaurants from "./pages/admin/ManageRestaurants";
import ManageTables from "./pages/admin/ManageTables";
import ManageReservations from "./pages/admin/ManageReservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/book-table" element={<BookTable />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route
          path="/admin/restaurants"
          element={<ManageRestaurants />}
        />
        <Route path="/admin/tables" element={<ManageTables />} />
        <Route
          path="/admin/reservations"
          element={<ManageReservations />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
