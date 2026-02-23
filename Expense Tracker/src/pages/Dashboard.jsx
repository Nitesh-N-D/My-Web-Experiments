import App from "../App";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
   
      <div className="flex justify-between items-center p-4 bg-white shadow mb-6">
        <h2 className="text-xl font-bold">Expense Tracker</h2>

        <button
          onClick={handleLogout}
          className="text-red-600 font-medium hover:underline"
        >
          Logout
        </button>
      </div>

     
      <App />
    </div>
  );
}

export default Dashboard;