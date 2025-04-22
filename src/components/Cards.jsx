
import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebase-Config";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "React"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visibleData = showAll ? data : data.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section id="hidee" className="relative overflow-hidden bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#9333ea] text-white py-24 px-6">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-400 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-indigo-400 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Transforming Ideas into Reality
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90">
            Explore our portfolio of innovative and beautifully crafted web projects,
            where creativity meets functionality.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              View Projects
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Card Section */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border p-4 rounded shadow-md bg-white h-[300px] flex justify-center items-center"
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 max-w-7xl mx-auto">
            {visibleData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold text-indigo-700 mb-1">{item.title.toUpperCase()}</h2>
                  <p className="text-gray-600 text-sm mb-2 overflow-hidden line-clamp-2">
                    {item.description}
                  </p>
                  <h3 className="text-md font-bold text-green-600 mb-2">Price: ${item.price}</h3>
                  <button className="text-center    w-[100px] relative left-40 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* See More / Show Less */}
          {data.length > 8 && (
            <div className="text-right px-8 pb-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-200"
              >
                {showAll ? "Show Less" : "See More"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Cards;
