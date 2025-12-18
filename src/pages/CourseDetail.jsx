import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourse();
  }, [id]);

  // 👇 ENROLL FUNCTION
  const enroll = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/enroll",
        { courseId: course._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Enrolled successfully. 'll be contacted soon.");
    } catch (err) {
      alert(err.response?.data?.message || "Enrollment failed");
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <main className="py-10">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{course.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{course.description}</p>

          <div className="mt-4 flex gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-300"><b>Category:</b> {course.category}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300"><b>Difficulty:</b> {course.difficulty}</div>
          </div>

          <div className="mt-6">
            <button onClick={enroll} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Enroll</button>
          </div>

          <h3 className="mt-6 text-lg font-medium text-slate-900 dark:text-slate-100">Lessons</h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
            {course.lessons?.map((lesson, index) => (
              <li key={index}>{lesson.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CourseDetail;
