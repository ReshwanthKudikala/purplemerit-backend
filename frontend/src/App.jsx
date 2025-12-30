import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* USER ROUTE */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* ADMIN ROUTE */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
