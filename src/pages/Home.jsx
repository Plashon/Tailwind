import React, { useState, useEffect } from "react";
import Search from "./../component/Search";
import Header from "./../component/Header";
import Restaurant from "./../component/Restaurant";
import Navbar from "../component/Navbar";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setfilterRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container flex flex-row flex-wrap items-center justify-center">
        <Navbar />
        <Search
          restaurants={restaurants}
          setfilterRestaurant={setfilterRestaurant}
        />
        <Restaurant restaurants={filterRestaurant} />
      </div>
    </>
  );
}

export default Home;