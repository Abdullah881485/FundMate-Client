import React from "react";

const Contact = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-[90%] md:w-4/5 lg:w-3/5 mx-auto my-16 text-base-content/70"
    >
      <title>FundMate | Contact</title>

      <div className="rounded-2xl bg-base-100 shadow-lg p-10 space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-(--brand)">Contact Us</h1>
          <p className="mt-2 text-base-content/60">
            Feel free to reach out. We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-(--brand)">
                Get in Touch
              </h2>
              <p className="text-base-content/80 mt-1">
                Our support team is here to help you anytime.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-(--brand) text-xl">📧</span>
                <p className="font-medium">support@fundmate.com</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-(--brand) text-xl">📞</span>
                <p className="font-medium">+880 1234 567 890</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-(--brand) text-xl">📍</span>
                <p className="font-medium">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-base-content/70 font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="border-b border-[#2a6877] bg-transparent focus:outline-none py-2 focus:border-b-2 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base-content/70 font-medium">Email</label>
              <input
                type="email"
                className="border-b border-[#2a6877] bg-transparent focus:outline-none py-2 focus:border-b-2 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base-content/70 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                className="border-b border-[#2a6877] bg-transparent focus:outline-none py-2 focus:border-b-2 transition resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2a6877] text-white font-semibold py-2 rounded-md shadow-md hover:bg-[#24555e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
