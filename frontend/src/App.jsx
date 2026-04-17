import { useState } from 'react'
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Search from "./pages/search";
import Booking from "./pages/booking";
import MyBookings from "./pages/mybookings";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/mybookings" element={<MyBookings/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>

  )
}

export default App
