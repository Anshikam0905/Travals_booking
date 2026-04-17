import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {

const location = useLocation();
const navigate = useNavigate();

const travel = location.state;

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: ""
});

// If user comes directly without selecting travel
if (!travel) {
  return (
    <div className="container mt-5 text-center">
      <h3>No Travel Selected</h3>
    </div>
  );
}

// Handle input change
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// Handle booking submit
const handleSubmit = (e) => {
  e.preventDefault();

  const booking = {
    ...formData,
    travel: travel
  };

  // Get existing bookings
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // Add new booking
  existingBookings.push(booking);

  // Save to localStorage
  localStorage.setItem(
    "bookings",
    JSON.stringify(existingBookings)
  );

  alert("Booking Confirmed!");

  // Redirect to MyBookings page
  navigate("/mybookings");
};

return (
<div className="container mt-5">

<h2>Confirm Booking</h2>

<div className="card shadow p-3 mt-3">

<h5>
{travel.from} → {travel.to}
</h5>

<p>Date: {travel.date}</p>

<h4 className="text-success">
₹{travel.price}
</h4>

</div>

<form onSubmit={handleSubmit} className="mt-4">

<div className="mb-3">
<input
type="text"
name="name"
placeholder="Passenger Name"
className="form-control"
required
onChange={handleChange}
/>
</div>

<div className="mb-3">
<input
type="email"
name="email"
placeholder="Email"
className="form-control"
required
onChange={handleChange}
/>
</div>

<div className="mb-3">
<input
type="text"
name="phone"
placeholder="Phone Number"
className="form-control"
required
onChange={handleChange}
/>
</div>

<button className="btn btn-success">
Confirm Booking
</button>

</form>

</div>
);
}

export default Booking;