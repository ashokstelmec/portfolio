import React, { useState } from "react";
import Header from "../Component/Header";
import MainItem from "../Component/MainItem";

const Home = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (e) => {
    setActiveLink(e);
  };

  return (
    <div className='d-md-flex'>
      <Header handleClick={handleClick} />
      <MainItem link={activeLink} />
    </div>
  );
};

export default Home;
