import { useNavigate } from "react-router-dom";

function TravelCard({ travel }) {

const navigate = useNavigate();

return (
<div className="card shadow mb-3">
<div className="card-body">

<div className="row align-items-center">

<div className="col-md-3">
<h5>{travel.from} → {travel.to}</h5>
<p>{travel.type}</p>
</div>

<div className="col-md-3">
<p>{travel.date}</p>
</div>

<div className="col-md-3">
<h5>₹{travel.price}</h5>
</div>

<div className="col-md-3">
<button 
className="btn btn-primary"
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