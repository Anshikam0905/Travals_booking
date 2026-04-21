import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {

const location = useLocation();
const navigate = useNavigate();

const travel = location.state || {};

// ✅ passengers state FIXED
const [passengers, setPassengers] = useState([
{ passenger_name: "", age: "" }
]);

const [formData, setFormData] = useState({
name: "",
email: "",
from: travel?.from || "",
to: travel?.to || "",
type: travel?.type || "",
price: travel?.price || "",
date: travel?.date || "",
departure_time: travel?.departure_time || "",
arrival_time: travel?.arrival_time || ""
});

// handle input
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

// passenger change
const handlePassengerChange = (index, e) => {
const updated = [...passengers];
updated[index][e.target.name] = e.target.value;
setPassengers(updated);
};

// add passenger
const addPassenger = () => {
setPassengers([
...passengers,
{ passenger_name: "", age: "" }
]);
};

// submit booking
const createBooking = () => {

const bookingData = {
name: formData.name,
email: formData.email,

from_location: formData.from,
to_location: formData.to,

departure_time: formData.departure_time,
arrival_time: formData.arrival_time,

price: formData.price,
date: formData.date,

total_passengers: passengers.length,

passengers: passengers
};

fetch("http://127.0.0.1:8000/api/bookings/", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(bookingData)
})
.then(res => res.json())
.then(data => {
console.log(data);
navigate("/mybookings");
});

};

return (

<div className="container py-5">

<div className="row justify-content-center">
<div className="col-lg-7">

<div className="card border-0 shadow-lg rounded-4 p-4">

<h3 className="text-center mb-4 fw-bold">
🎫 Confirm Booking
</h3>

{/* USER INFO */}
<div className="row g-3 mb-3">

<div className="col-md-6">
<input
type="text"
name="name"
placeholder="Full Name"
className="form-control form-control-lg"
onChange={handleChange}
/>
</div>

<div className="col-md-6">
<input
type="email"
name="email"
placeholder="Email"
className="form-control form-control-lg"
onChange={handleChange}
/>
</div>

</div>

{/* TRAVEL INFO */}
<div className="p-3 bg-light rounded-3 mb-3">

<div className="d-flex justify-content-between">
<h6 className="fw-bold">{formData.from}</h6>
<h6>→</h6>
<h6 className="fw-bold">{formData.to}</h6>
</div>

<p className="text-muted mb-1">
🕒 {formData.departure_time} → {formData.arrival_time}
</p>

<p className="text-muted mb-0">
💰 ₹{formData.price}
</p>

</div>

{/* DATE + PASSENGERS */}
<div className="row g-3 mb-3">

<div className="col-md-6">
<input
type="date"
name="date"
className="form-control form-control-lg"
onChange={handleChange}
/>
</div>

<div className="col-md-6">
<input
type="number"
name="total_passengers"
placeholder="Passengers"
className="form-control form-control-lg"
onChange={handleChange}
/>
</div>

</div>

{/* PASSENGERS */}
<h5 className="fw-bold">👥 Passengers</h5>

{passengers.map((p, index) => (
<div key={index} className="card p-3 mb-2 shadow-sm border-0">

<div className="row g-2">

<div className="col-md-8">
<input
type="text"
name="passenger_name"
placeholder="Passenger Name"
className="form-control"
onChange={(e) => handlePassengerChange(index, e)}
/>
</div>

<div className="col-md-4">
<input
type="number"
name="age"
placeholder="Age"
className="form-control"
onChange={(e) => handlePassengerChange(index, e)}
/>
</div>

</div>

</div>
))}

<button
className="btn btn-outline-primary w-100 mb-3"
onClick={addPassenger}
>
+ Add Passenger
</button>

{/* SUBMIT */}
<button
className="btn btn-success w-100 fw-bold"
onClick={createBooking}
>
Confirm Booking
</button>

</div>

</div>
</div>

</div>

);
}

export default Booking;