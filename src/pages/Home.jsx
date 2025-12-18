const Home = () => {
  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <section>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              Learn New Skills, Advance Your Career
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Interactive courses, expert instructors, and hands-on projects — everything to help you grow.</p>

            <div className="mt-6 flex gap-3">
              <a href="/courses" className="inline-block bg-indigo-300 text-white px-5 py-3 rounded-md">Browse Courses</a>
              <a href="/signup" className="inline-block border border-slate-300 px-5 py-3 rounded-md text-slate-700">Get Started</a>
            </div>
          </section>

          <section className="hidden md:block">
            <div className="w-full h-64 bg-gradient-to-tr from-indigo-100 to-indigo-300 rounded-lg shadow-lg flex items-center justify-center text-indigo-800">
              <span className="text-xl font-semibold">Start Your Journey with LearnSphere</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
