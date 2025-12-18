import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";




const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <main className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">All Courses</h2>

        {courses.length === 0 && <p className="mt-4 text-slate-600 dark:text-slate-300">No courses available</p>}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white dark:bg-slate-800 rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{course.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{course.description}</p>
              <div className="mt-4">
                <Link to={`/courses/${course._id}`} className="text-indigo-600 hover:underline">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Courses;
