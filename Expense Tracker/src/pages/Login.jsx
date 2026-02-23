import { useState } from "react";
import users from "../data/users.json";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", user.username);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }
return (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-80 border border-gray-300 p-6">
      
   
     <h1 className="text-xl font-semibold text-center mb-4 text-red-600">
  Personal Expense Tracker
</h1>

<h2 className="text-lg font-medium text-center mb-4 text-gray-800">
  Login
</h2>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">
          {error}
        </p>
      )}

      <form onSubmit={handleLogin}>
        <input
          className="border border-gray-300 p-2 w-full mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="border border-gray-300 p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

      <button className="border border-gray-800 w-full py-2 text-sm text-gray-700">
  Login
</button>
      </form>
    </div>
  </div>
);
}

export default Login;