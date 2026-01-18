import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-indigo-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center text-indigo-700 mb-4 animate-pulse">
          Contact Us
        </h2>
        <div className="w-28 h-1 bg-indigo-600 mx-auto mb-12 rounded-full"></div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Travel Contact"
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-bold text-indigo-600">Get in Touch</h3>
            <p className="text-gray-700 text-lg">
              Have questions or suggestions? Reach out and we'll help you plan
              your perfect tour!
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:abhishekhole26@gmail.com"
                  className="text-indigo-600 hover:underline"
                >
                  abhishekhole26@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
