import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="container">
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Login</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <div className="flex justify-end">
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Login</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
