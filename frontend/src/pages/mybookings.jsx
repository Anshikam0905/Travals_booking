import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyBookings() {

  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/api/bookings/", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });

  }, []);

  const deleteBooking = (id) => {

    const token = localStorage.getItem("token");

    fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(() => {
      setBookings(bookings.filter(b => b.id !== id));
    });
  };

  return (
    <div className="container py-4">

      <h2 className="mb-4 fw-bold">
        📖 My Bookings
      </h2>

      {bookings.map((booking) => (
        <div key={booking.id} className="card shadow mb-3">
          <div className="card-body">
            <div className="row align-items-center">

              {/* ROUTE */}
              <div className="col-md-3">
                <h5>
                  {booking.from_location} → {booking.to_location}
                </h5>
                <p className="text-muted">
                  {booking.transport_name}
                </p>
                <p className="text-muted">
                  ID : {booking.transport_id}
                </p>
              </div>

              {/* TIME */}
              <div className="col-md-3">
                <p>🕒 {booking.departure_time}</p>
                <p>📅 {booking.date}</p>
              </div>

              {/* PRICE */}
              <div className="col-md-2">
                <h5>₹{booking.price}</h5>
              </div>

              {/* BUTTONS */}
              <div className="col-md-4 text-end">

                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => navigate("/ticket", { state: booking })}
                >
                  View Details
                </button>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => navigate("/update-booking", { state: booking })}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBooking(booking.id)}
                >
                  Cancel
                </button>

              </div>

            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default MyBookings;