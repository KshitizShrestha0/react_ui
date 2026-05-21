import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-16 px-4">
      <section className="mx-auto max-w-5xl rounded-3xl bg-slate-950/80 p-10 shadow-2xl shadow-black/30 backdrop-blur-lg">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">About Us</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Build better experiences with React and Tailwind CSS</h1>
          <p className="mx-auto mt-6 max-w-3xl text-slate-300 sm:text-lg">
            Welcome to our About page. We create modern, responsive web applications using React and Tailwind CSS,
            focused on clean design, smooth performance, and easy maintainability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-slate-900/90">
            <h2 className="mb-4 text-2xl font-semibold text-white">Our Mission</h2>
            <p className="text-slate-300 leading-7">
              We help teams deliver polished web experiences faster by combining the power of React components with Tailwind CSS utility classes.
              The result is a scalable UI that is easy to update and enjoyable to use.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-slate-900/90">
            <h2 className="mb-4 text-2xl font-semibold text-white">What We Value</h2>
            <ul className="space-y-3 text-slate-300 leading-7">
              <li>• Clean and responsive design.</li>
              <li>• Fast development with reusable React components.</li>
              <li>• Consistent styling with Tailwind CSS.</li>
              <li>• Performance and accessibility first.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-cyan-950/80 p-8 text-slate-100 shadow-xl shadow-cyan-500/10">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Get In Touch</h2>
          <p className="max-w-3xl leading-7 text-slate-200">
            Ready to build something great? Whether you're starting a new project or improving an existing app,
            our About page is the first step toward a modern web presence.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
