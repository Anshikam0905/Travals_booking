const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  navigate("/login");
};
<button onClick={handleLogout}>Logout</button>