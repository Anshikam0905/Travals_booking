import { useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Search from "./pages/search";
import MyBookings from "./pages/mybookings";
import Profile from "./pages/profile";
import PrivateRoute from "./ProtectedRoute";
import Booking from "./pages/Booking";
import Navbar from "./components/navbar";
import Ticket from "./pages/ticket";
import Register from "./pages/registration";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/booking" element={<PrivateRoute><Booking /></PrivateRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  </div>
);
}

export default App;