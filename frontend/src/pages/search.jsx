import TravelCard from "../components/travalcard";

function Search() {

  const travelData = [
    {
      id:1,
      from: "Delhi",
      to: "Goa",
      date: "2026-04-20",
      price: 5000,
      type: "Flight",
      departure_time: "09:00 AM",
      arrival_time: "10:30 AM"
    },
    {
      id:2,
      from: "Mumbai",
      to: "Jaipur",
      date: "2026-04-21",
      price: 3500,
      type: "Bus",
      departure_time: "08:00 AM",
      arrival_time: "02:00 PM"
    },
    {
      id:3,
      from: "Lucknow",
      to: "Delhi",
      date: "2026-04-22",
      price: 2500,
      type: "Train",
      departure_time: "08:00 AM",
      arrival_time: "02:00 PM"
    },
    {
      id:4,
      from: "Delhi",
      to: "Agra",
      date: "2026-04-20",
      price: 3000,
      type: "Flight",
      departure_time: "09:00 AM",
      arrival_time: "10:30 AM"
    },
    {
      id:5,
      from: "Mumbai",
      to: "Jaipur",
      date: "2026-04-21",
      price: 3500,
      type: "Bus",
      departure_time: "08:00 AM",
      arrival_time: "02:00 PM"
    },
    {
      id:6,
      from: "Lucknow",
      to: "Delhi",
      date: "2026-04-22",
      price: 2500,
      type: "Train",
      departure_time: "08:00 AM",
      arrival_time: "02:00 PM"
    },
    {
      id: 7,
      from: "Lucknow",
      to: "Delhi",
      type: "Train",
      price: 2500,
      date: "2026-04-20",
      departure_time: "08:00 AM",
      arrival_time: "02:00 PM"
      },
      {
      id: 8,
      from: "Lucknow",
      to: "Mumbai",
      type: "Flight",
      price: 5500,
      date: "2026-04-22",
      departure_time: "10:30 AM",
      arrival_time: "12:45 PM"
      }

  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Travel</h2>

      {
        travelData.map((travel) => (
          <TravelCard key={travel.id} travel={travel}/>
        ))
      }

    </div>
  );
}

export default Search;