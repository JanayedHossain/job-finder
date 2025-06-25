import React, { useEffect, useState } from "react";
import bgContact from '../../assets/bgContact.jpg'
import { Navigate, useNavigation } from "react-router";
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const Contact = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = "JobFinder | Contact";
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>JobFinder | Contact</title>
      </Helmet>

      {(isNavigating || !isImageLoaded) && <Loading />}

      <div className="relative w-full h-screen max-h-[250px] sm:max-h-[300px] text-white">
        <img
          src={bgContact}
          alt="About Us"
          onLoad={() => setIsImageLoaded(true)}
          className="object-cover absolute top-0 left-0 h-full w-full"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 h-full w-full flex items-center justify-center"
        >
          <h1 className="text-4xl sm:text-6xl font-primaryFont">Contact</h1>
        </motion.div>

        <p className="absolute bottom-5 w-full flex items-center justify-center sm:text-xl">
          JobFinder &gt; Contact
        </p>
      </div>

      <div className="flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-[#5328C9] mb-2 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              We’re here to help and answer any question you might have.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5328C9]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5328C9]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5328C9] resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#5328C9] text-white font-semibold py-2 rounded-lg hover:bg-[#4521a3] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
