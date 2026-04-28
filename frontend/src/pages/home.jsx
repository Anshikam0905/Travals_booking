import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {

const navigate = useNavigate();

const [searchData, setSearchData] = useState({
from: "",
to: "",
date: "",
type: "Train"
});

const handleChange = (e) => {
setSearchData({
...searchData,
[e.target.name]: e.target.value
});
};

const handleSearch = async () => {

try {

const response = await axios.get(
"http://127.0.0.1:8000/api/travels/",
{ params: searchData }
);

navigate("/search", {
state: response.data
});

} catch (error) {
console.log(error);
}

};

const username = localStorage.getItem("username");

return (
    
<div>
{/* next line */}
<div className="hero">

<div className="hero-content">
<h1>
Welcome, {username} 👋</h1>
<h1>Find Your Perfect Journey</h1>
<p>Book Flights, Trains and Buses Easily</p>

<div className="search-container">

<input placeholder="From" />
<input placeholder="To" />
<input type="date" />

<select>
<option>Train</option>
<option>Flight</option>
<option>Bus</option>
</select>

<button>Search</button>

</div>

</div>

</div>
{/* next line */}
{/* offer section */}
<h2 className="section-title">Top Offers</h2>

<div className="offers">

<div className="offer-card">
<h3>20% OFF</h3>
<p>Train Booking</p>
</div>

<div className="offer-card">
<h3>Flat ₹500 OFF</h3>
<p>Flight Booking</p>
</div>

<div className="offer-card">
<h3>15% Discount</h3>
<p>Bus Tickets</p>
</div>

</div>
{/* offer section */}
{/* popular routes */}

<h2 className="section-title">Popular Routes</h2>

<div className="routes">

<div className="route-card">
Lucknow → Delhi
</div>

<div className="route-card">
Delhi → Mumbai
</div>

<div className="route-card">
Jaipur → Delhi
</div>

<div className="route-card">
Mumbai → Bangalore
</div>

</div>
{/* popular routes */}
{/* travel types */}
<h2 className="section-title">Travel Types</h2>

<div className="travel-types">

<div className="travel-card">
✈️
<h3>Flights</h3>
<p>Fastest way to travel</p>
</div>

<div className="travel-card">
🚆
<h3>Train</h3>
<p>Comfortable & Affordable</p>
</div>

<div className="travel-card">
🚌
<h3>Bus</h3>
<p>Budget Friendly Travel</p>
</div>

</div>
{/* travel types */}
{/* why choose us */}
{/* Why Choose Us */}

<h2 className="section-title">Why Choose Us</h2>

<div className="why-us">

<div className="why-card">
<div className="why-icon">🔒</div>
<h3>Secure Booking</h3>
<p>Your payment and data are completely secure</p>
</div>

<div className="why-card">
<div className="why-icon">💰</div>
<h3>Best Price</h3>
<p>Get best deals on Flights, Trains & Buses</p>
</div>

<div className="why-card">
<div className="why-icon">⚡</div>
<h3>Instant Confirmation</h3>
<p>Book tickets instantly without waiting</p>
</div>

<div className="why-card">
<div className="why-icon">☎️</div>
<h3>24/7 Support</h3>
<p>We are always here to help you</p>
</div>

</div>
{/* why choose us */}
{/* reviews */}
{/* Customer Reviews */}

<h2 className="section-title">Customer Reviews</h2>

<div className="reviews">

<div className="review-card">
<div className="review-stars">⭐⭐⭐⭐⭐</div>
<p>"Very smooth booking experience. Got best train price!"</p>
<h4>- Rahul Sharma</h4>
</div>

<div className="review-card">
<div className="review-stars">⭐⭐⭐⭐⭐</div>
<p>"Easy to use and fast booking. Highly recommended."</p>
<h4>- Priya Verma</h4>
</div>

<div className="review-card">
<div className="review-stars">⭐⭐⭐⭐⭐</div>
<p>"Booked flight in seconds. Amazing UI and offers."</p>
<h4>- Aman Gupta</h4>
</div>

</div>
{/* reviews */}
{/* destination */}
{/* Featured Destinations */}

<h2 className="section-title">Featured Destinations</h2>

<div className="destinations">

<div className="destination-card">
<img 
src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
alt="Delhi"
/>
<div className="destination-info">
<h3>Delhi</h3>
<p>Explore historical monuments & street food</p>
<button>Explore</button>
</div>
</div>

<div className="destination-card">
<img 
src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66"
alt="Mumbai"
/>
<div className="destination-info">
<h3>Mumbai</h3>
<p>City of dreams & beautiful beaches</p>
<button>Explore</button>
</div>
</div>

<div className="destination-card">
<img 
src="https://images.unsplash.com/photo-1477587458883-47145ed94245"
alt="Jaipur"
/>
<div className="destination-info">
<h3>Jaipur</h3>
<p>Royal palaces & heritage beauty</p>
<button>Explore</button>
</div>
</div>

<div className="destination-card">
<img 
src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80"
alt="Bangalore"
/>
<div className="destination-info">
<h3>Bangalore</h3>
<p>Modern city & tech hub</p>
<button>Explore</button>
</div>
</div>

</div>
{/* destination */}
{/* footer */}
{/* Footer */}

<footer className="footer">

<div className="footer-container">

<div>
<h4>TravelBooking</h4>
<p>Book Flights</p>
<p>Book Trains</p>
<p>Book Buses</p>
</div>

<div>
<h4>Company</h4>
<p>About Us</p>
<p>Contact</p>
<p>Careers</p>
</div>

<div>
<h4>Support</h4>
<p>Help Center</p>
<p>Terms & Conditions</p>
<p>Privacy Policy</p>
</div>

<div>
<h4>Follow Us</h4>
<p>Instagram</p>
<p>Facebook</p>
<p>Twitter</p>
</div>

</div>

<div className="footer-bottom">
© 2026 TravelBooking | All Rights Reserved
</div>

</footer>
{/* footer */}
</div>
);
}
export default Home;