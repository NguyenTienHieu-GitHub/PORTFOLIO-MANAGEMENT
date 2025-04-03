import React from "react";
import Image from "../assets/images/tv-team.jpg";
const Home = () => {
  return (
    <div>
      <h2>Trang chủ</h2>
      <img src={Image} alt="Team" style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default Home;
