import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      const token = localStorage.getItem("token");
      const res = await api.get("/enroll/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEnrollments(res.data);
    };
    fetchEnrollments();
  }, []);

  return (
    <main className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">My Dashboard</h2>

        {enrollments.length === 0 && <p className="mt-4 text-slate-600 dark:text-slate-300">No enrolled courses</p>}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrollments.map((en) => (
            <div key={en._id} className="bg-white dark:bg-slate-800 rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{en.courseId.title}</h3>
              
              <div className="mt-3">
                <p className="text-sm text-slate-600 dark:text-slate-300">Progress: <span className="font-medium">{en.progress}%</span></p>
                <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${en.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
