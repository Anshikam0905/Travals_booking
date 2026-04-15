import { useNavigate } from "react-router-dom";

function SearchBar() {

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-3">Search Travel</h3>

        <form onSubmit={handleSearch}>
          <div className="row">

            <div className="col-md-3">
              <input 
                type="text" 
                className="form-control"
                placeholder="From City"
                required
              />
            </div>

            <div className="col-md-3">
              <input 
                type="text" 
                className="form-control"
                placeholder="To Destination"
                required
              />
            </div>

            <div className="col-md-3">
              <input 
                type="date" 
                className="form-control"
                required
              />
            </div>

            <div className="col-md-3">
              <button 
                type="submit"
                className="btn btn-primary w-100"
              >
                Search
              </button>
            </div>

          </div>
        </form>

      </div>
    </div>
  );
}

export default SearchBar;