import React, { useState, useEffect } from "react";
import Search from "./../component/Search";
import Restaurant from "./../component/Restaurant";


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
      <div className="container flex flex-row flex-wrap mx-auto items-center justify-center">
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
