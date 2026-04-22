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


return (

<div>



{/* Hero Section */}

<motion.div
className="hero"
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>

<h1>Book Your Journey</h1>
<p>Flight • Train • Bus</p>

<div className="search-box">

<input
name="from"
placeholder="From"
onChange={handleChange}
/>

<input
name="to"
placeholder="To"
onChange={handleChange}
/>

<input
type="date"
name="date"
onChange={handleChange}
/>

<select
name="type"
onChange={handleChange}
>

<option value="Train">Train</option>
<option value="Bus">Bus</option>
<option value="Flight">Flight</option>

</select>

<button onClick={handleSearch}>
Search
</button>

</div>

</motion.div>



{/* Popular Routes */}

<h2 className="title">Popular Routes</h2>

<div className="cards">

<motion.div
className="card"
whileHover={{ scale: 1.05 }}
onClick={()=>navigate("/search")}
>
Lucknow → Delhi
</motion.div>

<motion.div
className="card"
whileHover={{ scale: 1.05 }}
>
Delhi → Mumbai
</motion.div>

<motion.div
className="card"
whileHover={{ scale: 1.05 }}
>
Jaipur → Delhi
</motion.div>

<motion.div
className="card"
whileHover={{ scale: 1.05 }}
>
Mumbai → Bangalore
</motion.div>

</div>



{/* Travel Types */}

<h2 className="title">Travel Types</h2>

<div className="cards">

<motion.div className="card" whileHover={{ scale: 1.05 }}>
✈️ Flight
</motion.div>

<motion.div className="card" whileHover={{ scale: 1.05 }}>
🚆 Train
</motion.div>

<motion.div className="card" whileHover={{ scale: 1.05 }}>
🚌 Bus
</motion.div>

</div>



{/* Why Choose Us */}

<h2 className="title">Why Choose Us</h2>

<div className="cards">

<div className="card">
<h3>Best Price</h3>
<p>Affordable travel options</p>
</div>

<div className="card">
<h3>Secure Booking</h3>
<p>Safe and secure payment</p>
</div>

<div className="card">
<h3>Instant Ticket</h3>
<p>Quick booking confirmation</p>
</div>

<div className="card">
<h3>24/7 Support</h3>
<p>Always available for help</p>
</div>

</div>



{/* Footer */}

<div className="footer">

<div>

<h3>Travel Booking</h3>
<p>Book Train, Bus, Flight Tickets Easily</p>

</div>

<div>

<p>© 2026 Travel Booking</p>
<p>All Rights Reserved</p>

</div>

</div>


</div>

);

}

export default Home;