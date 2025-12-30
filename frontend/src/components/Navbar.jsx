import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Hide navbar on auth pages
  if (!user) return null;

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="font-semibold hover:underline">
          Dashboard
        </Link>

        {user.role === "admin" && (
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-sm">
          <span className="font-medium">{user.fullName}</span>{" "}
          <span className="text-gray-300">({user.role})</span>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
