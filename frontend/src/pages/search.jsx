import TravelCard from "../components/travalcard";

function Search() {

const travelData = [

{
id:1,
from:"Delhi",
to:"Goa",
transport_name:"IndiGo Flight",
transport_id:"FL102",
date:"2026-04-20",
price:5000,
departure_time:"09:00 AM",
arrival_time:"10:30 AM"
},

{
id:2,
from:"Mumbai",
to:"Jaipur",
transport_name:"Volvo Bus",
transport_id:"BS210",
date:"2026-04-21",
price:3500,
departure_time:"08:00 AM",
arrival_time:"02:00 PM"
},

{
id:3,
from:"Lucknow",
to:"Delhi",
transport_name:"Shatabdi Express",
transport_id:"TR340",
date:"2026-04-22",
price:2500,
departure_time:"08:00 AM",
arrival_time:"02:00 PM"
},

{
id:4,
from:"Delhi",
to:"Agra",
transport_name:"Air India",
transport_id:"FL450",
date:"2026-04-20",
price:3000,
departure_time:"09:00 AM",
arrival_time:"10:30 AM"
},

{
id:5,
from:"Mumbai",
to:"Jaipur",
transport_name:"Sleeper Bus",
transport_id:"BS120",
date:"2026-04-21",
price:3500,
departure_time:"08:00 AM",
arrival_time:"02:00 PM"
},

{
id:6,
from:"Lucknow",
to:"Delhi",
transport_name:"Rajdhani Express",
transport_id:"TR201",
date:"2026-04-22",
price:2500,
departure_time:"08:00 AM",
arrival_time:"02:00 PM"
},

{
id:7,
from:"Lucknow",
to:"Delhi",
transport_name:"Intercity Express",
transport_id:"TR310",
date:"2026-04-20",
price:2500,
departure_time:"08:00 AM",
arrival_time:"02:00 PM"
},

{
id:8,
from:"Lucknow",
to:"Mumbai",
transport_name:"Vistara Flight",
transport_id:"FL520",
date:"2026-04-22",
price:5500,
departure_time:"10:30 AM",
arrival_time:"12:45 PM"
}

];

return (

<div className="container py-4">

<h2 className="fw-bold mb-4">
✈️ Available Travel
</h2>

<div className="row">

{travelData.map((travel) => (

<div className="col-12" key={travel.id}>
<TravelCard travel={travel}/>
</div>

))}

</div>

</div>

);

}

export default Search;