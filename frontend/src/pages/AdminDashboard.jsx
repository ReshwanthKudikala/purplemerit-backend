import { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get(`/admin/users?page=${pageNumber}`);
      setUsers(res.data.users || []);
      setTotalPages(res.data.totalPages || 1);
      setPage(pageNumber);
    } catch (err) {
      setError(
        err?.response?.data?.message || "Failed to load users"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const updateStatus = async (userId, isActive) => {
    const confirmAction = window.confirm(
      `Are you sure you want to ${isActive ? "deactivate" : "activate"} this user?`
    );

    if (!confirmAction) return;

    try {
      await api.patch(
        `/admin/users/${userId}/${isActive ? "deactivate" : "activate"}`
      );
      fetchUsers(page);
    } catch (err) {
      alert(
        err?.response?.data?.message || "Action failed"
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {error && (
        <p className="text-red-600 mb-3">{error}</p>
      )}

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Full Name</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-4"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u._id}>
                    <td className="p-2 border">
                      {u.email}
                    </td>
                    <td className="p-2 border">
                      {u.fullName}
                    </td>
                    <td className="p-2 border">
                      {u.role}
                    </td>
                    <td className="p-2 border">
                      {u.status}
                    </td>
                    <td className="p-2 border text-center">
                      {u.status === "active" ? (
                        <button
                          onClick={() =>
                            updateStatus(u._id, true)
                          }
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            updateStatus(u._id, false)
                          }
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        >
                          Activate
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          disabled={page === 1}
          onClick={() => fetchUsers(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => fetchUsers(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
