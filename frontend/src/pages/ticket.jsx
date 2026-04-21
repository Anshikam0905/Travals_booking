import { useLocation, useNavigate } from "react-router-dom";

function Ticket() {

const location = useLocation();
const navigate = useNavigate();

const booking = location.state;

if (!booking) {
return (
<div className="container mt-5 text-center">
<h4>No Ticket Found</h4>
<button 
className="btn btn-primary mt-3"
onClick={() => navigate("/mybookings")}
>
Go Back
</button>
</div>
);
}

return (

<div className="container py-5">

<div className="card shadow-lg border-0 rounded-4">

{/* HEADER */}
<div className="card-header bg-primary text-white text-center rounded-top-4">
<h3>🎫 Travel Ticket</h3>
</div>

<div className="card-body p-4">

{/* ROUTE */}
<div className="d-flex justify-content-between mb-3">

<div>
<h5>{booking.from_location}</h5>
<p className="text-muted">Departure</p>
</div>

<div className="align-self-center">
➡️
</div>

<div className="text-end">
<h5>{booking.to_location}</h5>
<p className="text-muted">Arrival</p>
</div>

</div>

<hr />

{/* TIME */}
<div className="row mb-3">

<div className="col-md-6">
<p><strong>Departure:</strong> {booking.departure_time}</p>
</div>

<div className="col-md-6">
<p><strong>Arrival:</strong> {booking.arrival_time}</p>
</div>

</div>

{/* DATE & PRICE */}
<div className="row mb-3">

<div className="col-md-6">
<p><strong>Date:</strong> {booking.date}</p>
</div>

<div className="col-md-6">
<p><strong>Price:</strong> ₹{booking.price}</p>
</div>

</div>

<hr />

{/* PASSENGERS */}
<h5 className="mb-3">👥 Passenger Details</h5>

{booking.passengers?.map((p, index) => (

<div 
key={index} 
className="border rounded p-3 mb-2"
>

<div className="row">

<div className="col-md-4">
<strong>Name</strong>
<p>{p.passenger_name}</p>
</div>

<div className="col-md-4">
<strong>Age</strong>
<p>{p.age}</p>
</div>

<div className="col-md-4">
<strong>Seat</strong>
<p>{p.seat_number}</p>
</div>

</div>

</div>

))}

<hr />

{/* USER DETAILS */}
<h6>User Info</h6>

<p><strong>Name:</strong> {booking.name}</p>
<p><strong>Email:</strong> {booking.email}</p>

</div>

{/* FOOTER */}
<div className="card-footer text-center">

<button 
className="btn btn-success me-2"
onClick={() => window.print()}
>
⬇️ Download Ticket
</button>

<button 
className="btn btn-secondary"
onClick={() => navigate("/mybookings")}
>
Back
</button>

</div>

</div>

</div>

);

}

export default Ticket;