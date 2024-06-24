import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id} // การวนซ้ำแค่ละรอบ ค่าของ key ต้องไม่ซ้ำรอบก่อนหน้า
              img={restaurant.img}
              title={restaurant.title}
              type={restaurant.type}
            />
          );
        })}
    </>
  );
};

export default Restaurant;
