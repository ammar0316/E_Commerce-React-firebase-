// import React from "react";
// import Navabr from "./Navbar";
// import Cards from "./Cards";
// import Footer from "./Footer";

// const Home = () => {
//   return <>
//   <Navabr/>
//   <Cards/>
//   <Footer/>
//   </>;
// };

// export default Home;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-Config.js"; // make sure path is correct
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/logIn");
      }
    });

    // Clean up listener
    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;

