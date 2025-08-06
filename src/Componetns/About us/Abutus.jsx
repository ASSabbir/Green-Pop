import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="https://i.ibb.co/gmnX7rW/josefin-WS5yj-Fjyc-NY-unsplash.jpg"
            alt="Green Pop"
            className="w-full lg:w-1/2 h-80 object-cover rounded-xl shadow-md"
          />
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold">About Green Pop 🌿</h2>
            <p className="text-lg text-gray-600">
              Green Pop is your go-to destination for vibrant, healthy, and sustainable green plants.
              Whether you're a seasoned plant lover or just starting your indoor jungle, we’ve got something for you. Our carefully selected plants are delivered with care, love, and expert guidance.
            </p>
            <p className="text-md text-gray-500">
              From indoor air-purifiers to outdoor bloomers, Green Pop helps you connect with nature right at home.
            </p>
          </div>
        </div>

        {/* Our Mission, Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">🌱 Our Mission</h3>
            <p className="text-gray-700">
              To make plant ownership accessible, enjoyable, and meaningful for everyone.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">🌿 Our Vision</h3>
            <p className="text-gray-700">
              A greener planet, one plant at a time — creating eco-conscious homes worldwide.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">🌎 Sustainability</h3>
            <p className="text-gray-700">
              We partner with local growers and use eco-friendly packaging to protect both your plants and the planet.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <NavLink to={'/products'}>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition">
            Explore Our Plants
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
