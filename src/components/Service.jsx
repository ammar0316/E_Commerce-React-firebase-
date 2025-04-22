import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build fast, scalable, and SEO-friendly websites using modern technologies.",
    },
    {
      title: "UI/UX Design",
      description: "Our designers create clean, intuitive, and beautiful user experiences.",
    },
    {
      title: "SEO Optimization",
      description: "Rank higher on search engines and improve your visibility organically.",
    },
    {
      title: "Custom Web Apps",
      description: "We build tailored solutions for startups, businesses, and entrepreneurs.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We offer high-quality digital services to help you grow and scale your online presence.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{service.title}</h3>
            <p className="text-gray-700 text-base">{service.description}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Service;
