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
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
    
    {/* Brand / Title (OUTSIDE box) */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Expense<span className="text-red-600">Flow</span>
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Track smarter. Spend better.
      </p>
    </div>

    {/* Login Box (ONLY login UI) */}
    <div className="w-80 bg-white border border-gray-200 p-6 shadow-md">
      <h2 className="text-sm font-medium text-gray-700 mb-4 text-center">
        Sign in to your account
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">
          {error}
        </p>
      )}

      <form onSubmit={handleLogin}>
        <input
          className="border border-gray-300 p-2 w-full mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="border border-gray-300 p-2 w-full mb-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition">
          Sign In
        </button>
      </form>
    </div>
  </div>
);
}

export default Login;
