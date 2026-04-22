import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {

const location = useLocation();
const navigate = useNavigate();

const travel = location.state || {};

// Auto Generate Transport ID
const generateTransportId = () => {
return "TR" + Math.floor(1000 + Math.random() * 9000);
};

const [passengers, setPassengers] = useState([
{ passenger_name: "", age: "" }
]);

const [formData, setFormData] = useState({
name: "",
email: "",

from_location: travel?.from || "",
to_location: travel?.to || "",

transport_name: travel?.transport_name || "",
transport_id: travel?.transport_id || generateTransportId(),

departure_time: travel?.departure_time || "",
arrival_time: travel?.arrival_time || "",

payment_type: "",

price: travel?.price || "",
date: travel?.date || ""
});


const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};


const handlePassengerChange = (index, e) => {
const updated = [...passengers];
updated[index][e.target.name] = e.target.value;
setPassengers(updated);
};


const addPassenger = () => {
setPassengers([
...passengers,
{ passenger_name: "", age: "" }
]);
};


const createBooking = () => {

const totalPrice = formData.price * passengers.length;

const bookingData = {
...formData,
price: totalPrice,
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
<div className="col-lg-8">

<div className="card shadow-lg border-0 rounded-4 p-4">

<h3 className="text-center fw-bold mb-4">
🎫 Confirm Booking
</h3>

{/* USER INFO */}
<h5 className="mb-3">👤 User Details</h5>

<div className="row g-3 mb-4">

<div className="col-md-6">
<input
type="text"
name="name"
placeholder="Full Name"
className="form-control"
onChange={handleChange}
/>
</div>

<div className="col-md-6">
<input
type="email"
name="email"
placeholder="Email"
className="form-control"
onChange={handleChange}
/>
</div>

</div>


{/* TRAVEL INFO */}
<h5 className="mb-3">🚆 Travel Details</h5>

<div className="p-3 bg-light rounded mb-3">

<div className="d-flex justify-content-between">
<h6>{formData.from_location}</h6>
<h6>→</h6>
<h6>{formData.to_location}</h6>
</div>

<p className="text-muted">
🕒 {formData.departure_time} → {formData.arrival_time}
</p>

<p className="text-muted">
💰 ₹{formData.price}
</p>

</div>


{/* TRANSPORT */}
<h5 className="mb-3">🚍 Transport Details</h5>

<div className="row g-3 mb-3">

<div className="col-md-6">
<input
type="text"
name="transport_name"
className="form-control"
value={formData.transport_name}
readOnly
/>
</div>

<div className="col-md-6">
<input
type="text"
name="transport_id"
className="form-control"
value={formData.transport_id}
readOnly
/>
</div>

</div>


{/* PAYMENT */}
<div className="mb-3">
<select
name="payment_type"
className="form-control"
onChange={handleChange}
>
<option>Select Payment Type</option>
<option>UPI</option>
<option>Card</option>
<option>Net Banking</option>
<option>Cash</option>
</select>
</div>


{/* DATE */}
<div className="mb-3">
<input
type="date"
name="date"
className="form-control"
// value={formData.date}
onChange={handleChange}
/>
</div>


{/* PASSENGERS */}
<h5 className="fw-bold">👥 Passengers</h5>

{passengers.map((p, index) => (
<div key={index} className="card p-3 mb-2 shadow-sm">

<div className="row">

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

<h5 className="text-success">
Total Price : ₹{formData.price * passengers.length}
</h5>
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