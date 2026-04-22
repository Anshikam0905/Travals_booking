import { Link, useLocation } from "react-router-dom";
import "../pages/Home.css";


function Navbar() {

const location = useLocation();

return (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">

<div className="container">

<Link className="navbar-brand fw-bold" to="/">
✈️ TravelBooking
</Link>


<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>


<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto align-items-center">

<li className="nav-item">
<Link 
className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
to="/"
>
Home
</Link>
</li>


<li className="nav-item">
<Link 
className={`nav-link ${location.pathname === "/search" ? "active" : ""}`}
to="/search"
>
Search
</Link>
</li>


<li className="nav-item">
<Link 
className={`nav-link ${location.pathname === "/mybookings" ? "active" : ""}`}
to="/mybookings"
>
My Bookings
</Link>
</li>


<li className="nav-item">
<Link 
className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
to="/profile"
>
Profile
</Link>
</li>


<li className="nav-item">
<Link 
className="btn btn-light ms-2 px-3"
to="/login"
>
Login
</Link>
</li>


<li className="nav-item">
<Link 
className="btn btn-warning ms-2 px-3"
to="/booking"
>
Book Now
</Link>
</li>

</ul>

</div>

</div>

</nav>

)

}

export default Navbar;