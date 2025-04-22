import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn more about our mission, team, and what makes our platform unique.
        </p>
      </section>

      {/* Details Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We are a passionate team of developers, designers, and educators dedicated to building
          tools and content that help learners grow their skills in web development, design, and
          beyond. Our platform is focused on simplicity, modern design, and real-world learning.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to empower individuals through accessible and hands-on educational
          experiences. Whether you're a beginner or an advanced learner, we aim to provide resources
          that help you move forward with confidence.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default About;

