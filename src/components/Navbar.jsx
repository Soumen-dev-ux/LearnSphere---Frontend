import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">LearnSphere</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/courses" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">Courses</Link>

          {user ? (
            <>
              <Link to="/dashboard" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">Dashboard</Link>
              {user.role === "admin" && (
                <Link to="/admin" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">Admin</Link>
              )}
              <button onClick={logout} className="ml-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">Login</Link>
              <Link to="/signup" className="ml-2 text-sm text-white bg-indigo-300 px-3 py-1 rounded-md">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
