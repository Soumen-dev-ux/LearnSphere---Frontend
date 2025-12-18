import { useState } from "react";
import api from "../services/api";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "Beginner",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await api.post("/courses", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Course created");
    } catch (err) {
      alert(err.response?.data?.message || "Error creating course");
    }
  };

  return (
    <main className="py-10">
      <div className="container">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Admin – Create Course</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <input
              name="category"
              placeholder="Category"
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <select
              name="difficulty"
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <div className="flex justify-end">
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Create Course</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Admin;
