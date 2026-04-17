import { useEffect, useState } from "react";

function MyBookings() {

const [bookings, setBookings] = useState([]);

useEffect(() => {
  const savedBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  console.log("Bookings:", savedBookings);

  setBookings(savedBookings);
}, []);

return (
<div className="container mt-5">

<h2>My Bookings</h2>

{
bookings.length === 0 ? (
<p>No bookings found</p>
) : (

bookings.map((booking, index) => (

<div key={index} className="card shadow mt-3">
<div className="card-body">

<h5>
{booking?.travel?.from} → {booking?.travel?.to}
</h5>

<p>Date: {booking?.travel?.date}</p>

<p>Passenger: {booking?.name}</p>

<p>Phone: {booking?.phone}</p>

<h5 className="text-success">
₹{booking?.travel?.price}
</h5>

</div>
</div>

))
)

}

</div>
);
}

export default MyBookings;