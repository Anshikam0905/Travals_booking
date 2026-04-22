import { useLocation, useNavigate } from "react-router-dom";

function Ticket() {

const location = useLocation();
const navigate = useNavigate();

const booking = location.state || {};

return (

<div className="container py-5">

<div className="row justify-content-center">
<div className="col-lg-8">

<div className="card shadow-lg border-0 rounded-4">

<div className="card-header bg-primary text-white text-center">
<h4 className="mb-0">🎫 Booking Ticket</h4>
</div>

<div className="card-body">

{/* USER DETAILS */}
<h5 className="fw-bold mb-3">👤 Passenger Info</h5>

<div className="row mb-3">

<div className="col-md-6">
<p><strong>Name:</strong> {booking.name}</p>
</div>

<div className="col-md-6">
<p><strong>Email:</strong> {booking.email}</p>
</div>

</div>


<hr/>


{/* TRAVEL DETAILS */}
<h5 className="fw-bold mb-3">🚆 Travel Details</h5>

<div className="row">

<div className="col-md-6">
<p>
<strong>From:</strong> {booking.from_location}
</p>

<p>
<strong>To:</strong> {booking.to_location}
</p>

<p>
<strong>Date:</strong> {booking.date}
</p>

</div>

<div className="col-md-6">

<p>
<strong>Departure:</strong> {booking.departure_time}
</p>

<p>
<strong>Arrival:</strong> {booking.arrival_time}
</p>

<p>
<strong>Total Passengers:</strong> {booking.total_passengers}
</p>

</div>

</div>


<hr/>


{/* TRANSPORT */}
<h5 className="fw-bold mb-3">🚍 Transport Info</h5>

<div className="row">

<div className="col-md-6">
<p>
<strong>Transport Name:</strong> {booking.transport_name}
</p>
</div>

<div className="col-md-6">
<p>
<strong>Transport ID:</strong> {booking.transport_id}
</p>
</div>

</div>


<hr/>


{/* PAYMENT */}
<h5 className="fw-bold mb-3">💳 Payment Details</h5>

<div className="row">

<div className="col-md-6">
<p>
<strong>Payment Type:</strong> {booking.payment_type}
</p>
</div>

<div className="col-md-6">
<p>
<strong>Payment ID:</strong> {booking.payment_id}
</p>
</div>

</div>


<hr/>


{/* PASSENGERS */}
<h5 className="fw-bold mb-3">👥 Passenger List</h5>

{
booking.passengers?.map((p, index) => (

<div key={index} className="card p-2 mb-2 bg-light">

<div className="row">

<div className="col-md-4">
<strong>Name:</strong> {p.passenger_name}
</div>

<div className="col-md-4">
<strong>Age:</strong> {p.age}
</div>

<div className="col-md-4">
<strong>Seat:</strong> {p.seat_number}
</div>

</div>

</div>

))
}


<hr/>


{/* PRICE */}
<div className="text-center">

<h4 className="fw-bold text-success">
Total Price : ₹{booking.price}
</h4>

</div>


{/* BUTTONS */}
<div className="text-center mt-4">

<button
className="btn btn-outline-primary me-2"
onClick={() => window.print()}
>
🖨️ Print Ticket
</button>

<button
className="btn btn-success"
onClick={() => navigate("/mybookings")}
>
Back to My Bookings
</button>

</div>


</div>

</div>

</div>
</div>

</div>

);

}

export default Ticket;