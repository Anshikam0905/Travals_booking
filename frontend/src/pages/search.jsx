import TravelCard from "../components/travalcard";

function Search() {

  const travelData = [
    {
      id:1,
      from: "Delhi",
      to: "Goa",
      date: "2026-04-20",
      price: 5000,
      type: "Flight"
    },
    {
      id:2,
      from: "Mumbai",
      to: "Jaipur",
      date: "2026-04-21",
      price: 3500,
      type: "Bus"
    },
    {
      id:3,
      from: "Lucknow",
      to: "Delhi",
      date: "2026-04-22",
      price: 2500,
      type: "Train"
    },
    {
      id:4,
      from: "Delhi",
      to: "Agra",
      date: "2026-04-20",
      price: 3000,
      type: "Flight"
    },
    {
      id:5,
      from: "Mumbai",
      to: "Jaipur",
      date: "2026-04-21",
      price: 3500,
      type: "Bus"
    },
    {
      id:6,
      from: "Lucknow",
      to: "Delhi",
      date: "2026-04-22",
      price: 2500,
      type: "Train"
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