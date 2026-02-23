import App from "../App";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

 return (
  <div className="min-h-screen bg-gray-100">
    

    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      

      <h2 className="text-lg font-semibold text-gray-900">
        Expense<span className="text-red-600">Flow</span>
      </h2>

  
      <button
        onClick={handleLogout}
        className="text-sm text-gray-600 hover:text-red-600 transition"
      >
        Logout
      </button>
    </div>


    <div className="max-w-4xl mx-auto p-6">
      <App />
    </div>
  </div>
);
}

export default Dashboard;
