import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyBookings() {

const [bookings, setBookings] = useState([]);
const navigate = useNavigate();

useEffect(() => {
fetch("http://127.0.0.1:8000/api/bookings/")
.then(res => res.json())
.then(data => setBookings(data));
}, []);


const cancelBooking = (id) => {
fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
method: "DELETE",
})
.then(() => {
setBookings(bookings.filter(item => item.id !== id));
});
};


return (

<div className="container py-5">

<h2 className="text-center fw-bold mb-4">
🎫 My Bookings
</h2>

<div className="row g-4">

{bookings.length === 0 ? (
<div className="text-center text-muted">
No bookings found
</div>
) : (

bookings.map((booking) => (

<div className="col-md-6" key={booking.id}>

{/* MAIN CARD */}
<div className="card shadow-lg border-0 rounded-4 p-3">

{/* ROUTE */}
<div className="d-flex justify-content-between align-items-center">

<h5 className="fw-bold">
{booking.from_location}
</h5>

<span className="text-muted">→</span>

<h5 className="fw-bold">
{booking.to_location}
</h5>

</div>

{/* TIME */}
<p className="text-muted mb-1">
🕒 {booking.departure_time} → {booking.arrival_time}
</p>

{/* PRICE + DATE */}
<div className="d-flex justify-content-between">

<p className="mb-0">
💰 ₹{booking.price}
</p>

<p className="mb-0">
📅 {booking.date}
</p>

</div>

<hr />

{/* BUTTONS */}
<div className="d-flex justify-content-between">

<button
className="btn btn-primary btn-sm"
data-bs-toggle="modal"
data-bs-target={`#modal${booking.id}`}
>
View Details
</button>

<button
className="btn btn-success btn-sm"
onClick={() => navigate("/ticket", { state: booking })}
>
🎫 Ticket
</button>

<button
className="btn btn-danger btn-sm"
onClick={() => cancelBooking(booking.id)}
>
Cancel
</button>

</div>

</div>

{/* MODAL */}
<div
className="modal fade"
id={`modal${booking.id}`}
tabIndex="-1"
>

<div className="modal-dialog modal-dialog-centered">
<div className="modal-content rounded-4">

{/* HEADER */}
<div className="modal-header">
<h5 className="modal-title">
Booking Details
</h5>
<button className="btn-close" data-bs-dismiss="modal"></button>
</div>

{/* BODY */}
<div className="modal-body">

<p><strong>Name:</strong> {booking.name}</p>
<p><strong>Email:</strong> {booking.email}</p>

<hr />

<p><strong>Route:</strong> {booking.from_location} → {booking.to_location}</p>
<p><strong>Time:</strong> {booking.departure_time} → {booking.arrival_time}</p>
<p><strong>Price:</strong> ₹{booking.price}</p>
<p><strong>Date:</strong> {booking.date}</p>

<hr />

{/* PASSENGERS */}
<h6 className="fw-bold">👥 Passengers</h6>

{booking.passengers?.length > 0 ? (
booking.passengers.map((p, i) => (
<div key={i} className="border rounded p-2 mb-2">

<p className="mb-0">
<strong>{p.passenger_name}</strong>
</p>

<p className="mb-0 text-muted">
Age: {p.age}
</p>

<p className="mb-0 text-muted">
Seat: {p.seat_number}
</p>

</div>
))
) : (
<p className="text-muted">No passengers found</p>
)}

</div>

{/* FOOTER */}
<div className="modal-footer">
<button className="btn btn-secondary" data-bs-dismiss="modal">
Close
</button>
</div>

</div>
</div>

</div>

</div>

))

)}

</div>

</div>

);

}

export default MyBookings;