import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-xl ring-1 ring-slate-200 overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Side */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-6 sm:p-8 md:p-10 text-white">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
              Contact Us
            </h1>

            <p className="text-sm sm:text-base text-slate-100/90 mb-8 leading-relaxed">
              Have a project idea, collaboration opportunity, or any questions?
              Feel free to reach out using the form below. I'll get back to you
              as soon as possible.
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-100/90">
                  Email
                </p>
                <p className="mt-1 text-sm sm:text-base break-all font-medium">
                  shresthakshitiz102@gmail.com
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-100/90">
                  Phone
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium">
                  +977 9702291491
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-100/90">
                  Address
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium">
                  Nayabazar, Kathmandu City
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 sm:p-8 md:p-10">
            <form className="space-y-5 sm:space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm sm:text-base text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm sm:text-base text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm sm:text-base text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl sm:rounded-2xl bg-blue-600 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;