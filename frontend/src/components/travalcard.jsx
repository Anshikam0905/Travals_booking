import { useNavigate } from "react-router-dom";

function TravelCard({ travel }) {

const navigate = useNavigate();

return (

<div className="card shadow-lg border-0 rounded-4 mb-4">
<div className="card-body p-4">

<div className="row align-items-center">

{/* ROUTE */}
<div className="col-md-3">
<h5 className="fw-bold">
{travel.from} → {travel.to}
</h5>

<p className="text-muted mb-0">
🚆 {travel.transport_name}
</p>

<small className="text-muted">
ID: {travel.transport_id}
</small>

</div>


{/* TIME */}
<div className="col-md-3">

<p className="mb-1">
🕒 {travel.departure_time}
</p>

<p className="mb-0 text-muted">
Arrival: {travel.arrival_time}
</p>

</div>


{/* DATE */}
<div className="col-md-2">

<p className="mb-0">
📅 {travel.date}
</p>

</div>


{/* PRICE */}
<div className="col-md-2">

<h5 className="text-success fw-bold">
₹{travel.price}
</h5>

</div>


{/* BUTTON */}
<div className="col-md-2">

<button
className="btn btn-primary w-100"
onClick={() => navigate("/booking", { state: travel })}
>
Book Now
</button>

</div>

</div>

</div>
</div>

);

}

export default TravelCard;